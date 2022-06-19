<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\Size;
use Illuminate\Http\Request;

class VariantController extends Controller
{
    public function fetchColor () {
        $colors= Color::all();
        return response()->json($colors);
    }
    public function fetchSize () {
        $size= Size::all();
        return response()->json($size);
    }
}
