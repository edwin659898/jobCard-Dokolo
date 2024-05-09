<?php

namespace App\Http\Controllers;

use App\Models\BedPreparation;
use App\Models\ChildActivity;
use App\Models\Fruit;
use App\Models\JobCard;
use App\Models\ParentActivity;
use App\Models\Stock;
use App\Models\Timeline;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Session;

class PottingController extends Controller
{
    //view bed preperation to other site and its Activities
    public function Potting()
    {
        $data = ParentActivity::with('childs')
            ->where('parent_number', 10)
            ->first();
        return Inertia::render('Potting/PottingActivities', [
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

        return Inertia::render('Potting/Table', [
            'childData' => $child,
            'currentCards' => $currentCard,
        ]);
    }

    public function ViewStage($id)
    {
        $jobCard = $this->GetJobcard($id);
        $start_date = $this->GetDate($id);

        $users = User::where('site', auth()->user()->site)->get();

        return Inertia::render('Potting/AllOtherActivities', [
            'Jobcard' => $jobCard,
            'BeginDate' => $start_date,
            'Users' => $users,
        ]);
    }

    //store data for quantity recorded
    public function AssistToStore(Request $request, $id)
    {

        $data = $request->validate([
            'quantity' => 'required',
            'employeeName' => 'required',
        ]);

        $fruit = Fruit::findOrFail($id);

        $jobcard = JobCard::findOrFail($fruit->job_card_id);

        $timeline = Timeline::where([
            'job_card_id' => $jobcard->id,
            'child_activity_id' => Session::get('current_activity_id')
        ])->whereDate('created_at', Carbon::today())->first();

        if (!$timeline) {
            Timeline::create([
                'start_date' => Carbon::now()->format('Y-m-d, H:i:s'),
                'job_card_id' => $jobcard->id,
                'child_activity_id' => Session::get('current_activity_id')
            ]);
        }

        Stock::create([
            'fruit_id' => $fruit->id,
            'job_card_id' => $jobcard->id,
            'quantity' => $request->quantity,
            'employee_name' => $request->employeeName,
            'issued_by' => auth()->id(),
            'child_activity_id' => Session::get('current_activity_id')
        ]);

        return redirect()->back()->with('success', 'Update Successfully');
    }

    private function GetDate($id)
    {
        $jobCard = JobCard::findOrFail($id);
        $find_start_date = Timeline::where([
            'job_card_id' => $jobCard->id,
            'child_activity_id' => Session::get('current_activity_id')
        ])->whereDate('created_at',Carbon::today())->first();

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
                $query->where(['child_activity_id' => Session::get('current_activity_id')]);
            }
        ]);

        return $jobCard;
    }
}
