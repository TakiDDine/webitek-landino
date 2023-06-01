<?php

use Illuminate\Http\Request;
use App\Http\Controllers\GoogleSheetsController;
use App\Http\Controllers\dashboard\ProjectController;
use App\Http\Controllers\dashboard\TemplateController;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});



Route::middleware('throttle:20,1')->post('/addsheet', [GoogleSheetsController::class, 'index']);

/**
 * Project routes
 */
Route::get('/projects', [ProjectController::class, 'index']);
Route::delete('/project/{id}', [ProjectController::class, 'destroy']); 
Route::put('/project/{project}', [ProjectController::class, 'updateName']);
Route::post('/duplicate/{project}', [ProjectController::class, 'duplicate']);

/**
 * Template routes
 */

 Route::get('templates', [TemplateController::class, 'index']);
 Route::post('template', [TemplateController::class, 'create']);