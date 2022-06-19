<?php

namespace Database\Seeders;

use App\Models\Color;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ColorSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Color::factory(1)->create([
            'name' => 'Red'
        ]);
        Color::factory(1)->create([
            'name' => 'Black'
        ]);
    }
}
