<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
{{-- @if (_lang('SYSDIRECTIONDIR') == 'rtl')direction="rtl" dir="rtl" style="direction: rtl"@endif --}}
<!-- begin::Head -->

<head>
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

    <link rel="stylesheet" href="{{asset('/backend/assets/builder/css/lib/bootstrap.min.css')}}" />
    <link rel="stylesheet" href="{{asset('/backend/assets/builder/css/lib/fx.css')}}" />
    <link rel="stylesheet" href="{{asset('/backend/assets/builder/css/lib/spectrum.css')}}" />
    <link rel="stylesheet" href="{{asset('/backend/assets/builder/css/lib/codemirror.css')}}" />
    <link rel="stylesheet" href="{{asset('/backend/assets/builder/css/fonts.css')}}" />
    <link rel="stylesheet" href="{{asset('backend/assets/builder/css/main.css')}}" />
    <link rel="stylesheet" href="{{asset('backend/assets/builder/css/preloader.css')}}" />
    <link rel="stylesheet" href="{{asset('/assets/css/font.css')}}">

    <style>
        .icon-blr-lg-mobile.landscape {
            transform: rotate(90deg);
        }

        ._disabled {
            opacity: .5;
            cursor: not-allowed !important;
        }

        ._disabled a {
            cursor: not-allowed !important;
        }

        .upper-builder-tools-left.hidden {
            display: none !important;
        }

        #publish-btn {
            cursor: pointer;
            background: #3181e9;
            color: white;
            float: right;
            width: 100%;
            transition: all .3s ease;
        }

        #publish-btn:hover {
            background: #276cc5;
        }

        body {
            font-family: "Vazir" !important;
        }

        /* width */
        ::-webkit-scrollbar {
            width: 13px;
            height: 16px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 100vh;
            background: #edf2f7;
            width: 13px;
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #cbd5e0;
            border-radius: 100vh;
            border: 3px solid #edf2f7;
        }

        /* Handle on hover */
        ::-webkit-scrollbar-thumb:hover {
            background: #a0aec0;
        }

    </style>

    <style>
        .tools-btn {
            top: -8px;
            position: relative;
            height: 80px;
            padding-top: 15px !important;
        }

        .upper-builder-tools {
            display: flex;
            flex-direction: row-reverse;
        }

        .upper-builder-tools-right {
            margin: 0;
        }

        .upper-builder-tools-right {
            margin: 0;
            display: flex;
            align-items: center;
            flex-direction: row-reverse;
        }

        .tools-btn {
            cursor: pointer;
            display: inline-block;
            position: relative;
            top: -8px;
            height: 80px;
            border-left: 1px solid lightgray;
            padding-top: 15px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
        }

        .mobile-computer {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .upper-builder-tools-left div a {
            display: flex !important;
            justify-content: center;
            align-items: center;
        }


        .upper-builder-tools-left div a svg {
            margin-right: 10px;
        }

        .tools-btn:hover {
            background: #f2f2f2;
            transition: all .3s ease;
        }

    </style>

    <style>
        .wrap {
            margin: 125px 0;
        }

        .builder-tools {
            z-index: 2000;
            /* position: fixed; */
            position: relative;
        }

        .upper-builder-tools-right {
            background: white;
            width: 35%;
            float: right;
        }

        .upper-builder-tools {
            border-bottom: 1px solid #dcdee5;
            overflow: hidden;
            z-index: 999999999;
            position: relative;
        }

        .builder-tools {
            background: white;
            overflow: hidden;
            width: 100%;
            background: white;
        }

        .upper-builder-tools-center {
            width: 30%;
            /* background: white;
            height: 90px;
            float: right; */
        }

        .upper-builder-tools-left {
            background: white;
            width: 35%;
            dispaly: flex;
            align-items: center;
            /* float: right;
            height: 90px; */
        }

        .builder-tools {
            box-shadow: 0 0.1875rem 0.8125rem rgb(0 0 0 / 4%);
            background: white;
        }

        /* .tools-btn {
            float: right;
            display: inline-block;
            width: 70px;
            height: 50px;
            border-left: 1px solid #dcdee5;

            text-align: center;
            line-height: 50px;
        } */


        .mobile-computer {
            text-align: center;
        }

        .mobile-computer a {
            border: 1px solid #dcdee5;
            width: 80px;
            display: inline-block;
            padding: 20px;
        }

        .upper-builder-tools-left div {
            float: left;
            height: 50px;
            margin-left: 10px;
            min-width: 140px;
            text-align: center;
        }

        .builder-tools {
            max-height: 79px !important;
            overflow: hidden;
        }


        .upper-builder-tools-left div a {
            border: 1px solid #3081E9;
            display: inline-block;
            color: #3081E9;
            width: 100%;
            height: 50px;
            line-height: 44px;
            border-radius: 12px;
            padding: 0;
        }

        .upper-builder-tools-left div a:hover {
            text-decoration: none;
        }

        .upper-builder-tools-left div.save a {
            border-color: #3081E9;
            color: #3081E9;
        }


        a.mobile {
            border-right: 0;
            margin: 0 !important;
        }

        a.computer {
            position: relative;
            left: -5px;
        }

        .builder-tools {
            padding-top: 14px;
        }

    </style>

    <style>
        .modal-dialog {
            margin: 0 auto !important;
            max-width: 1600px !important;
        }

        .modal-dialog {
            min-height: calc(100vh - 60px) !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            overflow: auto !important;
        }

        @media(max-width: 768px) {
            .modal-dialog {
                min-height: calc(100vh - 20px) !important;
            }
        }

        .modal-body {
            background: #F5F7FA !important;
            padding: 0 !important;
        }

        .modal-body-sections ul li {
            width: 33.33% !important;
            float: right !important;
        }

        .modal-body-sections ul li a {
            width: 100% !important;
        }

        .modal-body-sidbar {
            max-height: 84vh !important;
            overflow-y: scroll !important;
            float: right !important;
            overflow: hidden !important;
            width: 270px !important;
            background: white !important;
            padding: 10px !important;
            min-height: 84vh !important;
            display: inline-block !important;
            box-shadow: -0.3125rem 0 0.4375rem rgb(32 112 217 / 5%) !important;

        }

        .modal-body-sections {
            width: calc(100% - 270px) !important;
            float: right !important;
            max-height: 84vh !important;
            overflow-y: scroll !important;
            padding-left: 45px !important;
            background-color: #fff !important;
        }

        .modal-body-sections li a {

            overflow: hidden !important;
            float: right !important;
            position: relative !important;
            overflow: hidden !important;
            background-color: #fff !important;
            border-radius: .375rem !important;
            box-shadow: 0 0.1875rem 0.9375rem rgb(81 93 107 / 7%) !important;
        }

        .modal-body-sections ul {
            list-style: none !important;
        }

        .modal-body-sidbar li a {
            display: block !important;
            padding: 10px 21px !important;
            color: #515D6B !important;
            font-size: 18px !important;
        }

        .modal-body-sidbar ul {
            list-style: none !important;
            margin: 0 !important;
            padding: 0 !important;
            margin-top: 45px !important;
        }

        .modal-body-sidbar h2 {
            font-size: 18px !important;
            letter-spacing: 0 !important;
            padding-right: 10px !important;
            font-size: 16px !important;
            margin-top: 30px !important;
        }



        .modal-body-sections ul li {
            padding: 14px !important;
        }


        .modal-body-sections h3 {
            font-size: 16px !important;
            margin-right: 50px !important;
        }

        button.close.close-modal {
            background: none;
            left: 30px !important;
            position: absolute !important;
            top: 19px !important;
            font-size: 23px !important;
            color: #848688 !important;
        }

        .modal-body {
            position: relative !important;
        }

        .modal-body-sections {
            padding-top: 40px !important;
        }

    </style>

    {{-- New style --}}

    <style>
        aside.left.supra.black {
            display: none;
        }

        aside.control-panel.supra {
            display: none;
        }

        .wrap-iframe.d-flex.justify-content-center.align-items-center {
            padding-left: 0 !important;
            padding-top: 124px;
        }

    </style>

    <style>
        .modal,
        .modal-dialog {
            z-index: 999999999999;
        }

        .modal-dialog {
            margin: 0 auto !important;
            max-width: 1600px !important;
        }

        .modal-dialog {
            min-height: calc(100vh - 60px) !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            overflow: auto !important;
        }

        @media(max-width: 768px) {
            .modal-dialog {
                min-height: calc(100vh - 20px) !important;
            }
        }

        .modal-body {
            background: #F5F7FA !important;
            padding: 0 !important;
        }

        .modal-body-sections ul li {
            width: 33.33% !important;
            float: right !important;
        }

        .modal-body-sections ul li a {
            width: 100% !important;
        }

        .modal-body-sidbar {
            max-height: 84vh !important;
            /* overflow-y: scroll !important; */
            float: right !important;
            overflow: hidden !important;
            width: 270px !important;
            background: white !important;
            padding: 10px !important;
            min-height: 84vh !important;
            display: inline-block !important;
            box-shadow: -0.3125rem 0 0.4375rem rgb(32 112 217 / 5%) !important;

        }

        .modal-body-sections {
            width: calc(100% - 270px) !important;
            float: right !important;
            max-height: 84vh !important;
            /* overflow-y: scroll !important; */
            padding-left: 45px !important;
        }

        .modal-body-sections li a {

            overflow: hidden !important;
            float: right !important;
            position: relative !important;
            overflow: hidden !important;
            background-color: #fff !important;
            border-radius: .375rem !important;
            box-shadow: 0 0.1875rem 0.9375rem rgb(81 93 107 / 7%) !important;
        }

        .modal-body-sections ul {
            list-style: none !important;
        }

        .modal-body-sidbar li a {
            display: block !important;
            padding: 10px 21px !important;
            color: #515D6B !important;
            font-size: 18px !important;
        }

        .modal-body-sidbar ul {
            list-style: none !important;
            margin: 0 !important;
            padding: 0 !important;
            margin-top: 45px !important;
        }

        .modal-body-sidbar h2 {
            font-size: 18px !important;
            letter-spacing: 0 !important;
            padding-right: 10px !important;
            font-size: 16px !important;
            margin-top: 30px !important;
        }



        .modal-body-sections ul li {
            padding: 14px !important;
        }


        .modal-body-sections h3 {
            font-size: 16px !important;
            margin-right: 50px !important;
        }

        button.close.close-modal {
            background: none;
            left: 30px !important;
            position: absolute !important;
            top: 19px !important;
            font-size: 23px !important;
            color: #848688 !important;
        }

        .modal-body {
            position: relative !important;
        }

        .modal-body-sections {
            padding-top: 40px !important;
        }

        .modal-body-sections {
            min-height: 84vh;
            list-style-type: none;

        }


        .modal-body-sidbar li:hover {
            cursor: pointer;
        }

        .main.font-style-supra {
            margin-top: 60px !important;
        }

        aside.left.supra.black {
            padding-top: 140px;
        }

        aside.left.supra.black li#sections {
            display: none !important;
        }


        .modal-body-sidbar li {
            text-align: right;
            padding: 8px 20px;
        }

        .modal-body-sidbar ul {
            overflow: hidden;
            /* overflow-y: scroll; */
            max-height: 600px !important;
        }

        aside.add-sections-items {
            width: 100% !important;
            left: initial !important;
            right: initial !important;
            position: inherit !important;
        }

        aside.add-sections-items>ul li.wrap-hover {
            width: 50% !important;
            height: 340px;
        }

        aside.add-sections-items>ul li img {
            width: 100%;
            max-width: 100%;
            height: 100%;
            object-fit: cover;
        }

        aside.add-sections-items {
            background: transparent;
            padding-right: 25px !important;
        }

        aside.add-sections-items>ul li.wrap-hover {
            border: 1px solid black;
            margin-bottom: 25px !important;
        }

        aside.add-sections-items>ul li.wrap-hover:nth-child(odd) {
            width: 48% !important;
            margin-left: 2%;
        }

        aside.modal-body-sections h3 {
            text-align: right;
            font-size: 25px !important;
            margin-bottom: 30px;
        }

        .close-modal span {
            font-size: 35px !important;
        }

        .add-sections-items {
            opacity: 1 !important;
        }

        .modal-body-sections aside.add-sections-items.supra {
            height: 640px !important;
        }

        .modal-body-sidbar h2 {
            text-align: right;
            font-size: 24px !important;
        }


        .upper-builder-tools {
            position: fixed;
            width: 100%;
            background: white;
            height: 62px;
        }

        /* .upper-builder-tools-right {
            margin-top: 5px;
        } */

        /* .tools-btn {
            line-height: 70px !important;
            padding-top: 10px;
        } */

        .upper-builder-tools-left {
            padding-top: 5px;
        }

        aside.left.supra.black li#sections {
            display: none !important;
        }

        .tools-btn a {
            display: flex;
            align-items: center;
            height: 100%;
        }

        .tools-btn.unactive a {
            opacity: 0.5;
            -moz-user-select: none;
            -khtml-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            pointer-events: none;
        }

        .switch {
            position: relative;
            display: inline-block;
            width: 40px;
            height: 20px;
            margin-bottom: 0 !important;
        }

        .switch input {
            opacity: 0;
            width: 0;
            height: 0;
        }

        .slider {
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #ccc;
            -webkit-transition: .4s;
            transition: .4s;
        }

        .slider:before {
            position: absolute;
            content: "";
            height: 23px;
            width: 23px;
            left: -7px;
            bottom: -1px;
            background-color: white;
            -webkit-transition: .4s;
            transition: .4s;
            border: 1px solid lightblue;
        }

        input:checked+.slider {
            background-color: #2196F3;
        }

        input:focus+.slider {
            box-shadow: 0 0 1px #2196F3;
        }

        input:checked+.slider:before {
            -webkit-transform: translateX(26px);
            -ms-transform: translateX(26px);
            transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
            border-radius: 34px;
        }

        .slider.round:before {
            border-radius: 50%;
        }

        .upper-builder-tools-left a:hover {
            background-color: #3081E9 !important;
            color: white !important;
            transition: all .3s ease;
        }

        .upper-builder-tools-left a svg {
            fill: #3081E9;
        }

        .upper-builder-tools-left a:hover svg {
            fill: white !important;
            transition: all .3s ease;
        }

        #exampleModal button.close,
        div#pageSettingsModal button.close {
            background: whitesmoke;
            padding-top: 5px;
            border: 1px solid #00000042;
            border-radius: 2px;
        }

        .page_settings_fields {
            width: 80%;
            margin: 0 auto;
            text-align: right;
            padding: 50px 0;
        }

        .page_settings_fields a {
            width: 100%;
            margin: 0 auto;
            margin-top: 19px;
        }

        .save_page_settings {
            background: #2196f3;
            padding: 10px 16px;
            display: block;
            border-radius: 5px;
            margin: 40px 50px;
            text-align: center;
            color: white;
            font-size: 17px;
        }

        .page_settings_fields input {
            width: 100%;
            height: 49px;
            border-radius: 3px;
            border: 1px solid;
            padding: 0 10px;
            text-align: right;
        }

        .modal-header {
            direction: rtl;
        }

    </style>



    <style>
        .add_new_page {
            background: #2196f3;
            padding: 19px 16px;
            display: block;
            border-radius: 5px;
            margin: 40px 50px;
            text-align: center;
            color: white;
            font-size: 21px;
        }

        ul.pages_list {
            list-style: none;
            margin-top: 45px;
            max-height: 399px;
            overflow: hidden;
            overflow-y: scroll;
        }

        ul.pages_list li {
            background: white;
            margin-bottom: 5px;
            padding: 13px;
            display: block;
            width: calc(100% - 35px);
            border: 1px solid #cbcbcb;
        }

        ul.pages_list li .edit_page {
            border: 1px solid black;
            display: inline-block;
            float: right;
            padding: 0px 20px;
        }


        ul.pages_list li .delete_page {
            border: 1px solid black;
            display: inline-block;
            float: right;
            padding: 0px 20px;
            margin-right: 10px;
        }

        span.delete_page:hover,
        span.edit_page:hover {
            cursor: pointer;
        }

        span.delete_page:hover,
        span.edit_page:hover {
            background: #2196f3;
        }

        .edit_page_info_wrapper input,
        .edit_page_info_wrapper textarea {
            width: 95%;
            margin: 10px 40px;
        }

        .edit_page_info_wrapper .edit_page_save_changes {
            width: 91%;
            background: #2196f3;
            display: block;
            padding: 10px;
            text-align: center;
            color: white;
            margin: 0 auto;
        }

        div#hide {
            /* z-index: -999999999999999999999999; */
            /* position: relative; */
            display: none !important;
        }

        ul.pages_list .active {
            background: #2196f3;
        }

        ul.pages_list .page_name:hover {
            cursor: pointer;
        }

        .add-element-button img,
        .pages-button img,
        .pages-setting img {
            width: 23px;
        }

    </style>

