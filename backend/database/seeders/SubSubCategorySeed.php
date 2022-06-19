<?php

namespace Database\Seeders;

use App\Models\SubSubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubSubCategorySeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        SubSubCategory::factory(1)->create([
            'name' => 'Saree',
            'sub_category_id' => 1
        ]);

        SubSubCategory::factory(1)->create([
            'name' => 'Shelwar Kammez',
            'sub_category_id' => 1
        ]);

        SubSubCategory::factory(1)->create([
            'name' => 'Hijab',
            'sub_category_id' => 2
        ]);
        SubSubCategory::factory(1)->create([
            'name' => 'Borka',
            'sub_category_id' => 2
        ]);

        SubSubCategory::factory(1)->create([
            'name' => 'T-Shirt',
            'sub_category_id' => 3
        ]);
        SubSubCategory::factory(1)->create([
            'name' => 'Jeans',
            'sub_category_id' => 3
        ]);

        SubSubCategory::factory(1)->create([
            'name' => 'Panjabi',
            'sub_category_id' => 4
        ]);

        SubSubCategory::factory(1)->create([
            'name' => 'Topi',
            'sub_category_id' => 4
        ]);

    }
}
