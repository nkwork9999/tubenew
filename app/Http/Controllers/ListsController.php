<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreListsRequest;
use App\Http\Requests\UpdateListsRequest;
use App\Models\Lists;
use Inertia\Inertia;
class ListsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dashboard',['lists'=>Lists::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreListsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Lists $lists)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lists $lists)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateListsRequest $request, Lists $lists)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lists $lists)
    {
        //
    }
}
