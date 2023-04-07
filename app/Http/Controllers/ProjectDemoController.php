<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectDemoController extends Controller {
    public function demo ()
    {
        dd('hello');
    $data['demo']   =   false;
      if(Auth::getUser()->company->membership_type == 'trial' && membership_validity() > date('Y-m-d')){
          $data['demo']   =   true;
        }
        
        
        define('SUPRA_BASE_PATH', base_path('public/backend/assets/builder'));
        define('SUPRA_BASE_URL', asset('/backend/assets/builder'));
        
        
        $Viewbuilder = new \App\Utilities\Builder\Html;
        
        $data['groups'] =   $Viewbuilder->groups;
        //get supra name rom request
        $data['isTemplate'] = false;
        $data['project']        =   null;
        $data['projectfile']    = null;
        $data['name'] = '';


      return view('backend.accounting.project.lara', $data);
    }
}
