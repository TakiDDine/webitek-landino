<?php

namespace App\Http\Controllers\dashboard;

use App\Http\Controllers\Controller;
use App\SubscriptionPlan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscriptionPlanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $subscription_plans = SubscriptionPlan::all();
        return response()->json([
            'status' => true,
            'plans' => $subscription_plans
        ]);
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
            'type'          => 'required|string',
            'cost_per_month'=> 'required|numeric',
            'limit_website' => 'required|integer',
            'cost_per_year' => 'required|numeric',
            'code_promo'    => 'nullable|string',
            'features'      => 'nullable|string',
            'payment_type'  => 'nullable|string',
        ]);
       
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'massage' => $validator->errors()
            ], 400);
        }
        
        //create plan 
        $plan = SubscriptionPlan::create($validator->validated());

        return response()->json([
            'status'  => true,
            'message' => 'Subscription plan created successfully',
            // 'plan' => $plan
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\SubscriptionPlan  $subscriptionPlan
     * @return \Illuminate\Http\Response
     */
    public function show(SubscriptionPlan $subscriptionPlan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\SubscriptionPlan  $subscriptionPlan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, SubscriptionPlan $subscriptionPlan)
    {
        $validator = Validator::make($request->all(),[
            'name'          => 'required|string',
            'type'          => 'required|string',
            'cost_per_month'=> 'required|float',
            'limit_website' => 'required|float',
            'cost_per_year' => 'required|float',
            'code_promo'    => 'nullable|string',
            'features'      => 'nullable|string',
            'payment_type'  => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status'  => false,
                'message' => $validator->errors()
            ], 400);
        }
        //update plan 
        $subscriptionPlan->update($validator->validated());
        return response()->json([
            'status'  => true,
            'message' => 'Subscription plan updated successfully',
            'plan'    => $subscriptionPlan
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\SubscriptionPlan  $subscriptionPlan
     * @return \Illuminate\Http\Response
     */
    public function destroy(SubscriptionPlan $subscriptionPlan)
    {
         $subscriptionPlan->delete();

         return response()->json([
            'status' => true,
            'message' => 'Subscription plan deleted successfully',
         ], 204);
    }
}
