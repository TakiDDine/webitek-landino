<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class GoogleAnalyticsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle($request, Closure $next)
    {
        // Track page view
        $data = [
            'v' => 1,
            't' => 'pageview',
            'tid' => 'G-XD2MTZ40F2',
            'cid' => $request->getClientIp(),
            'uip' => $request->getClientIp(),
            'dl' => $request->fullUrl(),
            'dr' => $request->header('referer'),
            'ua' => $request->header('User-Agent'),
        ];

        $url = 'https://www.google-analytics.com/collect?' . http_build_query($data);
        file_get_contents($url);

        return $next($request);
    }
}
