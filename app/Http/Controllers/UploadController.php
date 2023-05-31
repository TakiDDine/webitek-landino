<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Response;


class UploadController extends Controller
{
    private $user_id = null;

    /**
     * __construct function
     */
    public function __construct() 
    {
        $this->middleware(function ($request, $next) {
            // dd('hello');
            $this->user_id = Auth::user()->id;

            $next($request);
        });
    }
     
    /**
     * Undocumented function
     *
     * @param Request $request
     * @return Response
     */
    public function uploadImage(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'data' => 'required|image|mimes:jpg,png'
        ]);
        
        // check request and return errors
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ]);
        }
        
        $image = $request->file('data');
        $originalName  = $image->getClientOriginalName();
        // check if image exists
        if (!Storage::exists('/images/gallery/uploaded/'.$this->user_id.'/'.$originalName)) {
            
             // Store the image with the original name
             $path = Storage::disk('public')->putFileAs('/images/gallery/uploaded/'.$this->user_id, $image, $originalName);
             
             // Minimize the quality and dinension
             $minimizedImage = Image::make(Storage::path($path))->resize(500, 400)->encode('jpg', 50);
             $minimizedImage->save();

            return response()->json([
                'status' => true,
                'message' => 'the image uploaded succefully'
            ]);
            
        } 
               
        return response()->json([
            'status' => false,
            'message' => 'the image already exist'
        ]);
    }
}
