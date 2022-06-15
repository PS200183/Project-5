<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\OefeningenController;
use App\Http\Controllers\Postscontroller;

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

Route::get('/', [OefeningenController::class, 'index']);
Route::get('/about', [OefeningenController::class, 'about']);
Route::get('/posts', [OefeningenController::class, 'index']);