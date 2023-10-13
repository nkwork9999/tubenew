<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ListsController;
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
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

//Route::get('/dashboard', function () {
//    return Inertia::render('Dashboard');
//}, [ListsController::class])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/dashboard', [ListsController::class,'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/dashboard', [ListsController::class, 'store'])->name('list.store');
Route::delete('/dashboard/{id}', [ListsController::class, 'destroy'])->name('list.destroy');
Route::patch('/dashboard/{id}', [ListsController::class, 'update'])->name('list.update');
//Route::post('/dashboard/{id}', [ListsController::class, 'update'])->name('list.update');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
