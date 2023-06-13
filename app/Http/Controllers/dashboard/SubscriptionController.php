<?php

namespace App\Http\Controllers\dashboard;

use App\User;
use App\Subscription;
use App\SubscriptionPlan;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class SubscriptionController extends Controller
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
        $validator = Validator::make($request->all(), [
            'plan_id' => 'required|exists:subscription_plans,id',
            'type'    =>  'nullable|string',
            'duration' => 'required|integer'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => true,
                'message' => $validator->errors()
            ]);
        }

        $plan = SubscriptionPlan::find($request->plan_id);

        // return $plan->id;
        $this->user->subcribes()->attach($plan->id);
        
        return response()->json([
            'status' => true,
            'plan' => $plan,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function show(Subscription $subscription)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Subscription $subscription)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Subscription  $subscription
     * @return \Illuminate\Http\Response
     */
    public function destroy(Subscription $subscription)
    {
        //
    }
}
