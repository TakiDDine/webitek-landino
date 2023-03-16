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
    <!-- end::Head -->
    <body  class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed kt-page--loading"  >
        @yield('content')

        @if(env('DEMO_MODE') == true)
		    <script src="{{ asset('public/backend/assets/js/vendor/jquery-2.2.4.min.js') }}"></script>
        @endif
        @yield('js-script')
    </body>
</html>