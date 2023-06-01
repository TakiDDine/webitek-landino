<?php

namespace App\Http\Controllers\dashboard;

use App\Template;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class TemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $templates = Template::all();
        return response()->json([
            'status' => true,
            'templates' => $templates
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        // $validator = Validator::make($request->all(),[
        //     'name'          => 'required|string',
        //     'category'      => 'required|string',
        //     'desktop_image' => 'string',
        //     'tablet_image'  => 'string',
        //     'mobile_image'  => 'string',
        //     'tags'          => 'array',

        // ]);

        // if ($validator->fails()) {
        //     return response()->json([
        //         'status' => false,
        //         'massage' => $validator->errors()
        //     ]);
        // }

        // $templates = Template::create($validator->validated());
        // return response()->json([
        //     'status' => true,
        //     'templates' => $templates
        // ]);
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
