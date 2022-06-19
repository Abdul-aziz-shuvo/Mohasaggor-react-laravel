<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Image extends Model
{
    use HasFactory;

    protected $guarded = [];


    public function color(): BelongsTo
    {
        return $this->belongsTo(Color::class);
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }


    public function imageGroup(): BelongsTo
    {
        return $this->belongsTo(ImageGroup::class);
    }
    public function imagePath () {
        return url('/storage/product/images/'.$this->name);
    }
}
