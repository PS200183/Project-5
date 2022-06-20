<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prestatie extends Model
{
    use HasFactory;
    protected $table = 'prestaties';
    protected $fillable = ["user_id", "begintijd", "eindtijd", "aantal" , "oefening_id"];
    public $timestamps = false;
}
