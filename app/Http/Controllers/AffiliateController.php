<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AffiliateController extends Controller
{
    public function index()
    {
        $data = Auth::user()->affiliate()->first();
        // dd($data);
        $affiliateUsers = User::where(['affiliate_user_id' => Auth::user()->id])->get();
        return view('backend.affiliate.index', compact('data', 'affiliateUsers'));
    }
}
