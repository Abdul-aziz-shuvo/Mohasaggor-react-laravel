<?php

namespace Database\Seeders;

use App\Models\Size;
use Database\Factories\SizeFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SizeSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Size::factory(1)->create([
            'name' => 'XL'
        ]);
        Size::factory(1)->create([
            'name' => 'L'
        ]);

        Size::factory(1)->create([
            'name' => 'M'
        ]);
    }
}
