<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
{{-- @if (_lang('SYSDIRECTIONDIR') == 'rtl')direction="rtl" dir="rtl" style="direction: rtl"@endif --}}
<!-- begin::Head -->

<head>

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-XD2MTZ40F2"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-XD2MTZ40F2');
    </script>

        
    <!--begin::Base Path (base relative path for assets of this page) -->
    <base href="{{env('APP_URL').'/public/backend/assets/builder/'}}">
    <!--end::Base Path -->
    <meta charset="utf-8" />
    <title>{{ get_option('site_title', 'لندينو') }}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="author" content="" />

    <!-- App favicon -->
    <link rel="icon" href="{{ get_favicon() }}">

    <!-- It is for needs of builder -->
    <link href="./../builder/css/iframe_font.css" rel="stylesheet">

    <link rel="stylesheet" href="./../builder/css/lib/bootstrap.weber.css" />
    <link rel="stylesheet" href="./../builder/css/lib/fx.css" />
    <link rel="stylesheet" href="./../builder/css/lib/bootstrap-datepicker.css" />
    <link rel="stylesheet" href="./../builder/css/lib/spectrum.css" />

    <link rel="stylesheet" href="./../builder/css/lib/owl.carousel.css" />

    <link rel="stylesheet" href="./../builder/css/lib/swiper-bundle.css" />

    <link rel="stylesheet" href="./../builder/css/lib/magnific-popup.css" />
    <link rel="stylesheet" href="./../builder/css/lib/masonryfilter.css" />
    <link rel="stylesheet" href="./../builder/css/lib/aos.css" />
    <link rel="stylesheet" href="./../builder/css/lib/codemirror.css" />
    <link rel="stylesheet" href="./../builder/css/fonts.css" />
    <link rel="stylesheet" href="./../builder/css/iframe.css" />
    <link rel="stylesheet" href="{{asset('backend/assets/builder/css/preloader.css')}}" />
    <link rel="stylesheet" href="{{asset('assets/css/custom.css')}}" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body class="run">
    <div class="builder-tools">

        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>







        <div class="bottom-builder-tools">

        </div>

    </div>




    <script src="./../builder/js/lib/jquery-2.1.4.min.js"></script>

    <script src="./../builder/js/lib/owl.carousel_builder.js"></script>
    
    <script src="./../builder/js/lib/swiper-bundle.min.js"></script>




    <div class="main font-style-supra">
        <style></style>
    </div>
    <script id="global-script"></script>
    <script src="./../builder/js/lib/popper.min.js"></script>
    <!-- Latest 3.2.x goodshare.js minify version from jsDelivr CDN -->
    <script src="./../builder/js/lib/goodshare.min.js"></script>
    <script src="./../builder/js/lib/jquery.magnific-popup.min.js"></script>
    <script src="./../builder/js/lib/instafeed.min.js"></script>
    <script src="./../builder/js/lib/twitterFetcher.js"></script>
    <script src="./../builder/js/lib/jquery.smooth-scroll.min.js"></script>
    <script src="./../builder/js/lib/jquery.validate.min.js"></script>
    <script src="./../builder/js/lib/jquery.nicescroll.min.js"></script>
    <script src="./../builder/js/lib/jquery.custom-file-input.js"></script>
    <script src="./../builder/js/lib/jquery.mask.js"></script>
    <script src="./../builder/js/lib/jquery.waypoints.min.js"></script>
    <script src="./../builder/js/lib/countUp-jquery.js"></script>
    <script src="./../builder/js/lib/jquery.vide_builder.min.js"></script>
    <script src="./../builder/js/lib/skrollr.js"></script>
    <script src="./../builder/js/lib/aos.js"></script>
    <script>
        AOS.init();
        //    $(document).on('click', 'a', function (e) {
        //        if (/\.html/.test(this.getAttribute('href')))
        //            e.preventDefault();
        //    });
        //for cookie dependent files
        var pAgree = '1';

        //    $(document.body).niceScroll({
        //        cursorcolor: "#555555"
        //        , cursorborder: "1px solid #555555"
        //        , autohidemode: "scroll"
        //        , hidecursordelay: 0
        //    });
        window.onbeforeunload = function() {
            return "Did you save your stuff?"
        }
    </script>
    <script src="./../builder/js/lib/rellax.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key={{ get_option('google_map_key') }}"></script>

    <script src="./../builder/js/lib/tether.min.js"></script>
    <script src="./../builder/js/lib/bootstrap.min.js"></script>
    <script src="./../builder/js/lib/spectrum.js"></script>
    <script src="./../builder/js/lib/libraty.js"></script>

    <script src="./../builder/js/lib/bootstrap-datepicker.min.js"></script>
    <script src="./../builder/js/lib/jquery.countdown.js"></script>
    <script src="./../builder/js/lib/jquery.masonryfilter.js"></script>



    <script>


    </script>
</body>

</html>
