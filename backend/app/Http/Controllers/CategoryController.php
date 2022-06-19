<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\SubCategory;
use App\Models\SubSubCategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function fetchCategory() {
        $category = Category::all();
        return response()->json($category);
    }

    public function fetchSubCategory($cat_id) {
        $category = SubCategory::where('category_id',$cat_id)->get();
        return response()->json($category);
    }

    public function fetchSubSubCategory($sub_cat_id) {
        $category = SubSubCategory::where('sub_category_id',$sub_cat_id)->get();
        return response()->json($category);
    }
}
