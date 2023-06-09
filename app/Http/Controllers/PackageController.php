<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Package;
use App\Company;
use Validator;
use Illuminate\Validation\Rule;

class PackageController extends Controller
{
	
	/**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
		date_default_timezone_set(get_option('timezone','Asia/Dhaka'));
    }
	
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $packages = Package::all();
        return view('backend.package.list',compact('packages'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
		if( ! $request->ajax()){
		   return view('backend.package.create');
		}else{
           return view('backend.package.modal.create');
		}
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {	

        if($request->type == 'free') {
            
            $validator = Validator::make($request->all(), [
                'package_name' => 'required|unique:packages,package_name|max:50',
                'is_featured' => 'required',
                'websites_limit' => 'required',
            ]);

            if ($validator->fails()) {
                if($request->ajax()){ 
                    return response()->json(['result'=>'error','message'=>$validator->errors()->all()]);
                }else{
                    return redirect()->route('packages.create')
                                ->withErrors($validator)
                                ->withInput();
                }			
            }
                
    
            $package = new Package();
            $package->type = $request->type;
            $package->package_name = $request->package_name;
            $package->is_featured = $request->is_featured;
            $package->websites_limit = $request->websites_limit;
            $package->online_payment = serialize([
                'monthly' => 'No',
                'yearly' => 'No',
            ]);

            $package->recurring_transaction = serialize([
                'monthly' => 'No',
                'yearly' => 'No',
            ]);
            $package->cost_per_month = 0;
            $package->cost_per_year = 0;
            //$package->others = $request->others;

        } else {

            $validator = Validator::make($request->all(), [
                'package_name' => 'required|unique:packages,package_name|max:50',
                'is_featured' => 'required',
                'websites_limit' => 'required',
                'online_payment' => 'required',
                'cost_per_month' => 'required|numeric',
                'cost_per_year' => 'required|numeric',
            ]);

            if ($validator->fails()) {
                if($request->ajax()){ 
                    return response()->json(['result'=>'error','message'=>$validator->errors()->all()]);
                }else{
                    return redirect()->route('packages.create')
                                ->withErrors($validator)
                                ->withInput();
                }			
            }
                
            $package = new Package();
            $package->package_name = $request->package_name;
            $package->type  = $request->type;
            $package->is_featured = $request->is_featured;
            $package->websites_limit = serialize($request->websites_limit);
            $package->online_payment = serialize($request->online_payment);
            $package->recurring_transaction = serialize($request->recurring_transaction);
            $package->cost_per_month = $request->cost_per_month;
            $package->cost_per_year = $request->cost_per_year;
            //$package->others = $request->others;
		
        }
	
        $package->save();
        
		if(! $request->ajax()){
           return redirect()->route('packages.create')->with('success', _lang('Saved Sucessfully'));
        }else{
		   return response()->json(['result'=>'success','action'=>'store','message'=>_lang('Saved Sucessfully'),'data'=>$package]);
		}
        
   }
	

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request,$id)
    {
        $package = Package::find($id);
		if(! $request->ajax()){
		    return view('backend.package.view',compact('package','id'));
		}else{
			return view('backend.package.modal.view',compact('package','id'));
		} 
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request,$id)
    {
        $package = Package::find($id);
		if(! $request->ajax()){
		   return view('backend.package.edit',compact('package','id'));
		}else{
           return view('backend.package.modal.edit',compact('package','id'));
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

        if($request->type == 'free') {
            
            $validator = Validator::make($request->all(), [
                'package_name' => 'required|max:50',
            ]);

            if ($validator->fails()) {
                if($request->ajax()){ 
                    return response()->json(['result'=>'error','message'=>$validator->errors()->all()]);
                }else{
                    return redirect()->route('packages.edit', $id)
                                ->withErrors($validator)
                                ->withInput();
                }			
            }

            $package = Package::find($id);
            $package->package_name = $request->package_name;
            $package->type = $request->type;
            $package->is_featured = $request->is_featured;
            $package->websites_limit = $request->websites_limit;
            $package->online_payment = serialize([
                'monthly' => 'No',
                'yearly' => 'No',
            ]);
              $package->recurring_transaction = serialize([
                'monthly' => 'No',
                'yearly' => 'No',
            ]);
            $package->cost_per_month = 0;
            $package->cost_per_year = 0;

            $package->save();

            foreach($package->company as $data) {
                $data->websites_limit = $package->websites_limit;    
                $data->save();
            }
            

        } else {

            $validator = Validator::make($request->all(), [
                'package_name' => 'required|max:50',
                'websites_limit' => 'required',
                'online_payment' => 'required',
                'cost_per_month' => 'required|numeric',
                'cost_per_year' => 'required|numeric',
            ]);
            
            if ($validator->fails()) {
                if($request->ajax()){ 
                    return response()->json(['result'=>'error','message'=>$validator->errors()->all()]);
                }else{
                    return redirect()->route('packages.edit', $id)
                                ->withErrors($validator)
                                ->withInput();
                }			
            }
        
                
            
            $package = Package::find($id);
            $package->package_name = $request->package_name;
            $package->type = $request->type;
            $package->is_featured = $request->is_featured;
            $package->websites_limit = serialize($request->websites_limit);
            $package->online_payment = serialize($request->online_payment);
            $package->recurring_transaction = serialize($request->recurring_transaction);
            $package->cost_per_month = $request->cost_per_month;
            $package->cost_per_year = $request->cost_per_year;
            //$package->others = $request->others;

            $package->save();

            foreach($package->company as $data) {
                $data->websites_limit = unserialize($package->websites_limit)[$data->package_type];
                $data->recurring_transaction = unserialize($package->recurring_transaction)[$data->package_type];
                $data->online_payment = unserialize($package->online_payment)[$data->package_type];
    
                $data->save();
            }
            
        }
		
	
		
		if(! $request->ajax()){
           return redirect()->route('packages.index')->with('success', _lang('Updated Sucessfully'));
        }else{
		   return response()->json(['result'=>'success','action'=>'update', 'message'=>_lang('Updated Sucessfully'),'data'=>$package]);
		}
	    
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $package = Package::find($id);
        $package->delete();
        return redirect()->route('packages.index')->with('success',_lang('Deleted Sucessfully'));
    }
}
