<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Calculator extends Model
{
    use HasFactory;

    protected $fillable = [
        'operation',
        'result',
//        'updated_date'
    ];

//    protected $hidden = [
//        'created_at',
//        'updated_at',
//    ];

//    protected $casts = [
//        'updated_date' => 'datetime'
//    ];
}
