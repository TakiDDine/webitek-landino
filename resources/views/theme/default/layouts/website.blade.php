{{-- <!doctype html>
<html lang="{{ get_option('language') == "Arabic" ? "ar" : "en" }}" @if(_lang('SYSDIRECTIONDIR') == 'rtl' || get_option('backend_direction') == 'rtl') direction="rtl" dir="rtl" style="direction: rtl" @endif >
    <head>
        <meta charset="utf-8">
        <title>{{ get_option('website_title','LaraBuilder') }}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="keywords" content="{{ get_option('meta_keywords') }}"/>
        <meta name="description" content="{{ get_option('meta_description') }}"/>
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="og:title" content="{{ get_array_option('hero_title') }}"/>
        <meta name="og:type" content="website"/>
        <meta name="og:url" content="{{ url('') }}"/>
        <meta name="og:image" content="{{ asset('public/images/meta-image.png') }}"/>
        <meta name="og:site_name" content="{{ get_option('website_title','LaraBuilder') }}"/>
        <meta name="og:description" content="{{ get_option('meta_description') }}"/>

        <link rel="shortcut icon" href="{{ get_favicon() }}">
        <link href="{{ asset('public/theme/default/assets/css/bootstrap.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('public/theme/default/assets/css/stack-interface.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('public/theme/default/assets/css/socicon.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('public/theme/default/assets/css/lightbox.min.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('public/theme/default/assets/css/flickity.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('public/theme/default/assets/css/iconsmind.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('public/theme/default/assets/css/jquery.steps.css') }}" rel="stylesheet" type="text/css" media="all" />
        @if (_lang('SYSDIRECTIONDIR') == 'rtl' || get_option('backend_direction') == 'rtl')
        <link href="{{ asset('public/theme/default/assets/css/theme.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('public/theme/default/assets/css/theme-rtl.css') }}" rel="stylesheet" type="text/css" media="all" />
        @else 
        <link href="{{ asset('public/theme/default/assets/css/theme.css') }}" rel="stylesheet" type="text/css" media="all" />
        @endif
        <link href="{{ asset('public/theme/default/assets/css/custom.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="{{ asset('public/theme/default/assets/css/font-rubiklato.css') }}" rel="stylesheet" type="text/css" media="all" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:200,300,400,400i,500,600,700%7CMerriweather:300,300i" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700%7CRubik:300,400,500" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <style type="text/css">
            {!! xss_clean(get_option('custom_css_code')) !!}
        </style>
        
    </head>
    <body class="{{ get_option('backend_direction') }} ">
        <a id="start"></a>
        <div class="nav-container ">
            <div class="bar bar--sm visible-xs">
                <div class="container">
                    <div class="row">
                        <div class="col-3 col-md-2">
                            <a href="{{url('/')}}">
                                <img class="logo logo-dark" alt="logo" src="{{ get_logo() }}" />
                                <img class="logo logo-light" alt="logo" src="{{ get_logo() }}" />
                            </a>
                        </div>
                        <div class="col-9 col-md-10 text-right">
                            <a href="#" class="hamburger-toggle" data-toggle-class="#menu1;hidden-xs">
                                <i class="icon icon--sm stack-interface stack-menu"></i>
                            </a>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </div>
            <!--end bar-->
            <nav id="menu1" class="bar bar--sm bar-1 hidden-xs bar--absolute">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-1 col-md-2 hidden-xs">
                            <div class="bar__module">
                                <a href="{{url('/')}}">
                                    <img class="logo logo-dark" alt="logo" src="{{ get_logo() }}" />
                                    <img class="logo logo-light" alt="logo" src="{{ get_logo() }}" />
                                </a>
                            </div>
                            <!--end module-->
                        </div>
                        <div class="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                            <div class="bar__module">
                                <ul class="menu-horizontal text-left">
                                    <li class="{{ Request::is('/') ? 'active' : '' }}">
                                        <a class="" href="{{ url('/') }}"><span>{{ _lang('HOME') }}</span></a>
                                    </li>
                                    <li class="{{ Request::is('site/about') ? 'active' : '' }}">
                                        <a class="" href="{{ url('site/about') }}"><span>{{ _lang('ABOUT US') }}</span></a>
                                    </li>
                                    <li class=" {{ Request::is('site/features') ? 'active' : '' }}">
                                        <a class="" href="{{ url('site/features') }}"><span>{{ _lang('FEATURES') }}</span></a>
                                    </li>
                                    <li class=" {{ Request::is('site/pricing') ? 'active' : '' }}">
                                        <a class="" href="{{ url('site/pricing') }}"><span>{{ _lang('PRICING') }}</span></a>
                                    </li>
                                </ul>
                            </div>
                            <!--end module-->
                            <div class="bar__module">
                                @if(! Auth::check())
                                    <a class="btn btn--sm type--uppercase btn-hop" href="{{ url('login') }}">
                                        <span class="btn__text">
                                            {{ _lang('SIGN IN') }}
                                        </span>
                                    </a>
                                    @if(get_option('allow_singup','yes') == 'yes')
                                        <a class="btn btn--sm btn--primary type--uppercase btn-not-hop" href="{{ url('register/client_signup') }}">
                                            <span class="btn__text">
                                                {{ _lang('SIGN UP') }}
                                            </span>
                                        </a>
                                    @endif
                                @else
                                    <a class="btn btn--sm type--uppercase btn-not-hop" href="{{ url('dashboard') }}">
                                        <span class="btn__text">
                                            {{ _lang('Dashboard') }}
                                        </span>
                                    </a>
                                    <a class="btn btn--sm btn--primary type--uppercase btn-hop" href="{{ url('logout') }}">
                                        <span class="btn__text">
                                            {{ _lang('SIGN OUT') }}
                                        </span>
                                    </a>
                                @endif
                                
                            </div>
                            <!--end module-->
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </nav>
            <!--end bar-->
        </div>
        <div class="main-container">
            @if(Request::is('/'))
            <section class="cover unpad--bottom switchable switchable--switch bg--light text-center-xs">
                <div class="container">
                    <div class="row align-items-center justify-content-around">
                        <div class="col-md-6 col-lg-5 mt-0">
                            <h1>
                                <strong>{{ get_array_option('hero_title') }}</strong>
                            </h1>
                            <p class="lead">
                                {{ get_array_option('hero_sub_title') }}
                            </p>
                            <a class="btn btn--primary type--uppercase" href="{{ Auth::check() ? url('dashboard') : url('register/client_signup') }}">
                                <span class="btn__text">
                                    @if(get_option('trial_period') != 0) {{ _lang('Start') . ' ' . get_option('trial_period') . ' ' . _lang('Days Trial') }} @else {{ _lang('Get Started') }} @endif
                                </span>
                            </a>
                            <span class="block type--fine-print">{{ _lang('or') }}
                                <a href="{{ url('site/about') }}">{{ _lang('Read more') }}</a>
                            </span>
                        </div>
                        <div class="col-md-6">
                            <img alt="Image" src="{{ get_array_option('home_banner_image') != '' ? asset('public/uploads/media/'.get_array_option('home_banner_image')) : theme_asset('assets/img/avatar-large-3.png') }}" />
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </section>
            @else
                @yield('header')
            @endif
            
            @yield('content')

            <footer class="text-center-xs space--xs bg--dark ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <ul class="list-inline">
                                <li>
                                    <a href="{{ url('site/about') }}">
                                        <span class="h6 type--uppercase">{{ _lang('About us') }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ url('site/pricing') }}">
                                        <span class="h6 type--uppercase">{{ _lang('Pricing') }}</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ url('site/faq') }}">
                                        <span class="h6 type--uppercase">{{ _lang('FAQ') }}</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-5 text-right text-center-xs">
                            <ul class="social-list list-inline list--hover">
                                @if (get_array_option('linkedin_link'))
                                <li>
                                    <a href="{{ get_array_option('linkedin_link') }}">
                                        <i class="socicon socicon-linkedin icon icon--xs"></i>
                                    </a>
                                </li>
                                @endif
                                @if (get_array_option('twitter_link'))
                                <li>
                                    <a href="{{ get_array_option('twitter_link') }}">
                                        <i class="socicon socicon-twitter icon icon--xs"></i>
                                    </a>
                                </li>
                                @endif
                                @if (get_array_option('facebook_link'))
                                <li>
                                    <a href="{{ get_array_option('facebook_link') }}">
                                        <i class="socicon socicon-facebook icon icon--xs"></i>
                                    </a>
                                </li>
                                @endif
                                @if (get_array_option('instagram_link'))
                                <li>
                                    <a href="{{ get_array_option('instagram_link') }}">
                                        <i class="socicon socicon-instagram icon icon--xs"></i>
                                    </a>
                                </li>
                                @endif
                            </ul>
                        </div>
                    </div>
                    <!--end of row-->
                    <div class="row">
                        <div class="col-md-7">
                            <a class="type--fine-print" href="{{ url('site/terms_condition') }}">{{ _lang('Terms & Conditions') }}</a>
                            <a class="type--fine-print" href="{{ url('site/contactus') }}">{{ _lang('Contact us') }}</a>
                        </div>
                        <div class="col-md-5 text-right text-center-xs">
                            <span class="type--fine-print">&copy; <span class="update-year"></span> {{ get_array_option('website_copyright') }}.</span>
                        </div>
                    </div>
                    <!--end of row-->
                </div>
                <!--end of container-->
            </footer>
        </div>
        <!--<div class="loader"></div>-->
        <a class="back-to-top inner-link" href="#start" data-scroll-class="100vh:active">
            <i class="stack-interface stack-up-open-big"></i>
        </a>
        <script src="{{ asset('public/theme/default/assets/js/jquery-3.1.1.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/flickity.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/easypiechart.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/parallax.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/typed.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/datepicker.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/isotope.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/ytplayer.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/lightbox.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/granim.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/jquery.steps.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/countdown.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/twitterfetcher.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/spectragram.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/smooth-scroll.min.js') }}"></script>
        <script src="{{ asset('public/theme/default/assets/js/scripts.js') }}"></script>
        
        <script type="text/javascript">     
            (function($){		
                "use strict";
                
                // Show Success Message
                @if(Session::has('success'))
                Command: toastr["success"](" {{ session('success') }} ")
                @endif
                
                // Show Single Error Message
                @if(Session::has('error'))
                Command: toastr["error"]("{{ session('error') }}")
                @endif

                @foreach ($errors->all() as $error)
                    Command: toastr["error"]("{{ $error }}");          
                @endforeach
                
            })(jQuery); <!-- End jQuery -->

            @if(! Request::is('/'))
            document.title = $(".header-title").html() + ' | ' + document.title;
            @endif
        </script>
        
        <!-- Custom JS -->
        @yield('js-script')
    </body>