</head>

<body class="first-show">
    <script src="./../builder/js/lib/jquery-2.1.4.min.js"></script>



    <div class="modal fade sections-modal" id="SectionsModal" tabindex="-1" role="dialog" aria-labelledby="SectionsModal"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body-sidbar">
                        <h2>اختر نوع الأقسام</h2>
                        <ul>

                        </ul>
                    </div>
                    <aside class="modal-body-sections">
                        <h3>اختار القسم للإنطلاق</h3>
                        <div class="main-section-modal add-sections-items">
                            @foreach ($data['groups'] as $key => $node)
                                @foreach ($node['sections'] as $section)
                                    <li class="section__item__li" data-section-group="{{ $key }}">
                                        <a href="#" class="section__item" data-section-name="{{ $section->name }}">
                                            <img src="{{ $section->preview }}" alt="">
                                        </a>
                                    </li>
                                @endforeach
                            @endforeach
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>

    <script>
        $('#SectionsModal').on('shown.bs.modal', function() {
            $(".modal-backdrop.in").hide();
        })

        $('.filter').click(function(e) {
            e.preventDefault();
            e.stopPropagation();

            $('.section__item__li').hide();
            $(`[data-section-group=${$(this).data('filter')}]`).show()
        })
    </script>

    <div class="upper-builder-tools tools-hidden">
        <div class="upper-builder-tools-right">
            <div class="tools-btn btn-exit">
                <a href="javascript:;">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                        class="icon__2kAHX" viewBox="0 0 24 24" width="24" height="24">
                        <defs>
                            <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 24 24" id="close">
                                <style type="text/css">
                                    #close .st0 {
                                        enable-background: new;
                                    }

                                </style>
                                <path id="close_path" class="st0"
                                    d="M19,6.4L17.6,5L12,10.6L6.4,5L5,6.4l5.6,5.6L5,17.6L6.4,19l5.6-5.6l5.6,5.6l1.4-1.4L13.4,12L19,6.4z">
                                </path>
                            </symbol>
                        </defs>
                        <g fill="#808080">
                            <style type="text/css">
                                #close .st0 {
                                    enable-background: new;
                                }

                            </style>
                            <path id="close_path" class="st0"
                                d="M19,6.4L17.6,5L12,10.6L6.4,5L5,6.4l5.6,5.6L5,17.6L6.4,19l5.6-5.6l5.6,5.6l1.4-1.4L13.4,12L19,6.4z">
                            </path>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="tools-btn btn-next unactive">
                <a href="javascript:;" id="back">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                        class="icon__2kAHX" viewBox="0 0 32 32" width="32" height="32">
                        <defs>
                            <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32" id="redo">
                                <path
                                    d="M21,5.6L19.6,7l4,4H12.7h-0.1c-4.1,0-7.5,3.3-7.6,7.5c0.1,4.1,3.4,7.5,7.6,7.5h0.1h6.7v-2h-6.7  C9.6,24,7,21.6,7,18.5s2.6-5.6,5.7-5.5h10.9l-4,4l1.4,1.4l6.4-6.4L21,5.6z">
                                </path>
                            </symbol>
                        </defs>
                        <g fill="#666666">
                            <path
                                d="M21,5.6L19.6,7l4,4H12.7h-0.1c-4.1,0-7.5,3.3-7.6,7.5c0.1,4.1,3.4,7.5,7.6,7.5h0.1h6.7v-2h-6.7  C9.6,24,7,21.6,7,18.5s2.6-5.6,5.7-5.5h10.9l-4,4l1.4,1.4l6.4-6.4L21,5.6z">
                            </path>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="tools-btn btn-back unactive">
                <a href="javascript:;">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                        class="icon__2kAHX" viewBox="0 0 32 32" width="32" height="32">
                        <defs>
                            <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32" id="undo">
                                <path
                                    d="M19.4,11C19.4,11,19.4,11,19.4,11l-11,0l4-4L11,5.6L4.6,12l6.4,6.4l1.4-1.4l-4-4h10.9c0,0,0,0,0.1,0  c3,0,5.5,2.5,5.6,5.5c0,3.1-2.6,5.5-5.7,5.5h-6.7v2h6.7c0,0,0.1,0,0.1,0c4.1,0,7.5-3.3,7.6-7.5C26.9,14.3,23.6,11,19.4,11z">
                                </path>
                            </symbol>
                        </defs>
                        <g fill="#666666">
                            <path
                                d="M19.4,11C19.4,11,19.4,11,19.4,11l-11,0l4-4L11,5.6L4.6,12l6.4,6.4l1.4-1.4l-4-4h10.9c0,0,0,0,0.1,0  c3,0,5.5,2.5,5.6,5.5c0,3.1-2.6,5.5-5.7,5.5h-6.7v2h6.7c0,0,0.1,0,0.1,0c4.1,0,7.5-3.3,7.6-7.5C26.9,14.3,23.6,11,19.4,11z">
                            </path>
                        </g>
                    </svg>
                </a>
            </div>
            <div class="tools-btn btn-modal-sections add-element-button">
                <a href="javascript:;" id="open-modal-sections">
                    <img src="/public/icons/add-element.svg" />
                </a>
            </div>
            <div class="tools-btn btn-modal-sections pages-button">
                <a href="javascript:;" data-toggle="modal" data-target="#exampleModal">
                    <img src="/public/icons/pages.svg" />
                </a>
            </div>
            <div class="tools-btn btn-modal-sections pages-setting">
                <a href="javascript:;" data-toggle="modal" data-target="#pageSettingsModal">
                    <img src="/public/icons/page-settings.svg">
                </a>
            </div>


            <div class="tools-btn" style="
            display: flex;
            align-items: center;
            justify-content: center;
        ">
                {{-- <a href="javascript:;" id="edit-sections" data-target='elements'>
                تعديل الأقسام
            </a> --}}
                <span style="padding-right: 10px">
                    تعديل الأقسام
                </span>
                {{-- <a href="javascript:;" id="edit-sections" data-target='elements'>
                        تعديل الأقسام
                    </a> --}}
                <label class="switch" id="edit-sections" data-target='elements'>
                    <input type="checkbox" checked>
                    <span class="slider round"></span>
                </label>

                <span style="padding-left: 10px">
                    تعديل العناصر
                </span>
            </div>
        </div>
        <div class="upper-builder-tools-center">
            <div class="mobile-computer">
                <div>
                    <a href="javascript:;" class="mobile" id='viewing-mobile'>
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                            class="icon__2kAHX device-mobile__3vcTC" viewBox="0 0 16 23" width="24" height="24">
                            <defs>
                                <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 16 23" id="device-mobile">
                                    <g id="device-mobile_Group_13131" transform="translate(-741.5 -23.5)">
                                        <g id="device-mobile_Rectangle_5720">
                                            <path
                                                d="M755.5,46.5h-12c-1.1,0-2-0.9-2-2v-19c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v19    C757.5,45.6,756.6,46.5,755.5,46.5z M743.5,25.5L743.5,25.5v19h12v-19H743.5z">
                                            </path>
                                        </g>
                                        <g id="device-mobile_Ellipse_1317">
                                            <circle cx="749.5" cy="40.5" r="1.5"></circle>
                                        </g>
                                    </g>
                                </symbol>
                            </defs>
                            <g fill="#999999">
                                <g id="device-mobile_Group_13131" transform="translate(-741.5 -23.5)">
                                    <g id="device-mobile_Rectangle_5720">
                                        <path
                                            d="M755.5,46.5h-12c-1.1,0-2-0.9-2-2v-19c0-1.1,0.9-2,2-2h12c1.1,0,2,0.9,2,2v19    C757.5,45.6,756.6,46.5,755.5,46.5z M743.5,25.5L743.5,25.5v19h12v-19H743.5z">
                                        </path>
                                    </g>
                                    <g id="device-mobile_Ellipse_1317">
                                        <circle cx="749.5" cy="40.5" r="1.5"></circle>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>
                </div>
                <div>
                    <a href="#" class="computer" id="viewing-desktop">
                        <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                            class="icon__2kAHX device-desktop__3OyIB" viewBox="0 0 26 23.5" width="26" height="23.5">
                            <defs>
                                <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 26 23.5" id="device-desktop">
                                    <path
                                        d="M24,0H2C0.9,0,0,0.9,0,2v13c0,1.1,0.9,2,2,2h10.5v4.5h-5v2h12v-2h-5V17H24c1.1,0,2-0.9,2-2V2  C26,0.9,25.1,0,24,0z M24,15H2L2,2h0h22V15z">
                                    </path>
                                </symbol>
                            </defs>
                            <g fill="#999999">
                                <path
                                    d="M24,0H2C0.9,0,0,0.9,0,2v13c0,1.1,0.9,2,2,2h10.5v4.5h-5v2h12v-2h-5V17H24c1.1,0,2-0.9,2-2V2  C26,0.9,25.1,0,24,0z M24,15H2L2,2h0h22V15z">
                                </path>
                            </g>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="upper-builder-tools-left" style="display: flex;">
            <div class="_disabled">
                <a href="javascript:;" class="preview" id="preview-custom">
                    <svg id="publishing" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path id="Rectangle-9"
                            d="M12,0V2H2V18H18V8h2V19a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0Z" />
                        <path id="Combined-Shape" d="M18,3.314,10.414,10.9,9,9.485,16.485,2H14V0h6V6H18Z"
                            fill-rule="evenodd" />
                    </svg>
                    <span>
                        معاينة
                    </span>
                </a>
            </div>
            <div class="save">
                <a href="javascript:;" id="save-btn">
                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                        class="icon__2kAHX" viewBox="0 0 24 19" width="24" height="19">
                        <defs>
                            <symbol xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 24 19" id="publish-md">
                                <path
                                    d="M5.6,16.8c-1.3,0-2.6-0.5-3.7-1.4c-1.1-1-1.8-2.3-1.9-3.8c0-0.2,0-0.3,0-0.5c0-2.2,1.3-4.2,3.3-5c1.9-0.8,4.1-0.4,5.6,1.1  L7.5,8.5C6.6,7.6,5.3,7.3,4.1,7.9C2.8,8.4,2,9.7,2,11.1c0,0.1,0,0.2,0,0.4c0.1,1,0.5,1.8,1.2,2.5c0.7,0.6,1.6,0.9,2.6,0.9l0.1,2  C5.8,16.7,5.7,16.8,5.6,16.8z">
                                </path>
                                <path
                                    d="M18.1,16.7v-2c1.2,0,3.9-0.3,3.9-3.3c0-1.3-0.8-2-1.3-2.3c-0.9-0.6-2.1-0.7-3-0.4l-0.8-1.8c1.5-0.6,3.4-0.4,4.9,0.5  c1.4,0.9,2.2,2.4,2.2,4C24,14.7,21.7,16.7,18.1,16.7z">
                                </path>
                                <path
                                    d="M18.1,7.4c-0.2-3.6-2.9-5.4-5.4-5.4c-2.3-0.1-5,1.3-5.4,5.2L5.2,7c0.5-4.9,4.1-7,7.5-7c3.5,0.1,7.1,2.6,7.4,7.3L18.1,7.4z">
                                </path>
                                <rect x="11" y="10" width="2" height="9"></rect>
                                <polygon points="15.3,14.1 12,10.8 8.7,14.1 7.3,12.6 12,7.9 16.7,12.6 "></polygon>
                            </symbol>
                        </defs>
                        <g>
                            <path
                                d="M5.6,16.8c-1.3,0-2.6-0.5-3.7-1.4c-1.1-1-1.8-2.3-1.9-3.8c0-0.2,0-0.3,0-0.5c0-2.2,1.3-4.2,3.3-5c1.9-0.8,4.1-0.4,5.6,1.1  L7.5,8.5C6.6,7.6,5.3,7.3,4.1,7.9C2.8,8.4,2,9.7,2,11.1c0,0.1,0,0.2,0,0.4c0.1,1,0.5,1.8,1.2,2.5c0.7,0.6,1.6,0.9,2.6,0.9l0.1,2  C5.8,16.7,5.7,16.8,5.6,16.8z">
                            </path>
                            <path
                                d="M18.1,16.7v-2c1.2,0,3.9-0.3,3.9-3.3c0-1.3-0.8-2-1.3-2.3c-0.9-0.6-2.1-0.7-3-0.4l-0.8-1.8c1.5-0.6,3.4-0.4,4.9,0.5  c1.4,0.9,2.2,2.4,2.2,4C24,14.7,21.7,16.7,18.1,16.7z">
                            </path>
                            <path
                                d="M18.1,7.4c-0.2-3.6-2.9-5.4-5.4-5.4c-2.3-0.1-5,1.3-5.4,5.2L5.2,7c0.5-4.9,4.1-7,7.5-7c3.5,0.1,7.1,2.6,7.4,7.3L18.1,7.4z">
                            </path>
                            <rect x="11" y="10" width="2" height="9"></rect>
                            <polygon points="15.3,14.1 12,10.8 8.7,14.1 7.3,12.6 12,7.9 16.7,12.6 "></polygon>
                        </g>
                    </svg>
                    حفظ
                </a>
            </div>
            <div class="export _disabled">
                <a href="javascript:;" id="download-btn">
                    <svg id="Groupe_4" data-name="Groupe 4" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        viewBox="0 0 20 20">
                        <path id="save_Path_26537"
                            d="M19.81,5.429,14.667.286A.823.823,0,0,0,14.1,0H1.619A1.669,1.669,0,0,0,0,1.619V18.381A1.669,1.669,0,0,0,1.619,20H18.381A1.669,1.669,0,0,0,20,18.381V5.9A.727.727,0,0,0,19.81,5.429Zm-8.667-3.9V4.571H5.81V1.524ZM5.81,18.476V11.524h8.476v6.952Zm12.667-.1h0l-2.667.1V11.524A1.5,1.5,0,0,0,14.286,10H5.81a1.5,1.5,0,0,0-1.524,1.524v6.952H1.619a.093.093,0,0,1-.1-.1V1.619a.093.093,0,0,1,.1-.1H4.286v3.81a.819.819,0,0,0,.762.762H12a.819.819,0,0,0,.762-.762h0V1.524H13.81l4.762,4.762Z"
                            transform="translate(0 0)" />
                    </svg>
                    استخراج
                </a>
            </div>
            <div class="publish _disabled">
                <a href="javascript:;" id="publish-modal-open" {{-- data-toggle="modal" data-target="#modal-publish" --}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23.9" height="17.412" viewBox="0 0 23.9 17.412">
                        <g transform="translate(-0.2 -3.288)">
                            <path
                                d="M5,18.6A4.885,4.885,0,0,1,.2,14.1v-.4A4.722,4.722,0,0,1,4.7,9,4.6,4.6,0,0,1,8,10.3L7,11.4a2.651,2.651,0,0,0-2.2-.8,3.185,3.185,0,0,0-3,3.2v.3a3.336,3.336,0,0,0,3.5,3.1H9.5v1.5H5.4A.756.756,0,0,0,5,18.6Z" />
                            <path
                                d="M19.3,13.4a2.475,2.475,0,0,0-.9-1.9,2.8,2.8,0,0,0-2.3-.3l-1.1.3.2-1.1a4.705,4.705,0,0,0-1.6-4.6,5.193,5.193,0,0,0-5.1-.6A4.847,4.847,0,0,0,5.4,9.6L3.9,9.4a6.568,6.568,0,0,1,4-5.6,6.756,6.756,0,0,1,6.6.8,6.267,6.267,0,0,1,2.3,5,3.4,3.4,0,0,1,2.5.7,3.99,3.99,0,0,1,1.5,3Z" />
                            <path
                                d="M12.9,20.7H11.6a2.923,2.923,0,0,1-3.2-2.9,2.792,2.792,0,0,1,.8-2,3.093,3.093,0,0,1,2.3-.9h1.3v1.5H11.5a1.9,1.9,0,0,0-1.3.5,1.222,1.222,0,0,0-.4.9c0,.6.4,1.4,1.7,1.4h1.3v1.5Z" />
                            <rect width="1.5" height="5.3" transform="translate(12.1 15.2)" />
                            <path
                                d="M18.7,20.7H17.4V19.2h1.3a2.226,2.226,0,0,0,1.3-.4,1.489,1.489,0,0,0,.4-.9c0-.7-.5-1.4-1.7-1.4H17.4V15h1.3a2.979,2.979,0,0,1,3.2,2.9,2.792,2.792,0,0,1-.8,2A3.579,3.579,0,0,1,18.7,20.7Z" />
                            <rect width="1.5" height="5.3" transform="translate(16.6 15.2)" />
                            <rect width="2.1" height="1.5" transform="translate(15.4 15.9)" />
                            <rect width="2.1" height="1.5" transform="translate(15.4 18.2)" />
                            <rect width="3.5" height="1.5" transform="translate(20.6 17)" />
                        </g>
                    </svg>
                    نشر
                </a>
            </div>
        </div>
    </div>
    <style>
        .main-domain {
            position: absolute;
            top: 60%;
            left: 10px;
        }

    </style>
    <div class="modal fade sections-modal" id="modal-publish" tabindex="-1" role="dialog"
        aria-labelledby="modal-publish" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width: 1020px !important">
            <div class="modal-content">
                <div class="modal-body" style="padding: 60px !important;">
                    <button type=" button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="row">
                        <div class="col-6 mx-auto">
                            <div class="alert alert-danger text-right" id="error-dialog" style="display: none;">
                            </div>
                            <label class="float-right">ادخل السابدومين</label>
                            <label class="float-right">ادخل السابدومين</label>
                            <div class="position-relative">
                                <span class="main-domain">.landino.ma</span>
                                <input type="text" class="text-right form-control" id="subdomaine-input"
                                    placeholder="المرجو ادخال السابدومين">
                            </div>
                            <button class="btn mt-4" id="publish-btn">
                                نشر
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade sections-modal" id="modal-confirmation" tabindex="-1" role="dialog"
        aria-labelledby="modal-publish" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width: 1020px ​!important">
            <div class="modal-content">
                <div class="modal-body" style="padding: 60px !important;">
                    <button type=" button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h1>
                        Are you sure to continue !!!!
                    </h1>
                    <button id="confirm">
                        Yes sure
                    </button>
                    <button id="cancel">
                        No, cancel
                    </button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">الصفحات</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="edit_page_info_wrapper" style='display:none;'>
                        <a href="javascript:;" class="close_edit_page">عودة</a>
                        <input data-field='name' type="text" name="page_name" placeholder="" />
                        <input data-field='title' type="text" name="title" placeholder="" />
                        <textarea data-field='description'>Meta Description</textarea>
                        <textarea data-field='keywords'>Meta Keywords</textarea>
                        <textarea data-field='analitics'>Included JavaScript (Google Analitics e.t.c.)</textarea>
                        <a href="javascript:;" class="edit_page_save_changes">حفظ المعلومات</a>
                    </div>
                    <ul class="pages_list"></ul>
                    <a href="javascript:;" class="add_new_page"> اضافة صفحة جديدة </a>
                </div>
            </div>
        </div>
    </div>



    <style id="builder-style"></style>
    <div class="supra-preloader">
        <div class="progress-bar-s">
            <div class="progress">
                <div class="load"></div>
            </div>
        </div>
        <div class="rights">
            <p>&copy; {{ date('Y') . ' ' . get_option('company_name') }}</p>
        </div>
    </div>
    <aside class="left supra black"></aside>
    <aside class="control-panel supra black">
        <div class="title d-flex justify-content-between align-items-center">
            <h3>{{ _lang('Sections') }}</h3>
            <i class="supra bookmark"></i>
        </div>
        <ul class="sections">
            @foreach ($data['groups'] as $key => $node)
                <li data-group="{{ $key }}">{{ $node['name'] }}</li>
            @endforeach
        </ul>
    </aside>
    <div id="modal-thumb" class="supra">
        <div class="title">{{ _lang('Page modals') }}</div>
        <div class="container-thumb"></div>
    </div>
    <div class="wrap-iframe d-flex justify-content-center align-items-center">
        <div class="wrap viewing-desctop">
            <label>
                <span class="width" contenteditable="true"></span> x <span class="height"
                    contenteditable="true"></span>
                <i class="rotate icon-blr-lg-mobile"></i>
            </label>

            <iframe id="main" src="{{ url('updateproject/builder') }}/{{ $data['id'] }}"></iframe>

        </div>
    </div>
    <div id="modal-container" class="supra"></div>
    <div id="modal-project-container" class="supra"></div>
    <div id="modal-form-container" class="supra font-style-supra"></div>
    <div id="csrf_field" class="csrf_field" style="display: none">{{ csrf_field() }}</div>

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

    <div class="modal fade" id="pageSettingsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">اعدادات الصفحة</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">

                    <div class="page_settings_fields">
                        <label for="">رابط جوجل شيت</label>
                        <input data-field='google_sheet' type="text" name="page_name" placeholder="رابط جوجل شيت" />

                        <a href="javascript:;" class="save_page_settings"> حفظ الإعدادات </a>

                    </div>



                </div>

            </div>
        </div>
    </div>

    <script>
        $('body .icon-blr-lg-mobile').click(function() {

            if ($(this).hasClass('landscape')) {
                $(this).removeClass('landscape');
            } else {
                $(this).addClass('landscape');
            }

        });
    </script>

    <script>
        var demoMode = @if (isset($demo) && $demo == true) true @else 'no' @endif;
        var ajaxbase = '{{ url('api/ajax',[], true) }}';
        var baseurl = '{{ url('/') }}';
        var basepath = "{{ base_path('public/backend/assets/builder') }}";
        var googleKey = '{{ get_option('google_map_key') }}';

        var project_id = "{{ $data['id'] }}"";
        var project_file = "{{ $data['projectfile'] }}";
        var project_file_name = '';
        var user_id = {{ auth()->user()->id }}
        var subdomain = "{{ optional($data['project'] )->subdomain }}"
        var edit_mode = true
        var _save = false
    </script>
    <script src="./../builder/js/options.js"></script>
    <script src="./../builder/js/download.js"></script>
    <script>
        let is_trial = 0
    </script>
    <script src="./../builder/js/builder.min.js"></script>



    <script>
        $(document).on('show.bs.modal', '#exampleModal', function() {

            $('.add_new_page').show();
            $('.edit_page_info_wrapper').hide();
            $('#exampleModal .pages_list').show();

            loadPages();
        });


        function removeActive() {
            $('.pages_list li').each(function() {
                $(this).removeClass('active');
            });
        }


        $(document).on('click', '.pages_list .page_name', function() {

            var id = $(this).attr('data-id');

            removeActive();
            $(this).closest('li').addClass('active');
            $('.project-pages ul li[data-id="' + id + '"]').click();

        });





        function loadPages() {
            var pages = $('aside.control-panel .project-pages .wrapper > ul li:not(:last-child)').clone();
            var pages_list = $('#exampleModal .modal-body ul');
            pages_list.html('');
            pages.each(function() {
                var page_name = $(this).find('span').text();
                var active = $(this).hasClass('active') ? 'active' : '';
                var data_id = $(this).attr('data-id');
                var page_name_span = '<span data-id="' + data_id + '"  class="page_name"> ' + page_name +
                    ' </span>';
                var delete_page = '<span data-id="' + data_id + '"  class="delete_page"> X </span>';
                var edit_page = '<span data-id="' + data_id + '"  class="edit_page"> edit </span>';
                var li = '<li data-id="' + data_id + '"  class="' + active + '">' + page_name_span + edit_page +
                    delete_page + '</li>'
                pages_list.append(li);
            });
        };




        $(document).on('click', '.edit_page_save_changes', function() {



            var editInfomodal = $('.supra #hide ');
            var page_name = editInfomodal.find('.modal-body .general .item:nth-child(1) input');
            var page_title = editInfomodal.find('.modal-body .general .item:nth-child(2) input');
            var Meta_Description = editInfomodal.find('.modal-body .seo .item:nth-child(1) textarea');
            var Meta_Keywords = editInfomodal.find('.modal-body .seo .item:nth-child(2) textarea');
            var google_analitics = editInfomodal.find('.modal-body .seo .item:nth-child(3) textarea');

            var landino_page_edit = $('.edit_page_info_wrapper');
            var name = landino_page_edit.find("[data-field='name']").val();
            var title = landino_page_edit.find("[data-field='title']").val();
            var description = landino_page_edit.find("[data-field='description']").val();
            var keywords = landino_page_edit.find("[data-field='keywords']").val();
            var analitics = landino_page_edit.find("[data-field='analitics']").val();

            page_name.val(name);
            page_title.val(title);
            Meta_Description.val(description);
            Meta_Keywords.val(keywords);
            google_analitics.val(analitics);


            editInfomodal.find('.modal-footer .supra-btn').click();

            $('#exampleModal .edit_page_info_wrapper').hide();
            $('#exampleModal .add_new_page').show();
            $('#exampleModal .pages_list').show();


        });



        $(document).on('click', '.edit_page', function() {

            var id = $(this).attr('data-id');
            $('.add_new_page').hide();
            $('.edit_page_info_wrapper').show();
            $('#exampleModal .pages_list').hide();
            $('.project-pages ul li[data-id="' + id + '"] .icon-blr-settings').click();


            var editInfomodal = $('.supra #hide ');
            var page_name = editInfomodal.find('.modal-body .general .item:nth-child(1) input');
            var page_title = editInfomodal.find('.modal-body .general .item:nth-child(2) input');
            var Meta_Description = editInfomodal.find('.modal-body .seo .item:nth-child(1) textarea');
            var Meta_Keywords = editInfomodal.find('.modal-body .seo .item:nth-child(2) textarea');
            var google_analitics = editInfomodal.find('.modal-body .seo .item:nth-child(3) textarea');


            var page_name_val = page_name.val();
            var page_title_val = page_title.val();
            var Meta_Description_val = Meta_Description.val();
            var Meta_Keywords_val = Meta_Keywords.val();
            var google_analitics_val = google_analitics.val();


            var landino_page_edit = $('.edit_page_info_wrapper');
            var name = landino_page_edit.find("[data-field='name']");
            var title = landino_page_edit.find("[data-field='title']");
            var description = landino_page_edit.find("[data-field='description']");
            var keywords = landino_page_edit.find("[data-field='keywords']");
            var analitics = landino_page_edit.find("[data-field='analitics']");


            name.val(page_name_val);
            title.val(page_title_val);
            description.val(Meta_Description_val);
            keywords.val(Meta_Keywords_val);
            analitics.val(google_analitics_val);

        });








        $(document).on('click', '.delete_page', function() {
            var id = $(this).attr('data-id');
            $('#exampleModal .project-pages ul li[data-id="' + id + '"] .icon-blr-trash').click();
            $(this).closest('li').remove();
        });




        $(document).on('click', '.close_edit_page', function() {
            $('#exampleModal .edit_page_info_wrapper').hide();
            $('#exampleModal .add_new_page').show();
            $('#exampleModal .pages_list').show();
        });





        $(document).on('click', '.add_new_page', function() {

            $('body .icon-blr-add-page').click();

            loadPages();

        });

        $(document).on('click', '.save_page_settings', function() {
            const link = $('[data-field="google_sheet"]').val()

            const google_sheet_id = link.replace("https://docs.google.com/spreadsheets/d/", "").split("/")[0]

            const firstPart = Math.floor(google_sheet_id.length / 2)
            const secondPart = google_sheet_id.length - firstPart

            const __form = $($('iframe')[0].contentWindow.document.querySelector('form'))

            __form.attr('cbr', btoa(google_sheet_id.substr(0, firstPart)))
            __form.attr('tbs', btoa(google_sheet_id.substr(secondPart, google_sheet_id.length)))
            $('#pageSettingsModal').modal('hide')
        })
    </script>

</body>

</html>
