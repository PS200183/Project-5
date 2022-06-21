<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prestatie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class PrestatiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            if ($request->has('User')) {
                Log::channel('SummaMove')->info('Haal Prestaties op van gebruiker met ID: ' . $request->User);
                $data =  Prestatie::where('user_id', $request->User)->get();
                $message = 'Prestatie opgehaald';
            } else if ($request->has('Oefening') && $request->has('User')) {

                Log::channel('SummaMove')->info('Haal Prestaties op van gebruiker met ID: ' . $request->User . ' voor oefening met ID: ' . $request->Oefening);
                $data =  Prestatie::where('user_id', $request->User)->where('oefening_id', $request->Oefening)->get();
                $message = 'Prestatie opgehaald';
            } 
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message,

            ];
            return response()->json($content, 200);
        } catch (\Exception $e) {
            Log::channel('SummaMove')->error('Fout bij het ophalen van Prestaties: ' . $e->getMessage());

            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het ophalen van u Prestaties',

            ];
            return response()->json($content, 500);
        }
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            Log::channel('SummaMove')->info('Maak nieuwe prestatie aan', ['ip' => $request->ip(), 'data' => $request->all()]);
            $data = Prestatie::create($request->all());
            $message = "Prestatie is aangemaakt";
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message,
            ];
            return response()->json($content, 201);
        } catch (\Exception $e) {
            Log::channel('SummaMove')->error('Fout bij het aanmaken van een prestatie: ' . $e->getMessage());
            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het aanmaken van een prestatie',

            ];
            return response()->json($content, 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
