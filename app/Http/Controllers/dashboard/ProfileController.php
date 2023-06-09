<?php

namespace App\Http\Controllers\dashboard;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Intervention\Image\Facades\Image;
use App\Http\Resources\ProfileResource;
use Illuminate\Support\Facades\Validator;

class ProfileController extends Controller
{
    protected $user = null;
 
    public function __construct() 
    {
        $this->middleware(function($request, $next) {
            $this->user = User::find(2);
            return $next($request);
        });
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        
       return response()->json([
            'status' => true,
            'user' => $this->user,
            'id' => $this->user->id,
            'name' => $this->user->name,
            'email' => $this->user->email,
            'profile_picture' => $this->user->profile_picture,
            'status' => $this->user->status,
            'phone' => $this->user->phone,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateAccount(Request $request)
    {
        $validator = Validator::make($request->only(['name', 'phone', 'profile_picture']),[
            'name' => 'required|string',
            'phone' => 'required|string',
            'profile_picture' => 'nullable|image|max:1012|mimes:jpg,png'

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => true,
                'massage' => $validator->errors()->first()
            ]);
        }

        //convert and minimize image 
        if ($request->hasFile('profile_picture')){
            $image = $request->file('profile_picture');
            $file_name = "profile_".time().'.'.$image->getClientOriginalExtension();
            Image::make($image)->crop(300, 300)->save(base_path('public/uploads/profile/') .$file_name);
            $request->profile_picture = $file_name;
        }

        //Update accout 
        $this->user->update($validator->validated());

        return response()->json([
            'status' => true,
            'user' => new ProfileResource($this->user)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