</html> --}}


<!DOCTYPE html>
<html lang="ar" class="rtl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="apple-touch-icon" sizes="180x180" href="/public/assets/images/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/public/assets/images/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/public/assets/images/favicons/favicon-16x16.png">
    <link rel="manifest" href="/public/assets/images/favicons/site.webmanifest">
    <link rel="mask-icon" href="/public/assets/images/favicons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="/public/assets/images/favicons/favicon.ico">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="msapplication-TileImage" content="/public/assets/images/favicons/mstile-144x144.png">
    <meta name="msapplication-config" content="/public/assets/images/favicons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <title> @yield('title') </title>
    @yield('head')
    <meta property="baseurl" content="">
    <meta property="lang" content="fa">
    <meta property="dir" content="rtl">
    <meta property="catpchaSiteKey" content="">
    <meta property="apiRoot" content="">
    <meta property="hash" content="v1.3.5">
    <link rel="stylesheet" href="/public/build/css/intlTelInput.min.css">
    <link rel="stylesheet" href="/public/assets/css/main.css?v1.3.5">
</head>



<style>
    .image-bottom-container {
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .image-bottom-container img {
        width: 60px;
        object-fit: cover;
        margin-left: 10px;
    }

    .header-logo img {
        position: relative;
        bottom: 8px;
    }

    .register-btn {
        border-radius: 4px;
        width: 100%;
        background: #3081e9;
        color: white;
    }

    .right-login {
        width: 35% !important;
        height: 100%;
        float: right;

    }

    .left-login {
        width: 65% !important;
        height: 100%;
        float: left;
        background: red;
    }

    .login-wrapper {
        display: block;
        width: 100%;
        height: 100%;
    }

    .right-login {
        text-align: center;
    }

    .form-control {
        border: 1px solid black;
        height: 65px;
        margin-bottom: 15px;
        width: 100%;
        border-radius: 6px;
        padding-right: 10px;
    }

    .kt-login__btn-primary {
        width: 100%;
        background: red;
    }

    .left-login {
        height: 100vh;
        background: #3081e9;
    }

    .right-login {
        padding: 45px;
    }

    .kt-login__btn-primary {
        width: 100%;
        background: #3081e9;
        color: white;
        margin-top: 15px;
        border-radius: 2px;
    }

    .login-card {
        margin-top: 50%;
        transform: translateY(-25%);
    }

    .remember-me-wrapper {
        text-align: right;
    }

    .reset-password {
        background: #3081e9;
        width: 100%;
        color: white;
        border-radius: 4px;
    }

    .left-login {
        background-image: url(http://demo.harnishdesign.net/html/oxyy/images/login-bg.jpg);
        position: relative;
    }

    .left-login:before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        background: #3081e9;
        opacity: 0.9;
    }


    body {
        background-color: #f5f7fa !important;
    }

    .login-card {
        background: white;
        max-width: 470px;
        margin: 0 auto;
        padding: 25px;
        border-radius: 13px;
        transform: translateY(-50%);
        margin-top: 400px;
    }

    * {
        margin: 0;
        padding: 0;
    }

    .login-card p {
        margin-bottom: 36px;
    }

    .kt-login__btn-primary {
        border-radius: 7px;
        box-shadow: none;
        border: 0;
    }

    .login-card img {
        max-width: 70px;
        margin: 0 auto;
        display: inline;
    }

    .login-card {
        text-align: center;
    }

    .kt-login__actions {
        text-align: right;
    }

    .login-card {
        box-shadow: 0px 5px 20px 0 rgb(55 101 153 / 20%);
    }

    .login-card .form-control {
        border: 1px solid #00000030;
    }

    p.sign_up {
        margin-top: 18px;
    }

    p.sign_up a {
        color: #3081e9;
        text-decoration: underline;
    }

    p.sign_up {
        margin-bottom: 0;
    }

</style>

<body>


    @yield('content')

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="/public/assets/js/script.js?v1.3.5"></script>

    <script src="/public/build/js/intlTelInput-jquery.min.js"></script>
    @yield('js')
</body>


</html>
