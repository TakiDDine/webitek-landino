<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class TemplateController extends Controller
{
    public function index()
    {
        $templates = getTemplates(); 
        return view('backend.templates.index', compact('templates'));
    } 

    public function preview($template_name = '')
    {
        try {
            $template_name = strtolower(trim($template_name));
            if ($template_name === '') {
                return redirect()->back();
            }

            $template = getTemplate($template_name);

            if (!$template) {
                abort(404);
            }
            // dd(file_get_contents(public_path()."/templates/$template_name/index.html"));

            return file_get_contents(public_path()."/templates/$template_name/index.html");
        } catch (Exception $e) {
            abort(404);
        }
    }

    public function sections($template_name = '')
    {
        try {
            $template_name = strtolower(trim($template_name));
            if ($template_name === '') {
                return redirect()->back();
            }

            $template = getTemplate($template_name);

            if (!$template) {
                abort(404);
            }

            return json_encode([
                'html' => file_get_contents("/var/www/landino.io/public/templates/$template_name/sections/index.html"),
                // 'css' => file_get_contents("/var/www/landino.io/public/templates/$template_name/sections/css.html"),
            ]);

            return file_get_contents("/var/www/landino.io/public/templates/$template_name/sections/index.html");
        } catch (Exception $e) {
            dd($e);
            abort(404);
        }
    }

    public function isTrial()
    {
        $user = user();
        return new JsonResponse([
            'is_trial' => $user->company->membership_type == 'trial'
        ]);
    }
}
