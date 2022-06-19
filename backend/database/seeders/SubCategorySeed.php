<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubCategorySeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SubCategory::factory(1)->create([
            'name' => 'Clothing',
            'category_id' => 1
        ]);

        SubCategory::factory(1)->create([
            'name' => 'Muslim Wear',
            'category_id' => 1
        ]);
        SubCategory::factory(1)->create([
            'name' => 'Clothing',
            'category_id' => 2
        ]);
        SubCategory::factory(1)->create([
            'name' => 'Muslim Wear',
            'category_id' => 2
        ]);
    }
}
