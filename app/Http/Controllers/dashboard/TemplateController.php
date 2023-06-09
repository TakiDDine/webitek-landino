<?php

namespace App\Http\Controllers\dashboard;

use App\User;
use App\Category;
use App\Template;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\TemplateResource;
use Illuminate\Support\Facades\Validator;

class TemplateController extends Controller
{
    protected $user_id = 2;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $templates = Category::with('templates')->get();
        $templates->makeHidden(['created_at', 'updated_at', 'deleted_at']);
        // return categories with templates
        return response()->json([
            'status' => true,
            'data' => CategoryResource::collection($templates),
         
        ]);
    }     

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'name'          => 'required|string',
            'category_id'   => 'required|integer|exists:categories,id',
            'desktop_image' => 'string|nullable',
            'tablet_image'  => 'string|nullable',
            'mobile_image'  => 'string|nullable',
            'tags'          => 'array',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'massage' => $validator->errors()
            ], 400);
        }

        $template = Template::create($validator->validated());
        return response()->json([
            'status' => true,
            'template' => $template
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Template $template)
    {
        $validator = Validator::make($request->all(),[
            'name'          => 'required|string',
            'category_id'   => 'required|integer|exists:categories,id',
            'desktop_image' => 'string|nullable',
            'tablet_image'  => 'string|nullable',
            'mobile_image'  => 'string|nullable',
            'tags'          => 'array',
            'tags.*'        => 'distinct|string|unique:templates,tags',

        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'massage' => $validator->errors()
            ]);
        }

        $template = $template->update($validator->validated());
        return response()->json([
            'status' => true,
            'templates' => $template
        ]);
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

    /**
     * favorite function
     *
     * @param Template $template
     * @return response
     */
    public function favorite(Template $template)
    {

        $user = User::find($this->user_id);
        //favorite and unfavorite template
        if ($user->templates()->toggle($template->id)['attached']) {
            $template->increment('likes', 1);
            $status = 'favorited';
        } else {
            $template->decrement('likes', 1);
            $status = 'unfavorited';

        }

        return response()->json([
            'status' => true,
            'favorites' => 'The template '. $status . ' successfully'
        ]);

    }

    /**
     * Get all favorite  templates function
     *
     * @return void
     */
    public function favorites()
    {
        $user = User::find($this->user_id);

        $favorites = $user->templates;
        return response()->json([
            'status' => true,
            'favorites' => $favorites
        ]);
    }
}
