<?php

namespace App\Http\Controllers\dashboard\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Verified;
use Illuminate\Foundation\Auth\VerifiesEmails;

class VerificationController extends Controller
{
    use VerifiesEmails;

     /**
     * Mark the user's email as verified.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function verify(Request $request)
    {
        // Find the user based on the ID provided in the URL
        $user = User::find($request->route('id'));

        // Verify if the user exists and the email has not been verified already
        if (!$user || !hash_equals((string) $request->route('hash'), sha1($user->getEmailForVerification()))) {
            return response()->json(['message' => 'Invalid verification link.'], 400);
        }

        // Mark the email as verified
        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
            event(new Verified($user));
        }
        return view('emails.verification-success');
        return response()->json(['message' => 'Email verified successfully.'], 200);
    }
    /**
     * Get the response for a successful email verification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function verified(Request $request)
    {
        return response()->json(['message' => 'Email verified successfully.'], 200);
    }

    /**
     * Get the response for a failed email verification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function sendFailedResponse(Request $request)
    {
        return response()->json(['message' => 'Email verification failed.'], 400);
    }

    /**
     * Send the email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    protected function sendEmailVerificationNotification(Request $request)
    {
        $request->user()->sendEmailVerificationNotification(new VerifyEmailMail());

        return response()->json(['message' => 'Email verification link sent successfully.'], 200);
    }

    /**
     * Resend the email verification notification.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function resend(Request $request)
    {
        // return 'hello';
        
        if ($request->user()->hasVerifiedEmail()) {
            return response()->json(['message' => 'Email already verified.'], 400);
        }

        $request->user()->sendEmailVerificationNotification();

        return response()->json(['message' => 'Email verification link resent successfully.'], 200);
    }
}
