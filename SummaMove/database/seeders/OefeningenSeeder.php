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
            ],[
                'naamoefening' => "Dip",
                'beschrijving' => 'Strek je armen en laat je benen recht of iets achter je je zweven. Span je buik- en bilspieren aan. Adem in en buig de armen tot je een hoek van 90 graden maakt bij je ellebooggewricht. Druk jezelf omhoog en kom terug in de uitgangspositie en adem uit.',
                'foto' => 'https://bodybuildingblog.nl/wp-content/uploads/triceps-dips-oefening.jpg',             
            ],[
                'naamoefening' => "Paardentrap",
                'beschrijving' => 'Ga op ellebogen en knieën op de grond liggen, met je gezicht naar de grond. Strek dan je rechterbeen naar achteren. Pas op dat je de beweging niet overdrijft, want dan ga je te veel vanuit je onderrug bewegen. Deze oefening moet je voelen in je billen',
                'foto' => 'https://afvallenmetnederland.nl/wp-content/uploads/2019/09/paardentrap-300x158.jpg',
            ],[
                'naamoefening' => "Mountain climber",
                'beschrijving' => 'De mountain climber is een fitnessoefening voor het hele lichaam, waarbij de nadruk ligt op je core. De oefening heet zo, omdat de beweging wat wegheeft van het beklimmen van een berg: terwijl je handen op de grond staan, beweeg je je knieën omstebeurt naar je ellebogen.',
                'foto' => 'https://calisthenicsworld.nl/wp-content/uploads/2022/03/Mountain-climbers-oefening-uitleg-300x300.png',
            ],[
                'naamoefening' => "Burpee",
                'beschrijving' => 'De burpee is een combinatie-oefening die gebruikt wordt bij fitness. De oefening begint rechtop staand, vervolgens gaat de persoon in squat en brengt zijn handen naar de grond, waarna hij met de handen aan de grond in een sprong zijn benen naar achter brengt in de plankpositie.',
                'foto' => 'https://www.vriendin.nl/content/uploads/2020/04/Ontwerp-zonder-titel-2020-04-08T103402.631.png',
            ],[
                'naamoefening' => "Lunge",
                'beschrijving' => 'De lunge is een fitness-oefening die individueel en bij groepslessen gedaan wordt. De basis voor de oefening is een rechtopstaande positie met de voeten vlak bij elkaar. Het ene been wordt naar voren geplaatst zodanig dat het onderbeen een hoek van 90 graden met de grond maakt.',
                'foto' => 'https://happyhealthy.nl/wp-content/uploads/lunges-uitvoering-1024x576.png',
            ]
            ,[
                'naamoefening' => "Crunch",
                'beschrijving' => 'De crunch is misschien wel de meest bekende oefening voor het versterken van je buikspieren. Je hebt er dus ongetwijfeld wel eens over gehoord. De crunch wordt in veel gevallen verward met de sit-up. Toch is er een verschil in de crunch en de sit-up. Om je alvast een voorproefje te geven: de crunch is een kleinere beweging waarbij je niet volledig omhoog beweegt. De sit-up daarentegen wel.',
                'foto' => 'https://calisthenicsworld.nl/wp-content/uploads/2022/04/Crunches-oefening-uitleg-CalisthenicsWorld-1024x1024.png',
            ]
            ]);        
    }
}
