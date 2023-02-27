<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;

class LoginController extends BaseController
{
    public function login(LoginRequest $request)
    {

        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            $user = Auth::user();
            $success = $user->createToken('Laravel9PassportAuth')->accessToken;
            return $this->sendResponse($success, 'User login successfully');
        } else {
            return $this->sendError('Unauthorised.', ['error' => 'Unauthorised']);
        }
    }

    function logout()
    {
        $user = Auth::user()->token();

        return $user->revoke();
    }
}
