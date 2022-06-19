<?php

namespace Database\Seeders;

use App\Models\Color;
use App\Models\SubCategory;
use App\Models\SubSubCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {

            $this->call(CategorySeed::class);
            $this->call(SubCategorySeed::class);
            $this->call(SubSubCategorySeed::class);
            $this->call(ColorSeed::class);
            $this->call(SizeSeed::class);

    }
}
