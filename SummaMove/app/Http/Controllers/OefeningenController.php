<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OefeningenController extends Controller
{
    public function index()
    {
        return view('post/index');
    }
}
