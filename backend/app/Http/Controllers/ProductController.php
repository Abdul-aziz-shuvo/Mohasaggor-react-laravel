<?php

namespace App\Http\Controllers;

use App\Models\Color;
use App\Models\Image;
use App\Models\ImageGroup;
use App\Models\Product;
use App\Models\Size;
use App\Models\Stock;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use phpDocumentor\Reflection\Types\True_;


class ProductController extends Controller
{
    public function productList()
    {
        $products = Product::with('stocks', 'stocks.size', 'stocks.color', 'stocks.imageGroup.images')->orderBy('id', 'asc')->get();
        return response()->json($products);
    }

    public function show($id)
    {

        $product = Stock::with('product', 'size', 'color', 'imageGroup.images')
            ->where('product_id', $id)->get()->groupBy('color_id');
//        dd($product);
        return response()->json($product);
    }

    public function store(Request $request)
    {

        $product = Product::create([
            'name' => $request->name,
            'price' => $request->price,
            'sell_price' => $request->sell_price,
            'sub_sub_category_id' => $request->sub_sub_category,
        ]);


        $stockArray = array_map(function ($value) {
            return $value;
        }, $request->stock);


        foreach ($stockArray as $key => $stock) {
            $color = Color::where('name', $request->stock[$key])->first();
            $imageGroup = ImageGroup::create([]);


            foreach ($request->stock[$key]['sizes'] as $size) {

                $sizeData = Size::where('name', $size['size'])->first();
                $stock = Stock::create([
                    'product_id' => $product->id,
                    'color_id' => $color->id,
                    'size_id' => $sizeData->id,
                    'quantity' => $size['quantity'],
                    'image_group_id' => $imageGroup->id
                ]);

            }

            if (isset($request->stock[$key]['images'])) {
                foreach ($request->stock[$key]['images'] as $imgkey => $image) {

                    if ($image) {
                        $name = time() . uniqid() . '.' . explode('/', explode(':', substr($request->stock[$key]['images'][$imgkey], 0, strpos($request->stock[$key]['images'][$imgkey], ';')))[1])[1];


                        Image::create([
                            'name' => $name,
                            'image_group_id' => $imageGroup->id,
                        ]);

                        Stock::find($stock->id)->update([
                            'image_group_id' => $imageGroup->id,
                        ]);
                        if (!Storage::disk('public')->exists('/product/images')) {
                            Storage::disk('public')->makeDirectory('/product/images/');
                            \Image::make($request->stock[$key]['images'][$imgkey])->save(public_path('storage/product/images/') . $name);

                        } else {
                            Storage::disk('public')->makeDirectory('/product/images/');
                            \Image::make($request->stock[$key]['images'][$imgkey])->save(public_path('storage/product/images/') . $name);
                        }

                    }

                }
            }
        }


    }
}
