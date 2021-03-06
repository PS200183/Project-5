<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Log;

class AuthenticationController extends Controller
{
    public function register(Request $request)
    {
        Log::channel('SummaMove')->info('registeren', ['ip' => $request->ip(),'data' => $request->all()]);

        $attr = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string|min:6|confirmed',
        ]);

        $user = User::create([
            'name'=>$attr['name'],
            'password' => bcrypt($attr['password']),
            'email' => $attr['email'],
        ]);

        return response()->json(['message' => 'Registration successful'], 200);
    }

    public function login(Request $request)

    {

        Log::channel('SummaMove')->info('Login', ['ip' => $request->ip(),'data' => $request->all()]);
        $attr = $request->validate([
            'email' => 'required|string|email|',
            'password' => 'required|string|min:6'
        ]);
        if (!Auth::attempt($attr)) {
            return $this->error('Credentials not match', 401);
        }
        $response = [

            'access_token' => auth()->user()->createToken('API Token')->plainTextToken,
            'token_type' => 'Bearer',
            'user' => auth()->user(),
        ];
        return response()->json($response, 200);
    }

    public function logout()
    {
        $content = [
            'success' => true,
            'message' => 'Tokens Revoked',
        ];
        auth()->user()->tokens()->delete();
        return response()->json($content, 200);
    }
}

