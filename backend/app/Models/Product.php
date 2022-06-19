<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;
    protected  $guarded = [];

    /**
     * @return HasMany
     */
    public function colors(): HasMany
    {
        return $this->hasMany(Color::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(Image::class);
    }
    public function stocks(): HasMany
    {
        return $this->hasMany(Stock::class);
    }

    public function Category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }
    public function SubCategory(): BelongsTo
    {
        return $this->belongsTo(SubCategory::class);
    }

    public function subSubCategory(): BelongsTo
    {
        return $this->belongsTo(SubSubCategory::class);
    }
}
