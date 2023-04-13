<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProjectDemoController extends Controller {
    public function demo (Request $request)
    {

        define('SUPRA_BASE_PATH', base_path('public/backend/assets/builder'));
        define('SUPRA_BASE_URL', asset('/backend/assets/builder'));
        
        
        $Viewbuilder = new \App\Utilities\Builder\Html;
        
        $data['groups'] =   $Viewbuilder->groups;
        //get supra name rom request
        $data['isTemplate'] = false;
        $data['project']        =   null;
        $data['projectfile']    = null;
        $data['name'] = '';
        $data['try_demo'] = true;
        share(['data' => $data]);
        // dd($data);
      return view('backend.accounting.project.lara', $data);
    }

     /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function larabuilder()
  {

    return view('backend.accounting.project.larabuilder');
  }
}
