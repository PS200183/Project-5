<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Prestatie;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Illuminate\Support\Facades\Validator;

class PrestatiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       // return $request->user()->get();
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


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update( Request $request ,Prestatie $Prestatie)
     {
    //     try{
            
    //         Log::channel('SummaMove')->info('Update prestatie ' . $Prestatie->id, ['ip' => $request->ip(), 'data' => $request->all()]);
    //        $Prestatie->update($request->all());
    //        $message = "Prestatie is aangepast";
    //        $content = [
    //            'success' => true,
    //            'data'    => $Prestatie,
    //            'message' => $message,
    //        ];
    //        return response()->json($content, 200);
    //    } catch (\Exception $e) {
    //        Log::channel('SummaMove')->error('Fout bij het aanpassen van een prestatie: ' . $e->getMessage());
    //        $content = [
    //            'success' => false,
    //            'data'    => null,
    //            'message' => 'Er is iets fout gegaan bij het aanpassen van een prestatie',

    //        ];
    //        return response()->json($content, 500);
           
    //    }
    // $validator = Validator::make($request->all(), [

    //             'begintijd' => 'required',
    //             'eindtijd' => 'required',
    //             'aantal' => 'required',
    //             'user_id' => 'required',
    //             'oefening_id' => 'required',
    //         ]);
    //         if ($validator->fails()) {
    //             Log::error("prestatie wijzigen Fout");
    //             $content = [
    //                 'success' => false,
    //                 'data'    => $request->all(),
    //                 'foutmelding' => 'Gewijzigde data niet correct',

    //             ];
    //             return response()->json($content, 400);
    //         } else {

    //             Log::channel('SummaMove')->info('prestatie geupdate', [$Prestatie->update($request->all())]);
    //             $content = [
    //                 'success' => $Prestatie->update($request->all()),
    //                 'data'    => $request->all(),

    //             ];
    //             return response()->json($content, 200);
    //         }


    

        try {
            Log::channel('SummaMove')->info('prestatie geupdate', ['ip' => $request->ip(), 'data' => $request->all()]);

            $validator = Validator::make($request->all(), [

                'begintijd' => 'required',
                'eindtijd' => 'required',
                'aantal' => 'required',
                'user_id' => 'required',
                'oefening_id' => 'required',
            ]);
            if ($validator->fails()) {
                Log::error("prestatie wijzigen Fout");
                $content = [
                    'success' => false,
                    'data'    => null,
                    'foutmelding' => 'Gewijzigde data niet correct',

                ];
                return response()->json($content, 400);
            } else {

                Log::channel('SummaMove')->info('prestatie geupdate', [$Prestatie->update($request->all())]);
                $content = [
                    'success' => true,
                    'data'    => $request->all(),

                ];
                return response()->json($content, 200);
            }
        } catch (\Exception $e) {
            Log::channel('SummaMove')->error('Fout bij het update van een prestatie: ' . $e->getMessage());
            $content = [
                'success' => false,
                'data'    => null,
                'foutmelding' => 'Gegegevens kunnen niet gewijzigd worden.',

            ];
            return response()->json($content, 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
   public function destroy($id)
    {
        try {  Log::channel('SummaMove')->info(' prestatie is verwijderd');
            $data = Prestatie::where('id',$id)->delete();
            $message = "prestatie is verwijderd";
            $content = [
                'success' => true,
                'data'    => $data,
                'message' => $message
            ];
            return response()->json($content, 200);

        } catch (\Exception $e) {
            Log::channel('SummaMove')->error('Fout bij het verwijderen van Prestatie: ' . $e->getMessage());
            $content = [
                'success' => false,
                'data'    => null,
                'message' => 'Er is iets fout gegaan bij het verwijderen van Prestatie'

            ];
            return response()->json($content, 500);

        }

    }
}
