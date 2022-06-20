<?php

namespace App\Http\Controllers;

use App\Models\Oefeningen;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class OefeningenController extends Controller
{
     public function index()
    {
        try {
            Log::channel('SummaMove')->info('Haal alle Oefeningen op');
            $data =  Oefeningen::all();
            $message = "Alle Oefeningen zijn opgehaald";
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message,
            ];
            return response()->json($content, 200 ,array('Content-Type'=>'application/json; charset=utf-8' ));
        }
        catch (\Exception $e) {
            Log::channel('SummaMove')->error('Fout bij het ophalen van alle Oefeningen: ' . $e->getMessage());
            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het ophalen van alle Oefeningen',

            ];
            return response()->json($content, 500);
        }

    }
}
