<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class prestatiesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
         DB::table('prestaties')->insert([
            [
                'begintijd' => "12:00",
                'eindtijd' => "13:00",
                'aantal' => "1",
                'oefening_id' => "1",
                'user_id' => "1",   
            ]
            ]);
    }
}
