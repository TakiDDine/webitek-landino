<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}" @if(_lang('SYSDIRECTIONDIR') == 'rtl')direction="rtl" dir="rtl" style="direction: rtl"@endif >

    <!-- begin::Head -->
    <head><!--begin::Base Path (base relative path for assets of this page) -->
        <base href="{{ asset('public/backend/assets/builder/builder')}}"><!--end::Base Path -->
        <meta charset="utf-8" />
        <title>{{ get_option('site_title', 'Spotlayer Framework') }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="author" content=""/>

		<!-- App favicon -->
        <link rel="icon" href="{{ get_favicon() }}">

    	<link rel="stylesheet" href="./../builder/css/lib/bootstrap.min.css" />
        <link rel="stylesheet" href="./../builder/css/lib/fx.css" />
    	<link rel="stylesheet" href="./../builder/css/lib/spectrum.css" />
    	<link rel="stylesheet" href="./../builder/css/lib/codemirror.css" />
        <link rel="stylesheet" href="./../builder/css/fonts.css" />
    	<link rel="stylesheet" href="./../builder/css/main.css" />
    	<link rel="stylesheet" href="./../builder/css/preloader.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </head>
    <body class="first-show">
        <script src="./../builder/js/lib/jquery-2.1.4.min.js"></script>
        <style id="builder-style"></style>
        <div class="supra-preloader">
        	<img src="{{ Auth::user()->company_id != '' ? get_company_logo() : get_logo() }}" style="max-height:150px;" alt="{{_lang('Project Creator')}}"/>
        	<div class="progress-bar-s">
        		<div class="progress"><div class="load"></div></div>
        	</div>
        	<div class="rights">
        		<p>&copy; {{ date('Y').' '.get_option('company_name') }}</p>
        	</div>
        </div>
        <aside class="left supra black"></aside>
        <aside class="control-panel supra black">
        	<div class="title d-flex justify-content-between align-items-center">
        		<h3>{{_lang('Sections')}}</h3>
        		<i class="supra bookmark"></i>
        	</div>
        	<ul class="sections">
				@foreach ($groups as $key => $node)
                    <li data-group="{{$key}}">{{$node['name']}}</li>
        		@endforeach
        	</ul>
        </aside>
        <div id="modal-thumb" class="supra">
            <div class="title">{{_lang('Page modals')}}</div>
            <div class="container-thumb"></div>
        </div>

        <div class="container-fluid">
            <div class="wrapper">
                {{-- Sidebar Area --}}
                <aside class="sidebar">
                    <nav class="menu_inner">
                        <div class="nav_logo">
                            <a href="/">
                                <img class="logo" src="https://logo.templateo.com/app/data/cj1/cj1ndcl2yv-i5t1r3u2u3.jpg" alt="landino brand">
                            </a>
                        </div>
                    <ul id="modal_section" class="nav_m nav_section">
                        <h5 class="head-modal">Ui base library</h5>
                    </ul>
                    </nav>
                    {{-- Content Section Viewd --}}
                </aside>
                <div id="components-preview" class="components-preview bg-light shadow-sm">
                    <h2 id="section_title" class="section_title"></h2>
                    <p class="instructure">Select a component 👇  and drag it to the canvas 👉, or just click on it!</p>
                </div>


                {{-- preview modal section --}}
                <main class="preview_modal">
                    <section class="main_topsection">
                        {{-- Media ViewPort --}}
                        <div id="view_media_screen" class="view_media_screen"></div>
                        {{-- Undo Redo --}}
                        <div class="redo_undo_actions">
                            <div id="undo_action"></div>
                            <div id="redo_action"></div>
                        </div>
                        {{-- Global Style --}}
                        <div id="global_style_section" class="global_style_section"></div>
                    </section>
                    <div class="wrap-iframe d-flex justify-content-center align-items-center">
                        <div class="wrap viewing-desctop">          
                            <label>
                                <span class="width" contenteditable="true"></span> x <span class="height" contenteditable="true"></span>
                                <i class="rotate icon-blr-lg-mobile"></i>
                            </label> 


            
                            <iframe id="main" src="{{ url('project/larabuilder') }}">
                            </iframe>
            
                        </div>
                    </div>
                </main>

                <aside class="right_bar_section">right_bar_section</aside>
            </div>
        </div>


        <div id="modal-container" class="supra"></div>
        <div id="modal-project-container" class="supra"></div>
        <div id="modal-form-container" class="supra font-style-supra"></div>
        <div id="csrf_field" class="csrf_field" style="display: none">{{ csrf_field() }}</div>
        <div id="userId" class="userId" style="display: none">{{Auth::user()->id}}</div>
        <div id="project_id" class="project_id" style="display: none">0</div>

        <script>
            localStorage.clear();
        </script>
        <script src="./../builder/js/lib/popper.min.js"></script>
        <script src="./../builder/js/lib/jquery.nicescroll.min.js"></script>

        <script src="./../builder/js/lib/tether.min.js"></script>
        <script src="./../builder/js/lib/bootstrap.min.js"></script>
        <script src="./../builder/js/lib/spectrum.js"></script>

        <script src="./../builder/js/lib/codemirror.js"></script>
        <script src="./../builder/js/lib/javascript.js"></script>
        <script src="./../builder/js/lib/css.js"></script>
        <script src="./../builder/js/lib/htmlmixed.js"></script>
        <script src="./../builder/js/lib/xml.js"></script>

        <script>
            @if(env('DEMO_MODE') == true)
                var demoMode    =    'active';
            @else
                var demoMode    =    'no';
            
                @if(get_option("google_map_key") == '' || get_option("google_map_key") == null || empty(get_option("google_map_key")))
                    alert('Please note that you did not add your google map key, so it will accure a javascript problem if you add any component which has a google map without adding the key first from settings');
                @endif
            @endif
            var ajaxbase    =   '{{url("api/ajax")}}';
            var baseurl     =   '{{url("/")}}';
            var publicpath    =   "{{base_path('public')}}";
            var basepath    =   "{{base_path('public/backend/assets/builder')}}";
            var googleKey   =   '{{get_option("google_map_key")}}';
            var userId      =   '{{Auth::user()->id}}';
            var project_id    =   0;
            var project_file    =   '';
            var project_file_name    =   '';


        </script>
        <script src="./../builder/js/options.js"></script>
        <script src="./../builder/js/download.js"></script>
        <script src="./../builder/js/builder.min.js"></script>

    </body>
</html>