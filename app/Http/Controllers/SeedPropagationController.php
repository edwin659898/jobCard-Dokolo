<?php

namespace App\Http\Controllers;

use App\Models\BedPreparation;
use App\Models\Chemical;
use App\Models\ChildActivity;
use App\Models\JobCard;
use App\Models\ParentActivity;
use App\Models\Timeline;
use App\Models\Tree;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class SeedPropagationController extends Controller
{
    //view bed preperation to other site and its Activities
    public function Propagation()
    {
        $data = ParentActivity::with('childs')
            ->where('parent_number', 11)
            ->first();
        return Inertia::render('SeedPropergation/SeedPropergationActivities', [
            'data' => $data,
        ]);
    }

    //check jobcards available in specific activity
    public function ChildActivity($id)
    {
        Session::put('current_activity_id', $id);
        $child = ChildActivity::findOrFail($id);
        $user_roles = auth()->user()->roles()->pluck('role')->toArray();
        $activity_role = $child->roles()->pluck('role')->toArray();
        abort_unless(count(array_intersect($user_roles, $activity_role)) > 0, 403);
        $parent = $child->parent;
        $currentCard = JobCard::all();

        return Inertia::render('SeedPropergation/Table', [
            'childData' => $child,
            'currentCards' => $currentCard,
        ]);
    }

    public function ViewStage($id)
    {
        $jobCard = $this->GetJobcard($id);
        $start_date = $this->GetDate($id);

        $users = User::where('site', auth()->user()->site)->get();

        return Inertia::render('SeedPropergation/AllOtherActivities', [
            'Jobcard' => $jobCard,
            'BeginDate' => $start_date,
            'Users' => $users,
        ]);
    }

    private function GetDate($id)
    {
        $jobCard = JobCard::findOrFail($id);
        $find_start_date = Timeline::where([
            'job_card_id' => $jobCard->id,
            'child_activity_id' => Session::get('current_activity_id')
        ])->whereDate('created_at', Carbon::today())->first();

        if ($find_start_date) {
            $start_date = $find_start_date->start_date;
        } else {
            $start_date = Carbon::now();
        }

        return $start_date;
    }

    private function GetJobcard($id)
    {
        $jobCard = JobCard::findOrFail($id);
        $jobCard->load([
            'childactivity.roles',
            'bedPrep' => function ($query) use ($jobCard) {
                $query->with('tree')->where(['child_activity_id' => Session::get('current_activity_id')]);
            }
        ]);

        return $jobCard;
    }
}
