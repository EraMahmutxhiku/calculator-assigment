<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserRequest;
use App\Http\Requests\UserUpdateRequest;
use App\Http\Resources\UserResource;
use App\Services\UserService\UserServiceInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

class UserController extends BaseController
{
    protected $userService;

    public function __construct(UserServiceInterface $userService)
    {
        $this->userService = $userService;
    }

    public function index()
    {
        $users = $this->userService->getAllUsers();

        return UserResource::collection($users);
    }

    public function store(UserRequest $request)
    {
        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ];

        $user = $this->userService->createUser($input);

        return new UserResource($user);
    }

    public function show($id)
    {
        $user = $this->userService->showUser($id);

        if (!$user) {
            return $this->sendError('User not found.');
        }

        return new UserResource($user);
    }

    public function update(UserUpdateRequest $request, $userId)
    {
        $input = [
            'name' => $request->name,
            'email' => $request->email,
        ];

        $password = $request->password;

        if ($password) {
            $input['password'] = Hash::make($request->password);
        }

        return $this->userService->updateUser($input, $userId);
    }

    public function destroy($id)
    {
        return $this->userService->deleteUser($id);
    }

    public function search(Request $request)
    {
        $rows = $request->rows;
        $search = $request->search;
        $users = $this->userService->searchUsersByName($search, $rows);

        return UserResource::collection($users);
    }

}
