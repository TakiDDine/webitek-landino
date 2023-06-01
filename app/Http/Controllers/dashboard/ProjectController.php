<?php

namespace App\Http\Controllers\dashboard;

use App\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{
    private $user_id = 2;
    public function __construct ()
    {
        // $this->middleware(function($request, $next) {
        //     // $this->user_id = Auth::user()->id;
        //     $next($request);
        // });
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::where('user_id', $this->user_id)->get();
        return response()->json([
            'status' => true,
            'projects' => $projects
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
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
     * @param  Project $project
     * @return \Illuminate\Http\Response
     */
    public function updateName(Request $request, Project $project)
    {
        $validator = Validator::make($request->only('name'),[
            'name' => 'required|string'
        ]);

        // validate request
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => $validator->errors()
            ], 400);
        }

        // update name project
        $project->update($validator->validated());
        return response()->json([
            'status' => true,
            'message'=> 'the name changed successfully',
            'project' => $project
        ]);
        
        // if ($project = Project::find($id)) {
        //     $project->name = $request->name;
        //     $project->save();

        // }

        // return response()->json([
        //     'status' => false,
        //     'message'=> 'Porject not found'
        // ], 404);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $project = Project::find($id);

        if ($project) {
            
            $project_deleted = $project->delete();
            
            return response()->json([
                'status' => true,
                'message' => 'project deleted succssfully'
            ], 204);
        }

        return response()->json([
            'status' => false,
            'message' => 'project not found'
        ],404);
    }

    /**
     * duplicate project function
     *
     * @param Project $project
     * @return \Illuminate\Http\Response
     */
    public function duplicate(Project $project) {

        $path_supra = public_path().'/uploads/project_files/'.$project->id.'_project.supra';

        if (File::exists($path_supra)) {
            // count projects has name like original project 
            $count_porjects = $project->projectCount($this->user_id, $project->name);
            //Add version if two projects has same name
            $duplicate_project_name = strpos($project->name, 'copy') ? 
                                    $project->name. '-' . $count_porjects: 
                                    $project->name. ' copy ' . $count_porjects;
                                    
            //duplicate project
            $replicated = $project->replicate()->fill([
                'name' => $duplicate_project_name,
                'sub_domain' => md5(uniqid($this->user_id, true)).'.'.str_replace(['http://', 'https://'], '' ,env('APP_URL')),
                'custom_domain' => ''
            ]);

            $replicated->save();

            if ($replicated) {
                //duplicate file
                File::copy($path_supra, public_path().'/uploads/project_files/'.$replicated->id.'_project.supra');
                
                return response()->json([
                    'status' => true,
                    'message' => 'project duplicated succssfully',
                    'repilicated' => $replicated
                ], 200);
            }

        }
        return response()->json([
            'status' => false,
            'message' => 'file not found',
        ], 404);

    }
}
