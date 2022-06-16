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
                'naamoefening' => "Plank",
                'beschrijving' => 'Het hele idee is niet moeilijk: plaats je onderarmen op de grond, duw jezelf omhoog in een push-up houding en laat je buikspieren, bilspieren en hamstrings werken. Een eenvoudige oefening waarmee je alle spieren aanspreekt die je nodig hebt om sneller en krachtiger te kunnen hardlopen.',
                'foto' => 'data:image/jpeg;base64,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', 
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
            ],[
                'naamoefening' => "Wall sit",
                'beschrijving' => 'Begin staand met je rug tegen de muur. Zet je voeten iets naar voren, op schouderbreedte en zak in een squat: je knieën zijn gebogen in een hoek van 90 graden, net als je heupen. Span je buikspieren goed aan en duw je rug tegen de muur.',
                'foto' => 'https://static.vecteezy.com/system/resources/previews/005/178/396/original/woman-doing-wall-sit-exercise-free-vector.jpg',
            ]
            ,[
                'naamoefening' => "Crunch",
                'beschrijving' => 'De crunch is misschien wel de meest bekende oefening voor het versterken van je buikspieren. Je hebt er dus ongetwijfeld wel eens over gehoord. De crunch wordt in veel gevallen verward met de sit-up. Toch is er een verschil in de crunch en de sit-up. Om je alvast een voorproefje te geven: de crunch is een kleinere beweging waarbij je niet volledig omhoog beweegt. De sit-up daarentegen wel.',
                'foto' => 'https://calisthenicsworld.nl/wp-content/uploads/2022/04/Crunches-oefening-uitleg-CalisthenicsWorld-1024x1024.png',
            ]
            ]);        
    }
}
