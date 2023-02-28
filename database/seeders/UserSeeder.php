<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => fake()->name(),
            'email' => 'eramah101@gmail.com',
            'email_verified_at' => now(),
            'password' => Hash::make('VerySecurePassw0rd!'), // password
            'remember_token' => Str::random(10),
        ]);

        User::factory()->count(5)->create();
    }
}
