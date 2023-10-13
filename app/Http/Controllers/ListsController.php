<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreListsRequest;
use App\Http\Requests\UpdateListsRequest;
use App\Models\Lists;
use App\Models\User;
use Inertia\Inertia;
use Auth;
class ListsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       //$lists = User::find(1);
   // $user_id = Auth::id();

     // $lists=Lists::with('user')->where('user_id','=',$user_id);
     //$lists = User::all();

    $lists=\Auth::user()->lists()->get();
    //dd($lists);


        return Inertia::render('Dashboard',['lists'=>$lists]);
      
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
    public function store(StoreListsRequest $request )
    {
       
     
     //   $request->validate([
     //       'title' => ['required','max:10'],
     //       'channel' => ['required'],
     //       'keyword' => ['required']
     //   ]);
       
        $list = new Lists;
        //投稿する際に、ログインしている人のIDが保存されるようにします。
        $list->user_id = Auth::id();
        $list->title = $request->title;
        $list->channel = $request->channel;
        $list->keyword = $request->keyword;
        
        $list->save();
       // dd($list);
      //  Lists::create([
      //       'user_id'=> $aid->user_id,
      //      'title' => $request->title,
      //      'channel' => $request->channel,
      //      'keyword' => $request->keyword,
      //  ]);

        
            return to_route('dashboard');
           
      
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
    public function update(UpdateListsRequest $request ,$id)
    {
       // dd($id);
      
       // $request->validate([
       //     'title' => ['required'],
        //    'keyword' => ['required']
       // ]);
        
        $update = Lists::find($id);
    
        $update->title = $request->title;
        $update->keyword = $request->keyword;
        $update->channel = $request->channel;
        $update->save();
      
        return redirect()->route('dashboard');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lists $lists,$id)
    {
       //dd($id);
       $delete = Lists::find($id);
  
       $delete->delete();
     
    return redirect()->route('dashboard');
    }
}
