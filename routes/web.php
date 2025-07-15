<?php

use App\Models\ChildActivity;
use App\Models\JobCard;
use App\Models\Tree;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('login');
});

Route::get('/upload/tree', function () {
    for ($i = 1; $i <= 1112; $i++) {
        if($i < 100) {
            Tree::create([
                'tree_number' => 'BGF0'.$i,
                'location' => 'Kiambere'
            ]);
        }else {
            Tree::create([
                'tree_number' => 'BGF'.$i,
                'location' => 'Kiambere'
            ]);
        }

    }
    return redirect('login');
});


Route::get('/dashboard', function () {
    $jobcards = JobCard::with('childactivity','childactivity.parent')->get();
    return Inertia::render('Dashboard',['Jobcards' => $jobcards]);
})->middleware(['auth', 'verified'])->name('Dashboard');

Route::middleware(['auth'])->group(function () {
    //Users Roles
    Route::get('/manage/user/roles', [\App\Http\Controllers\RoleController::class, 'index'])->name('user.roles');
    Route::get('/manage/user/roles/{id}', [\App\Http\Controllers\RoleController::class, 'editUserRoles'])->name('Edit.user.roles');
    Route::patch('/update/user/roles/{id}', [\App\Http\Controllers\RoleController::class, 'updateUser'])->name('Update.user.roles');
    Route::get('/manage/activity/roles', [\App\Http\Controllers\RoleController::class, 'ActivityIndex'])->name('activity.roles');
    Route::get('/manage/activity/roles/{id}', [\App\Http\Controllers\RoleController::class, 'editActivityRoles'])->name('Edit.activity.roles');
    Route::patch('/update/activity/roles/{id}', [\App\Http\Controllers\RoleController::class, 'updateActivity'])->name('Update.activity.roles');
    Route::post('/create-role', [\App\Http\Controllers\RoleController::class, 'createRole'])->name('create role');
    Route::delete('/destroy-role/{id}', [\App\Http\Controllers\RoleController::class, 'destroyRole'])->name('destroy.role');
    Route::post('/upload/activities', [\App\Http\Controllers\RoleController::class, 'uploadActivities']);

    //TransportMedia
    Route::get('/transport-media/list', [\App\Http\Controllers\TransportController::class, 'index'])->name('transport.medias');
    Route::post('/create-media', [\App\Http\Controllers\TransportController::class, 'create'])->name('create TM');
    Route::delete('/destroy-media/{id}', [\App\Http\Controllers\TransportController::class, 'destroy'])->name('destroy.role');


    //Operational Planning
    Route::get('operation-planning-activities', [\App\Http\Controllers\OperationalPlanningController::class, 'operationPlanning'])->name('operation-planning');
    Route::get('operation-planning/{id}', [\App\Http\Controllers\OperationalPlanningController::class, 'ChildActivity'])->name('OP activity');
    Route::get('New-Jobcard/{id}', [\App\Http\Controllers\OperationalPlanningController::class, 'NewJobCard'])->name('New job-card');
    Route::post('New-Jobcard', [\App\Http\Controllers\OperationalPlanningController::class, 'store']);
    Route::get('operation-planning/activity/{id}', [\App\Http\Controllers\OperationalPlanningController::class, 'ViewStage'])->name('operation.planning');
    Route::patch('operation-planning/sign/activity/{id}', [\App\Http\Controllers\OperationalPlanningController::class, 'updateActivity']);

    //Communication of approved Plans
    Route::get('communication/activities', [\App\Http\Controllers\CommunicationController::class, 'Communication'])->name('communication');
    Route::get('communication/{id}', [\App\Http\Controllers\CommunicationController::class, 'ChildActivity'])->name('Comm activity');
    Route::get('communication/activity/{id}', [\App\Http\Controllers\CommunicationController::class, 'ViewStage'])->name('communication.activity');
    Route::patch('communication/sign/activity/{id}', [\App\Http\Controllers\CommunicationController::class, 'updateCommunicationStages']);

    //Fruit Collection
    Route::get('Fruit-collection/activities', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollection'])->name('fruit-collection');
    Route::get('Fruit-collection/activity/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'ChildActivity'])->name('FC activity');
    Route::get('Fruit-collection/plan-approval/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'PlanApproval'])->name('sign.stage7');
    Route::get('Fruit-collection/labelling-gunny-bags/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'LabelGunnyBag'])->name('sign.stage8');
    Route::patch('/save/tree-number/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'storeLabeledGunnyBags']);
    Route::delete('/destroy/tree-number/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'destroyTreeNumber'])->name('destroy.treeNumber');
    Route::get('/complete/labelling-gunning-bags/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'CompleteLabelGunnyBags'])->name('complete.labelling');
    Route::patch('Fruit-collection/sign/activity/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'updatePlanApproval']);
    Route::get('Fruit-collection/collection-from-plus-trees/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollectionFromTree'])->name('sign.stage9');
    Route::patch('/store/quantity/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'AssitToStore']);
    Route::get('Fruit-collection/sorting/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitSorting'])->name('sign.stage10');
    Route::get('Fruit-collection/packaging/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitPackaging'])->name('sign.stage11');
    Route::get('Fruit-collection/sign/weighing-fruits/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'WeighingFruits'])->name('sign.stage12');
    Route::get('Fruit-collection/loading/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollectionNurseryTransport'])->name('sign.stage13');
    Route::get('Fruit-collection/transport-to-collection-point/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollectionNurseryTransport'])->name('sign.stage14');
    Route::get('Fruit-collection/truck-arrival/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollectionNurseryTransport'])->name('sign.stage15');
    Route::get('Fruit-collection/offloading/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollectionNurseryTransport'])->name('sign.stage16');
    Route::get('Fruit-collection/weighing-of-fruits/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollectionNurseryTransport'])->name('sign.stage17');
    Route::get('Fruit-collection/disinfection/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollectionNurseryTransport'])->name('sign.stage18');
    Route::get('Fruit-collection/storage-of-fruits/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'FruitCollectionNurseryTransport'])->name('sign.stage19');
    Route::patch('/update/truck/departure-time/{id}', [\App\Http\Controllers\FruitCollectionController::class, 'UpdateTruckDepartureTime']);

    //Fruit Storage
    Route::get('Fruit-storage/activities', [\App\Http\Controllers\FruitStorageController::class, 'FruitStorage'])->name('fruit-storage');
    Route::get('Fruit-storage/activity/{id}', [\App\Http\Controllers\FruitStorageController::class, 'ChildActivity'])->name('FS activity');
    Route::get('Fruit-storage/activity-one/{id}', [\App\Http\Controllers\FruitStorageController::class, 'TruckArrivalToNursery'])->name('sign.stage20');
    Route::patch('/Fruit-storage/truck-arrival-times/{id}', [\App\Http\Controllers\FruitStorageController::class, 'TruckArrivalTimes']);
    // Route::get('Fruit-storage/quantity-check/{id}', [\App\Http\Controllers\FruitStorageController::class, 'QuantityCheckAtNursery'])->name('sign.stage21');
    // Route::patch('/Fruit-storage/store/quantity-check/{id}', [\App\Http\Controllers\FruitStorageController::class, 'StoreQuantityCheckAtNursery']);
    Route::get('Fruit-storage/quality-check/{id}', [\App\Http\Controllers\FruitStorageController::class, 'QualityCheckAtNursery'])->name('sign.stage22');
    Route::patch('/Fruit-storage/store/quality-check/{id}', [\App\Http\Controllers\FruitStorageController::class, 'StoreQualityCheckAtNursery']);
    Route::patch('Fruit-storage/sign/quality-check/{id}', [\App\Http\Controllers\FruitStorageController::class, 'signQualityCheck']);
    Route::get('Fruit-storage/activity-four/{id}', [\App\Http\Controllers\FruitStorageController::class, 'Disinfection'])->name('sign.stage23');
    Route::get('Fruit-storage/activity-five/{id}', [\App\Http\Controllers\FruitStorageController::class, 'StorageAfterDisinfection'])->name('sign.stage24');
    Route::patch('/Fruit-storage/store/after-disinfection/{id}', [\App\Http\Controllers\FruitStorageController::class, 'StoreQuantityAfterDisinfection']);

    //Depulping 
    Route::get('Depulping/activities', [\App\Http\Controllers\DepulpingController::class, 'Depulping'])->name('depulping');
    Route::get('Depulping/{id}', [\App\Http\Controllers\DepulpingController::class, 'ChildActivity'])->name('DP activity');
    Route::get('Depulping/activity/{id}', [\App\Http\Controllers\DepulpingController::class, 'ViewStage'])->name('depulping.activity');
    Route::patch('/Depulping/store-data/{id}', [\App\Http\Controllers\DepulpingController::class, 'AssistToStore']);

    //breaking dormancy
    Route::get('Breaking-dormancy/activities', [\App\Http\Controllers\BreakingDormancyController::class, 'BreakingDormancy'])->name('breakingDormancy');
    Route::get('Breaking-dormancy/{id}', [\App\Http\Controllers\BreakingDormancyController::class, 'ChildActivity'])->name('BD activity');
    Route::get('Breaking-dormancy/activity/{id}', [\App\Http\Controllers\BreakingDormancyController::class, 'ViewStage'])->name('breaking.dormancy');
    Route::patch('/Breaking-dormancy/store-data/{id}', [\App\Http\Controllers\BreakingDormancyController::class, 'AssistToStore']);

    //Transport of nuts
    Route::get('Transporting-nuts/activities', [\App\Http\Controllers\TransportToOtherSiteController::class, 'NutsTransportation'])->name('nuts-transportation');
    Route::get('Transporting-nuts/{id}', [\App\Http\Controllers\TransportToOtherSiteController::class, 'ChildActivity'])->name('NT activity');
    Route::get('Transporting-nuts/activity/{id}', [\App\Http\Controllers\TransportToOtherSiteController::class, 'ViewStage'])->name('nuts.transportation');
    Route::patch('/Transporting-nuts/store-data/{id}', [\App\Http\Controllers\TransportToOtherSiteController::class, 'AssistToStore']);

    //nursery shed construction
    Route::get('nursery-shed/activities', [\App\Http\Controllers\NurseryShedController::class, 'NurseryShed'])->name('nurseryShed');
    Route::get('nursery-shed/activity/{id}', [\App\Http\Controllers\NurseryShedController::class, 'ChildActivity'])->name('NS activity');
    Route::get('nursery-shed/planning/{id}', [\App\Http\Controllers\NurseryShedController::class, 'Planning'])->name('sign.stage41');
    Route::get('nursery-shed/site-identification/{id}', [\App\Http\Controllers\NurseryShedController::class, 'SiteIdentificationForConstruction'])->name('sign.stage42');
    Route::patch('nursery-shed/sign/activity/{id}', [\App\Http\Controllers\NurseryShedController::class, 'updatePlanning']);
    Route::get('nursery-shed/shed-construction/{id}', [\App\Http\Controllers\NurseryShedController::class, 'ShedConstruction'])->name('sign.stage43');
    //Route::get('nursery-shed/communication-to-headoffice/{id}', [\App\Http\Controllers\TunnelConstructionController::class, 'Communication'])->name('sign.stage79');

    //seed bed preparation
    Route::get('sowing-bed-preparation/activities', [\App\Http\Controllers\SeedBedPreparationController::class, 'BedPreparation'])->name('bed-preparation');
    Route::get('sowing-bed-preparation/activity/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'ChildActivity'])->name('BP activity');
    Route::get('sowing-bed-preparation/identify-point-of-sand-collection/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'PointOfSandCollection'])->name('sign.stage44');
    Route::patch('sowing-bed-preparation/identify-point-of-sand-collection/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'StorePointOfSandCollection']);
    Route::get('sowing-bed-preparation/sand-testing/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'sandAndWaterTesting'])->name('sign.stage45');
    Route::patch('sowing-bed-preparation/sand-testing/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'StoreSandAndWaterTesting']);
    Route::get('sowing-bed-preparation/water-testing/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'sandAndWaterTesting'])->name('sign.stage46');
    Route::delete('/destroy/compartment/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'destroyCompartment'])->name('destroy.compartment');
    Route::get('sowing-bed-preparation/sand-harvesting/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'SandHarvesting'])->name('sign.stage47');
    Route::get('sowing-bed-preparation/transport-sand-to-nursery/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'SandTransportToNursery'])->name('sign.stage48');
    Route::get('sowing-bed-preparation/sieveing-sand/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'SandTransportToNursery'])->name('sign.stage49');
    Route::patch('sowing-bed-preparation/transport-sand-to-nursery/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'StoreSandTransportToNursery']);
    Route::get('sowing-bed-preparation/transport-sand-to-production-area/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'SandTransportToNursery'])->name('sign.stage50');
    Route::get('sowing-bed-preparation/cleaning-production-area/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'SandTransportToNursery'])->name('sign.stage51');
    Route::get('sowing-bed-preparation/cleaning-plastic-sheets/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'SandTransportToNursery'])->name('sign.stage52');
    Route::get('sowing-bed-preparation/lay-sowing-bed-foundation/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'SandTransportToNursery'])->name('sign.stage53');
    Route::get('sowing-bed-preparation/apply-chemical-to-sand/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'SandChemicalApplication'])->name('sign.stage54');
    Route::get('sowing-bed-preparation/marking-seed-beds/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'MarkSeedBeds'])->name('sign.stage55');
    Route::patch('sowing-bed-preparation/marking-seed-beds/{id}', [\App\Http\Controllers\SeedBedPreparationController::class, 'StoreMarkSeedBeds']);
    Route::get('sowing-bed-preparation/communicate-with-HO/{id}', [\App\Http\Controllers\CommunicationController::class, 'ViewStage'])->name('sign.stage56');

    //potting
    Route::get('potting/activities', [\App\Http\Controllers\PottingController::class, 'Potting'])->name('potting');
    Route::get('potting/{id}', [\App\Http\Controllers\PottingController::class, 'ChildActivity'])->name('PT activity');
    Route::get('potting/activity/{id}', [\App\Http\Controllers\PottingController::class, 'ViewStage'])->name('potting.activity');
    Route::patch('/potting/store-data/{id}', [\App\Http\Controllers\PottingController::class, 'AssistToStore']);

    //propagation
    Route::get('propagation/activities', [\App\Http\Controllers\SeedPropagationController::class, 'Propagation'])->name('propagation');
    Route::get('propagation/{id}', [\App\Http\Controllers\SeedPropagationController::class, 'ChildActivity'])->name('PR activity');
    Route::get('propagation/activity/{id}', [\App\Http\Controllers\SeedPropagationController::class, 'ViewStage'])->name('propagation.activity');
    Route::patch('/propagation/store-data/{id}', [\App\Http\Controllers\SeedPropagationController::class, 'AssistToStore']);

    //Tunnel construction
    Route::get('seedling-bed-construction/activities', [\App\Http\Controllers\TunnelConstructionController::class, 'SeedlingBedConstruction'])->name('SeedlingBedConstruction');
    Route::get('seedling-bed-construction/activity/{id}', [\App\Http\Controllers\TunnelConstructionController::class, 'ChildActivity'])->name('TC activity');
    Route::get('seedling-bed-construction/planning/{id}', [\App\Http\Controllers\NurseryShedController::class, 'Planning'])->name('sign.stage80');
    Route::get('seedling-bed-construction/site-identification/{id}', [\App\Http\Controllers\NurseryShedController::class, 'SiteIdentificationForConstruction'])->name('sign.stage81');
    Route::get('seedling-bed-construction/construction-ongoing/{id}', [\App\Http\Controllers\TunnelConstructionController::class, 'TransportWithies'])->name('sign.stage82');
    Route::get('seedling-bed-construction/label-seedling-beds/{id}', [\App\Http\Controllers\TunnelConstructionController::class, 'LabelSeedlingBeds'])->name('sign.stage83');
    Route::patch('seedling-bed-construction/label-seedling-beds/{id}', [\App\Http\Controllers\TunnelConstructionController::class, 'StoreLabelSeedlingBeds']);
    Route::get('seedling-bed-construction/communication-to-headoffice/{id}', [\App\Http\Controllers\TunnelConstructionController::class, 'Communication'])->name('sign.stage111');

    //Pricking Out  
    //relook into numbers
    Route::get('pricking-out/activities', [\App\Http\Controllers\PrickingOutController::class, 'Pricking'])->name('prickingOut');
    Route::get('pricking-out/activity/{id}', [\App\Http\Controllers\PrickingOutController::class, 'ChildActivity'])->name('PO activity');
    Route::get('pricking-out/planning/{id}', [\App\Http\Controllers\NurseryShedController::class, 'Planning'])->name('sign.stage84');
    Route::get('pricking-out/chemical-preperation-for-treating/{id}', [\App\Http\Controllers\PrickingOutController::class, 'ChemicalPreperation'])->name('sign.stage85');
    Route::get('pricking-out/Extraction-of-seeds-and-place-in-basin-with-chemical/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage86');
    Route::get('pricking-out/place-seeds-in-basin-with-chemicals/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage87');
    Route::get('pricking-out/moving-seeds-to-seedling-area/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage88');
    Route::get('pricking-out/plant-seeds-in-pottingTubes/{id}', [\App\Http\Controllers\PrickingOutController::class, 'PlantSeedsToPottingTubes'])->name('sign.stage89');
    Route::patch('pricking-out/plant-seeds-in-pottingTubes/{id}', [\App\Http\Controllers\PrickingOutController::class, 'StorePlantSeedsToPottingTubes']);
    Route::get('pricking-out/water-seed-with-fungicide/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage90');
    Route::get('pricking-out/cover-seed-with-polythene/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage91');
    Route::get('pricking-out/watering/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage92');
    Route::get('pricking-out/moisture-and-air-regulation/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage93');
    Route::get('pricking-out/humidity-measurement/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage94');
    Route::get('pricking-out/temperature-measurement/{id}', [\App\Http\Controllers\PrickingOutController::class, 'AllOtherActivities'])->name('sign.stage95');

    //First Hardening
    Route::get('first-hardening/activities', [\App\Http\Controllers\FirstHardeningController::class, 'FirstHardening'])->name('FirstHardening');
    Route::get('first-hardening/activity/{id}', [\App\Http\Controllers\FirstHardeningController::class, 'ChildActivity'])->name('FH activity');
    Route::get('first-hardening/watering/{id}', [\App\Http\Controllers\FirstHardeningController::class, 'AllOtherActivities'])->name('sign.stage78');
    Route::get('first-hardening/weeding/{id}', [\App\Http\Controllers\FirstHardeningController::class, 'AllOtherActivities'])->name('sign.stage79');
    Route::get('first-hardening/sort-seeds-out/{id}', [\App\Http\Controllers\FirstHardeningController::class, 'Sorting'])->name('sign.stage80');
    Route::patch('first-hardening/sort-seeds-out/{id}', [\App\Http\Controllers\FirstHardeningController::class, 'StoreSorting']);
    Route::get('first-hardening/fungicide-application/{id}', [\App\Http\Controllers\FirstHardeningController::class, 'ChemicalSpraying'])->name('sign.stage81');
    Route::patch('first-hardening/chemical-spraying/{id}', [\App\Http\Controllers\FirstHardeningController::class, 'StoreChemicalSpraying']);

    //Second Hardening
    Route::get('second-hardening/activities', [\App\Http\Controllers\SecondHardeningController::class, 'SecondHardening'])->name('SecondHardening');
    Route::get('second-hardening/activity/{id}', [\App\Http\Controllers\SecondHardeningController::class, 'ChildActivity'])->name('SH activity');
    Route::get('second-hardening/moving-seedling-to-hardening-area/{id}', [\App\Http\Controllers\SecondHardeningController::class, 'AllOtherActivities'])->name('sign.stage82');
    Route::get('second-hardening/watering/{id}', [\App\Http\Controllers\SecondHardeningController::class, 'AllOtherActivities'])->name('sign.stage83');
    Route::get('second-hardening/weeding/{id}', [\App\Http\Controllers\SecondHardeningController::class, 'AllOtherActivities'])->name('sign.stage84');
    Route::get('second-hardening/sort-seeds-out/{id}', [\App\Http\Controllers\SecondHardeningController::class, 'Sorting'])->name('sign.stage85');
    Route::get('second-hardening/chemical-spraying/{id}', [\App\Http\Controllers\FirstHardeningController::class, 'ChemicalSpraying'])->name('sign.stage107');

    //Seedlings Selection
    Route::get('seedling-selection/activities', [\App\Http\Controllers\SeedlingSelectionController::class, 'SeedlingSelection'])->name('SeedlingSelection');
    Route::get('seedling-selection/activity/{id}', [\App\Http\Controllers\SeedlingSelectionController::class, 'ChildActivity'])->name('SS activity');
    Route::get('seedling-selection/sorting-out/{id}', [\App\Http\Controllers\SecondHardeningController::class, 'Sorting'])->name('sign.stage108');
    Route::get('seedling-selection/seedling-selection/{id}', [\App\Http\Controllers\SecondHardeningController::class, 'Sorting'])->name('sign.stage109');
    Route::get('seedling-selection/arrange-seedlings-in-crate/{id}', [\App\Http\Controllers\SeedlingSelectionController::class, 'SelectSeeds'])->name('sign.stage110');
    Route::patch('seedling-selection/arrange-seedlings-in-crate/{id}', [\App\Http\Controllers\SeedlingSelectionController::class, 'StoreSelectSeeds']);


    //Reports
    Route::get('reports',[\App\Http\Controllers\ReportController::class,'index'])->name('reports.index');
    Route::get('reports/view/{id}/{item}',[\App\Http\Controllers\ReportController::class,'getReport'])->name('view.report');
    Route::get('excel-export',[\App\Http\Controllers\ReportController::class,'exportExcel'])->name('excel.export');
});








require __DIR__ . '/auth.php';