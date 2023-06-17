<?php

namespace App\Http\Controllers\dashboard\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Laravel\Passport\TokenRepository;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    /**
     * register function
     *
     * @param Request $request
     * @return response json
     */
    public function register(Request $request)
    {
        $validator = Validator::make($request->only(['name', 'email','password', 'password_confirmation']),[
            'name' => 'required|string',
            'email' => 'required|email|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required|string|min:6'
        ]);
        
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' =>  $validator->errors()
            ], 400);
        }

        $user = User::create([
            'name' => $validator->validated()['name'],
            'email' => $validator->validated()['email'],
            'password' => Hash::make($validator->validated()['password']),
            'user_type' => 'user'
        ]);

    
        $token = $user->createToken('landino')->accessToken;
        return response()->json([
            'status' => true,
            'token' => $token
        ], 201);
        
    }

    /**
     * login function
     *
     * @param Request $request
     * @return response
     */
    public function login (Request $request) 
    {
        $validator = Validator::make($request->only(['email','password']),[
            'email' => 'required|email|string',
            'password' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'error' =>  $validator->errors()
            ], 400);
        }

        if (Auth::attempt($validator->validate())) {
            $user = Auth::user();
            $token = $user->createToken('landino')->accessToken;
            return response()->json([
                'status' => true,
                'token' => $token
            ]);
        }

        return response()->json([
            'status' => false,
            'message' => 'Invalid credentials'
        ], 401);
    }

    /**
     * logout function
     *
     * @return response json
     */
    public function logout (TokenRepository $tokenRepository)
    {
        // return 'hello';
        $user = Auth::user()->token();
        $user->revoke();
        $tokenRepository->revokeAccessToken(Auth::user()->token());
        return response()->json(['message' => 'Logged out successfully'], 200);
    }
}
