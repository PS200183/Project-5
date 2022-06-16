<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OefeningenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('oefeningens')->insert([
            [
                'naamoefening' => "Squat",
                'beschrijving' => 'Een squat is dus een kniebuiging, waarbij je je billen naar achteren duwt en je knieën tegelijkertijd niet voorbij je tenen komen.',
                'foto' => 'https://goedetengezondleven.nl/wp-content/uploads/2016/09/waarom-zijn-squats-goed.jpg',
               
            ],[
                'naamoefening' => "Push-up",
                'beschrijving' => 'Opdrukken, ook wel "push-ups" genoemd (in Vlaanderen ook wel "pompen"), is eenzelfde soort oefening als bankdrukken. De oefening gebruikt echter alleen het eigen lichaam als weerstand.',
                'foto' => 'https://us.123rf.com/450wm/comotomo/comotomo1812/comotomo181200059/121993963-opdrukken-sportieve-oefening-silhouetten-van-vrouw-die-oefening-doet-training-opleiding-.jpg?ver=6',
               
            ]
            ]);        
    }
}
