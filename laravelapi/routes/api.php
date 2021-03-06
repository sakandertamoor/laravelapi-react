<?php

use App\Http\Controllers\api\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/




Route::controller(StudentController::class)->group( function(){
    Route::post('/add-student','store');
    Route::get('/get-student','index');
    Route::get('/edit-student/{id}','edit');
    Route::put('/update-student/{id}','update');
    
});
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});