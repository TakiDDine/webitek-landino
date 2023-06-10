<?php

namespace App\Http\Controllers\dashboard;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Intervention\Image\Facades\Image;
use App\Http\Resources\ProfileResource;
use Illuminate\Support\Facades\Storage;
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
                'massage' => $validator->errors()
            ], 400);
        }

        //convert and minimize image 
        if ($request->hasFile('profile_picture')){
            $image = $request->file('profile_picture');
            $file_name = "profile_".time().'.'.$image->getClientOriginalExtension();
            $picture = Image::make($image)->crop(300, 300);
            Storage::putFile('/profile/images');
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
    public function updatePassword(Request $request)
    {
        $validator = Validator::make($request->only(['password', 'password_confirmation', 'current_password']), [
            'current_password' => 'required|string',
            'password' => 'required|string|min:6|confirmed',
            'password_confirmation' => 'required|string|min:6',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 400);
        }
        //Check current passord match to password in db
        if (Hash::check($validator->validated()['current_password'], $this->user->password)) {

            $this->user->password =  Hash::make($validator->validated()['password']);
            //save the new hashed password
            $this->user->save();

            return response()->json([
                'status' => true,
                'message' => 'The password updated successfully'
            ]);
        } else {
            // return error if the password in not matching
            return response()->json([
                'status' => false,
                'message' => 'Old Password did not match !'
            ], 400);
        }
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
