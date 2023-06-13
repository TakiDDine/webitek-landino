<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TemplateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'category_id' => $this->category_id,
            'is_active' => $this->is_active,
            'tags' => $this->tags,
            'desktop_image' => $this->desktop_image,
            'tablet_image' => $this->tablet_image,
            'mobile_image' => $this->mobile_image,
            'likes' => $this->likes,
            // 'deleted_at' => $this->deleted_at,
            // 'created_at' => $this->created_at,
            // 'updated_at' => $this->updated_at,
        ];
    }
}
