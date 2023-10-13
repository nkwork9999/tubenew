<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ListsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('lists')->insert([
            ['title'=>'おかゆ','keyword'=>'おかゆん','user_id'=>1],
            ['title'=>'おかゆ','keyword'=>'おかゆん','user_id'=>2],
            ['title'=>'ころね','keyword'=>'ころさん','user_id'=>2]
        ]);
        //
    }
}
