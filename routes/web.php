<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/login', function () {
    return Inertia::render('admin/auth/login');
})->name('login');

Route::get('/register', function () {
    return Inertia::render('admin/auth/register');
})->name('register');

Route::get('/dashboard', function () {
    return Inertia::render('admin/dashboard');
})->name('dashboard');

Route::get('/member', function () {
    return Inertia::render('admin/member');
})->name('member');

Route::get('/dashboard/member/{id}', function (string $id) {
    return Inertia::render('admin/member-detail', [
        'memberId' => $id,
    ]);
})->name('member.show');
require __DIR__.'/settings.php';
