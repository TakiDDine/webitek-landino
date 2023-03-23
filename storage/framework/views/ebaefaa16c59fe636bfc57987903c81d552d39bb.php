<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>" direction="rtl" dir="rtl" style="direction: rtl">
<!-- begin::Head -->

<head>
    <!--begin::Base Path (base relative path for assets of this page) -->
    <base href="<?php echo e(asset('backend/assets/admin')); ?>">
    <!--end::Base Path -->
    <meta charset="utf-8" />
    <title><?php echo e(get_option('site_title', 'لندينو')); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <!-- App favicon -->
    <link rel="shortcut icon" href="<?php echo e(get_favicon()); ?>">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="keywords" content="" />
    <meta name="description" content="">
    <meta name="author" content="" />

    <!--begin::Fonts -->
    <link href="//fonts.googleapis.com/css?family=Nunito|Roboto" rel="stylesheet">
    <!--end::Fonts -->

    <!-- App Css -->
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/css/bootstrap.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/css/fontawesome.min.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/css/themify-icons.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/css/metisMenu.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/css/slicknav.min.css')); ?>">

    <!-- Others css -->
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/css/styles.css?v=1.2')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/css/responsive.css?v=1.2')); ?>">


    <!--begin::Global Theme Styles(used by all pages) -->
    <link href="<?php echo e(asset('backend/assets/admin/vendors/global/vendors.bundle.css')); ?>" rel="stylesheet" type="text/css" />
    <link href="<?php echo e(asset('backend/plugins/dropify/css/dropify.min.css')); ?>" rel="stylesheet">
    <link href="<?php echo e(asset('backend/plugins/sweet-alert2/sweetalert2.min.css')); ?>" rel="stylesheet"
        type="text/css">


    <link href="/public/backend/assets/admin/css/demo1/style.bundle.rtl.css" rel="stylesheet" type="text/css" />
    
    
    <link href="//fonts.googleapis.com/css?family=Cairo:300,400,600,700" rel="stylesheet">


    <!--begin::Layout Skins(used by all pages) -->
    <link href="./admin/css/demo1/skins/header/base/light.rtl.css" rel="stylesheet" type="text/css" />
    <link href="./admin/css/demo1/skins/header/menu/light.rtl.css" rel="stylesheet" type="text/css" />
    <link href="./admin/css/demo1/skins/brand/light.rtl.css" rel="stylesheet" type="text/css" />
    <link href="./admin/css/demo1/skins/aside/light.rtl.css" rel="stylesheet" type="text/css" />
    <!--end::Layout Skins -->
    <?php if(_lang('SYSDIRECTIONDIR') == 'asdasd'): ?>

        <link href="./admin/css/demo1/style.bundle.css" rel="stylesheet" type="text/css" />
        <link href="./admin/vendors/custom/notifications/css/ns-default.css" rel="stylesheet" type="text/css" />
        <link href="./admin/vendors/custom/notifications/css/ns-style-other.css" rel="stylesheet" type="text/css" />

        <!--begin::Layout Skins(used by all pages) -->
        <link href="./admin/css/demo1/skins/header/base/light.css" rel="stylesheet" type="text/css" />
        <link href="./admin/css/demo1/skins/header/menu/light.css" rel="stylesheet" type="text/css" />
        <link href="./admin/css/demo1/skins/brand/light.css" rel="stylesheet" type="text/css" />
        <link href="./admin/css/demo1/skins/aside/light.css" rel="stylesheet" type="text/css" />
        <!--end::Layout Skins -->
    <?php endif; ?>
    <!--end::Global Theme Styles -->

    <!--begin::Layout Skins(used by all pages) -->
    <!--end::Layout Skins -->
    <link rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/ajax-bootstrap-select/1.3.8/css/ajax-bootstrap-select.min.css'>\

    <link rel="stylesheet" href="<?php echo e(asset('assets/css/font.css')); ?>">

    <?php echo $__env->make('layouts.others.languages', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

    <script>
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name=csrf-token]').attr('content')
            }
        })
    </script>


    <style>
        /* width */
        ::-webkit-scrollbar {
            width: 10px;
            height: 16px;
        }

        ::-webkit-scrollbar:hover {
            width: 14px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 100vh;
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

        .alert {
            font-size: 15px;
        }

        .custom-table,
        table {
            font-size: 18px;
        }

        .alert-dismissible .close {
            left: 0;
            position: absolute;
            top: 0;
            right: auto;
            padding: 0.75rem 1.25rem;
            color: inherit;
        }

        body {
            font-family: "Vazir", sans-serif !important;
        }

        .btn--blue:hover {
            background-color: #1973e7;
            color: #fff !important;
        }

        .btn--blue {
            background-color: #3081E9;
            color: #fff !important;
            border-color: #3081E9;
        }

        .kt-aside-menu .kt-menu__nav {
            position: relative !important;
        }

        .upgrade-link {
            position: absolute !important;
            bottom: 0;
            left: 0;
            right: 0;
        }

        .templates-filter {
            box-shadow: rgb(204 211 219 / 15%) 0px 0.3125rem 0.4375rem;
            border-radius: 4px;
        }

        .kt-aside-menu .kt-menu__nav .kt-menu__item {
            flex-grow: 0;
        }

        .kt-menu__item--here a {
            background-color: #f5f7fa;
            color: #2070d9;
            padding: 20px 40px !important;
        }

        .kt-menu__item--here a {
            background: #f5f7fa !important;
        }

        .kt-menu__item--rel a {
            padding: 8px 40px !important;
        }

        div#kt_header {
            display: none;
        }

        .kt-header--fixed.kt-subheader--fixed.kt-subheader--enabled .kt-wrapper {
            padding-top: 10px;
        }

        .kt-menu__link-icon {
            position: relative;
            width: 50px !important;
            height: 50px;
            color: #404040;
            transition: color .2s ease-in-out, background-color .2s ease-in-out;
            display: inline-block;
            flex: initial !important;
            margin-left: 15px;
            border-radius: 50%;
            text-align: center !important;
            color: #404040;
        }

        .kt-menu__item--here .kt-menu__link-icon {
            box-shadow: 0 0.3125rem 0.625rem rgb(48 129 233 / 25%);
            position: relative;
            width: 50px !important;
            height: 50px;
            color: #404040;
            transition: color .2s ease-in-out, background-color .2s ease-in-out;
            display: inline-block;
            flex: initial !important;
            margin-left: 15px;
            border-radius: 50%;
            background-color: #3081e9;
            box-shadow: 0 0.3125rem 0.625rem rgb(48 129 233 / 25%);
            text-align: center !important;
            color: #404040;
        }

        span.kt-menu__link-icon img {
            display: inline-block !important;
            margin: 0 auto;
        }



        .kt-menu__item--here span.kt-menu__link-icon img {
            filter: brightness(0) invert(1);
        }

        a.kt-menu__link {
            color: #404040 !important;
        }

        .preview-use-template {
            position: absolute;
            bottom: 0;
            height: 58px;
            opacity: 0;
            transition: all .2s ease-out;
        }

        .tempates-preview-wrapper {
            overflow: hidden !important;
            background: red;
            position: relative;
        }

        .preview-use-template .col-6 {
            margin: 0 !important;
        }

        .preview-use-template .col-6:first-child {
            border-left: 1px solid #0000001a;
        }

        .preview-use-template .col-6 a {
            height: 58px;
            line-height: 58px;
            padding: 0;
        }


        .preview-use-template:before {
            content: "";
            display: block;
            width: 100%;
            height: 2rem;
            opacity: .08;
            background: linear-gradient(transparent, #000);
            position: absolute;
            bottom: 58px;
            opacity: 0;
        }


        .tempates-preview-wrapper:hover>.preview-use-template {
            opacity: 1;
        }

        .tempates-preview-wrapper:hover>.preview-use-template:before {
            opacity: .08;
        }





        .tempates-preview-wrapper:before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            /* background: #00000061; */
        }





        .kt-menu__item--here::before {
            content: "dddddd";
            position: absolute;
            left: 0;
            height: 100%;
            width: 5px;
            background: #3081e9;
            z-index: 999999999;
            content: "";
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }


        .add-project-btn {
            background: #3081e9;
            color: white;
            padding: 13px 30px;
        }

        a.btn.add-project-btn img {
            margin-left: 10px;
            filter: brightness(0) invert(1);
        }

        div#kt_footer {
            display: none;
        }

        .alert.trial-warning {
            background: white;
            border: 1px solid #3081e9;
            display: block !important;
            overflow: hidden;
        }


        .alert.trial-warning a {
            float: left;
            background: #3081e9;
            border-color: #3081e9;
        }

        .alert.trial-warning b {
            font-size: 16px;
            margin-top: 5px !important;
            display: inline-block;
            font-family: "Vazir" !important;
            letter-spacing: 0 !important;
        }

        .alert.alert-warning {
            background: white;
            border: 1px solid #3081e9;
        }

        a.btn.btn-danger.btn-xs {
            float: left;
        }

        .upgrade-link {
            border-color: #1973e7 !important;
        }

        .upgrade-link a {
            padding: 20px 19px !important;
        }

        .upgrade-link span {
            color: #1973e7 !important;
            text-align: center !important;
            display: block !important;
            font-size: 15px !important;
        }

        .create-new img {
            filter: brightness(0) invert(1);
        }

        .create-new .kt-menu__link-icon {
            background: #3081e9 !important;
        }

        .create-new a .kt-menu__link-text {
            color: #3081e9 !important;
        }

        .filter-item label {
            float: left !important;
            margin-right: 10px !important;
        }

        .filter-item input {
            top: 4px;
            position: relative;
        }

        .template-template {
            box-shadow: 0 0.1875rem 0.9375rem rgb(81 93 107 / 7%);
            border-radius: 7px !important;
            margin: 6px;
            margin-bottom: 12px;
        }

        .templates-filter {
            margin-bottom: 30px !important;
        }

        .main-starter-modal .modal-body-sections h3 {
            color: #515d6b;
            font-size: 21px;
            margin: 0;
            margin-right: 5px;
            margin-bottom: 19px;
            font-weight: 100 !important;
        }

        .main-starter-modal .modal-body-sidbar h2 {
            font-weight: 500 !important;
            color: #515d6b;
        }

        .main-starter-modal.modal-body-sidbar h2 {
            font-weight: 500 !important;
            color: #515d6b;
        }

        .main-starter-modal .categor-selector {
            margin-bottom: 10px;
            padding: 12px 19px !important;
        }

        .main-starter-modal .modal-body-sidbar h2 {
            margin-bottom: 70px;
        }

        .categor-selector.active {
            color: #2070D9 !important;
            font-weight: 500;
            background-color: #F5F7FA !important;
            border-left: 4px solid #2070D9;
        }

        .categor-selector.active label {
            color: #2070D9 !important;
        }




        .main-starter-modal .starter-template img {
            max-width: 69px !important;
        }

        .main-starter-modal .starter-template .tempates-preview-wrapper {
            height: 100% !important;
            min-height: 134px;
            max-height: 227px;
            text-align: center;
            width: 100% !important;
            line-height: 200px;
            display: block;
            background: #ffffff !important;
            box-shadow: 0 0.1875rem 0.9375rem rgb(81 93 107 / 7%) !important;
        }

        .main-starter-modal .starter-template .tempates-preview-wrapper:before {
            display: none;
        }

        .main-starter-modal .modal-body {
            background: #f5f7fa !important;
            padding-right: 0 !important;
            padding-top: 0 !important;
            padding-bottom: 0 !important;
            border: 0 !important;
        }

        .landino-llogo {
            height: 207px !important;
            display: block;
            width: 100% !important;
            padding-top: 20px;
        }

        .landino-llogo img {
            max-width: 100%;
            height: 88px;
        }

        div#kt_aside_brand {
            height: 123px !important;
            display: block;
            text-align: center;
        }

        .landino-llogo p {
            font-size: 21px;
        }

        .landino-llogo img {
            width: 55px !important;
        }

        .landino-llogo span {
            font-size: 30px;
            font-weight: 500;
            top: 11px;
            position: relative;
            right: 9px;
            color: #2055ab;
        }

        .kt-aside-menu .kt-menu__nav>.kt-menu__item.kt-menu__item--here>.kt-menu__link .kt-menu__link-icon img {
            filter: invert(55%) sepia(50%) saturate(7028%) hue-rotate(217deg) brightness(104%) contrast(101%);


        }

        .kt-aside-menu .kt-menu__nav>.kt-menu__item.kt-menu__item--here>.kt-menu__link .kt-menu__link-icon {
            background: transparent !important;
            box-shadow: none;
        }

    </style>


</head>

<body
    class="kt-quick-panel--right kt-demo-panel--right kt-offcanvas-panel--right kt-header--fixed kt-header-mobile--fixed kt-subheader--enabled kt-subheader--fixed kt-subheader--solid kt-aside--enabled kt-aside--fixed">

    <?php $user = Auth::user(); ?>


    <?php if($user->company->membership_type == 'trial' && membership_validity() > date('Y-m-d')): ?>

        <style>
            a.upgrade_link {
                background: #ffffff;
                position: absolute;
                z-index: 9999999999;
                right: 16px;
                bottom: 23px;
                width: 230px;
                padding: 18px 37px;
                text-align: center;
                border-radius: 2px;
                border: 1px solid #3081e9;
                color: #3081e9;
                font-size: 17px;
            }

            a.upgrade_link:hover {
                background: #3081e9;
                color: #ffffff;

            }

        </style>
        <a href="<?php echo e(url('membership/extend')); ?>" class="upgrade_link">
            <?php echo e(_lang('Upgrade Now')); ?>

        </a>
    <?php endif; ?>





    <div id="kt_header_mobile" class="kt-header-mobile  kt-header-mobile--fixed ">
        <div class="kt-header-mobile__toolbar">
            <button class="kt-header-mobile__toggler kt-header-mobile__toggler--left"
                id="kt_aside_mobile_toggler"><span></span></button>
        </div>
    </div>



    <div class="kt-grid kt-grid--hor kt-grid--root">
        <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver kt-page">


            <button class="kt-aside-close " id="kt_aside_close_btn"><i class="la la-close"></i></button>

            <div class="kt-aside  kt-aside--fixed  kt-grid__item kt-grid kt-grid--desktop kt-grid--hor-desktop"
                id="kt_aside">


                <div class="kt-aside__brand kt-grid__item " id="kt_aside_brand">
                    <div class="kt-aside__brand-tools">


                        <a href="/dashboard" class="landino-llogo">
                            <img src="/public/front/logo.svg" alt="">
                            <span> لندينو </span>

                        </a>

                    </div>
                </div>
                <!-- end:: Aside -->
                <!-- begin:: Aside Menu -->
                <div class="kt-aside-menu-wrapper kt-grid__item kt-grid__item--fluid" id="kt_aside_menu_wrapper">
                    <div id="kt_aside_menu" class="kt-aside-menu " data-ktmenu-vertical="1" data-ktmenu-scroll="1"
                        data-ktmenu-dropdown-timeout="500">
                        <ul class="kt-menu__nav d-flex flex-column h-100">
                            <?php echo $__env->make('layouts.menus.'.Auth::user()->user_type, \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                        </ul>
                    </div>
                </div>
                <!-- end:: Aside Menu -->
            </div>
            <!-- end:: Aside -->


            <!--REMORE-->
            <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor kt-wrapper" id="kt_wrapper">
                <!-- begin:: Header -->
                <div id="kt_header" class="kt-header kt-grid__item  kt-header--fixed ">
                    <!-- begin:: Header Menu -->
                    <button class="kt-header-menu-wrapper-close" id="kt_header_menu_mobile_close_btn"><i
                            class="la la-close"></i></button>
                    <!-- end:: Header Menu -->
                </div>
                <!-- end:: Header -->
                <div class="kt-content  kt-grid__item kt-grid__item--fluid kt-grid kt-grid--hor" id="kt_content">
                    <!-- begin:: Content -->
                    <div class="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">

                        <!-- Trial and Membership Alert -->
                        <?php $user = Auth::user(); ?>

                        <?php if(has_membership_system() == 'enabled' && $user->user_type == 'user'): ?>

                            <?php if(membership_validity() < date('Y-m-d')): ?>
                                <div class="alert alert-danger" role="alert">
                                    <b
                                        class="float-left pt-2"><?php echo e(_lang('Please_make_your_membership_payment')); ?></b>
                                    <a href="<?php echo e(url('membership/extend')); ?>"
                                        class="btn btn-primary btn-xs float-right"><b><?php echo e(_lang('Pay Now')); ?></b></a>
                                    <div class="clearfix"></div>
                                </div>
                            <?php endif; ?>
                            

                        <?php endif; ?>
                        <!-- End Trial and Membership Alert -->

                        <div class="alert alert-success alert-dismissible" id="main_alert" role="alert">
                            <button type="button" id="close_alert" class="close">
                                <span aria-hidden="true"><i class="far fa-times-circle"></i></span>
                            </button>
                            <span class="msg"></span>
                        </div>

                        <?php echo $__env->yieldContent('content'); ?>

                    </div>
                    <!-- end:: Content -->
                </div>

                <!-- begin:: Footer -->
                <div class="kt-footer  kt-grid__item kt-grid kt-grid--desktop kt-grid--ver-desktop" id="kt_footer">
                    <div class="kt-container  kt-container--fluid ">
                        <div class="kt-footer__copyright">
                            &copy; <?php echo e(date('Y') . ' ' . get_option('company_name')); ?>

                        </div>
                    </div>
                </div>
                <!-- end:: Footer -->
            </div>
        </div>
    </div>
    <!-- end:: Page -->


    <!-- begin::Scrolltop -->
    <div id="kt_scrolltop" class="kt-scrolltop">
        <i class="fa fa-arrow-up"></i>
    </div>
    <!-- end::Scrolltop -->

    <!-- Main Modal -->
    <div id="main_modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header bg-primary">
                    <h5 class="modal-title mt-0 text-white"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="alert alert-danger d-none m-3"></div>
                <div class="alert alert-secondary d-none m-3"></div>
                <div class="modal-body overflow-hidden"></div>

            </div>
        </div>
    </div>

    <!-- Secondary Modal -->
    <div id="secondary_modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-header bg-dark">
                    <h5 class="modal-title mt-0 text-white"></h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>

                <div class="alert alert-danger d-none m-3"></div>
                <div class="alert alert-secondary d-none m-3"></div>
                <div class="modal-body overflow-hidden"></div>
            </div>
        </div>
    </div>

    <!-- Preloader area start -->
    <div id="preloader"></div>
    <!-- Preloader area end -->






    <!-- begin::Global Config(global config for global JS sciprts) -->
    <script>
        var KTAppOptions = {
            "colors": {
                "state": {
                    "brand": "#5d78ff",
                    "light": "#ffffff",
                    "dark": "#282a3c",
                    "primary": "#5867dd",
                    "success": "#34bfa3",
                    "info": "#36a3f7",
                    "warning": "#ffb822",
                    "danger": "#fd3995"
                },
                "base": {
                    "label": [
                        "#c5cbe3",
                        "#a1a8c3",
                        "#3d4465",
                        "#3e4466"
                    ],
                    "shape": [
                        "#f0f3ff",
                        "#d9dffa",
                        "#afb4d4",
                        "#646c9a"
                    ]
                }
            },
            "text": {
                'loading': '<?php echo e(_lang('Loading ...')); ?>'
            },
        };
    </script>
    <!-- end::Global Config -->

    <!--begin::Global Theme Bundle(used by all pages) -->
    <script src="./admin/vendors/custom/notifications/js/modernizr.custom.js" type="text/javascript"></script>
    <script src="./admin/vendors/custom/notifications/js/classie.js" type="text/javascript"></script>
    <script src="./admin/vendors/custom/notifications/js/notificationFx.js" type="text/javascript"></script>
    <script src="./admin/vendors/global/vendors.bundle.js" type="text/javascript"></script>
    <script src="./admin/js/demo1/scripts.bundle.js" type="text/javascript"></script>
    <!--end::Global Theme Bundle -->


    <!-- jQuery  -->
    <script src="<?php echo e(asset('backend/assets/js/vendor/jquery-2.2.4.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/js/popper.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/js/bootstrap.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/js/metisMenu.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/js/jquery.slimscroll.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/js/jquery.slicknav.min.js')); ?>"></script>

    <script src="<?php echo e(asset('backend/assets/js/print.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/js/pace.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/js/clipboard.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/moment/moment.js')); ?>"></script>

    <!-- Required datatable js -->
    <script src="<?php echo e(asset('backend/plugins/datatables/jquery.dataTables.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/dataTables.bootstrap4.min.js')); ?>"></script>
    <!-- datatable Buttons -->
    <script src="<?php echo e(asset('backend/plugins/datatables/dataTables.buttons.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/buttons.bootstrap4.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/jszip.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/pdfmake.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/vfs_fonts.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/buttons.html5.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/buttons.print.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/buttons.colVis.min.js')); ?>"></script>
    <!-- Responsive datatable -->
    <script src="<?php echo e(asset('backend/plugins/datatables/dataTables.responsive.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/datatables/responsive.bootstrap4.min.js')); ?>"></script>

    <script src="<?php echo e(asset('backend/plugins/dropify/js/dropify.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/sweet-alert2/sweetalert2.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/select2/select2.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/daterangepicker/daterangepicker.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/tinymce/tinymce.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/parsleyjs/parsley.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/plugins/jquery-toast-plugin/jquery.toast.min.js')); ?>"></script>


    <!-- App js -->
    <script src="<?php echo e(asset('backend/assets/js/scripts.js?v=1.7')); ?>"></script>

    <script type="text/javascript">
        (function($) {

            "use strict";

            $(document).on('click', 'a[href="#"]', function(e) {
                e.preventDefault();
            })
            <?php if(Request::is('dashboard')): ?>
                $(".page-title").html("<?php echo e(_lang('Dashboard')); ?>");
            <?php else: ?>
                $(".page-title").html($(".title").html());
                $(".page-title").html($(".panel-title").html());
            <?php endif; ?>


            //Show Success Message
            <?php if(Session::has('success')): ?>
                $("#main_alert > span.msg").html(" <?php echo e(session('success')); ?> ");
                $("#main_alert").addClass("alert-success").removeClass("alert-danger");
                $("#main_alert").css('display','block');
            <?php endif; ?>

            //Show Single Error Message
            <?php if(Session::has('error')): ?>
                $("#main_alert > span.msg").html(" <?php echo e(session('error')); ?> ");
                $("#main_alert").addClass("alert-danger").removeClass("alert-success");
                $("#main_alert").css('display','block');
            <?php endif; ?>


            <?php $i =0; ?>

            <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if($loop->first): ?>
                    $("#main_alert > span.msg").html("<i class='typcn typcn-delete'></i> <?php echo e($error); ?> ");
                    $("#main_alert").addClass("alert-danger").removeClass("alert-success");
                <?php else: ?>
                    $("#main_alert > span.msg").append("<br><i class='typcn typcn-delete'></i> <?php echo e($error); ?> ");
                <?php endif; ?>
            
                <?php if($loop->last): ?>
                    $("#main_alert").css('display','block');
                <?php endif; ?>
            
                <?php if(isset($errors->keys()[$i])): ?>
                    var name = "<?php echo e($errors->keys()[$i]); ?>";
            
                    $("input[name='" + name + "']").addClass('error is-invalid');
                    $("select[name='" + name + "'] + span").addClass('error is-invalid');
            
                    $("input[name='"+name+"'], select[name='"+name+"']").parent().append("<span
                        class='v-error'><?php echo e($error); ?></span>");
                <?php endif; ?>
                <?php $i++; ?>
            
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

        })(jQuery);
    </script>



    <!-- Custom JS -->
    <?php echo $__env->yieldContent('js-script'); ?>


    <?php
        
        $templates = getTemplates();
        
    ?>

    <style>
        .modal-dialog {
            max-width: 1600px;
        }

        .modal-dialog {
            min-height: calc(100vh - 60px);
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: auto;
        }

        @media(max-width: 768px) {
            .modal-dialog {
                min-height: calc(100vh - 20px);
            }
        }

        .modal-body {
            background: #F5F7FA;
            padding: 0;
        }

        .modal-body-sections ul li {
            width: 33.33%;
            float: right;
        }

        .modal-body-sections ul li a {
            width: 100%;
        }

        .modal-body-sidbar {
            float: right;
            overflow: hidden;
            width: 270px;
            background: white;
            padding: 10px;
            min-height: 84vh !important;
            display: inline-block;
            box-shadow: -0.3125rem 0 0.4375rem rgb(32 112 217 / 5%);

        }

        .modal-body-sections {
            width: calc(100% - 270px) !important;
            float: right;
            height: 84vh !important;
            overflow: hidden;
            padding-left: 45px;
        }

        .modal-body-sections li a {

            overflow: hidden;
            float: right;
            position: relative;
            overflow: hidden;
            background-color: #fff;
            border-radius: .375rem;
            box-shadow: 0 0.1875rem 0.9375rem rgb(81 93 107 / 7%);
        }

        .modal-body-sections ul {
            list-style: none;
        }



        .modal-body-sidbar li a {
            display: block;
            padding: 10px 21px;
            color: #515D6B;
            font-size: 18px;
        }

        .modal-body-sidbar ul {
            list-style: none;
            margin: 0;
            padding: 0;
            margin-top: 45px;
        }

        .modal-body-sidbar h2 {
            font-size: 18px;
            letter-spacing: 0;
            padding-right: 10px;
            font-size: 16px;
            margin-top: 30px;
        }



        .modal-body-sections ul li {
            padding: 14px;
        }


        .modal-body-sections h3 {
            font-size: 16px;
            margin-right: 50px;
        }

        button.close.close-modal {
            left: 30px !important;
            position: absolute;
            top: 19px;
            font-size: 23px;
            color: #848688;
        }

        .modal-body {
            position: relative;
        }

        .modal-body-sections {
            padding-top: 40px;
        }

    </style>






    <div class="modal fade sections-modal main-starter-modal" id="modal-templates" tabindex="-1" role="dialog"
        aria-labelledby="modal-templates" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <button type="button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div class="modal-body-sidbar">
                        <h2>اختر نوع الأقسام</h2>
                        <div>
                            <div class="flex align-items-center p-2 rounded categor-selector active all">
                                <input type="checkbox" data-categoty-name="all" id="all-modal"
                                    class="d-none input-toggle-filter-modal">
                                <label for="all-modal" style="cursor: pointer;" class="font-16 m-0 mr-1">الكل</label>
                            </div>
                            <div class="flex align-items-center p-2 rounded categor-selector courses">
                                <input type="checkbox" data-categoty-name="courses" id="courses-modal"
                                    class="d-none input-toggle-filter-modal">
                                <label for="courses-modal" style="cursor: pointer;"
                                    class="font-16 m-0 mr-1">دورات</label>
                            </div>
                            <div class="flex align-items-center p-2 rounded categor-selector products">
                                <input type="checkbox" data-categoty-name="products" id="products-modal"
                                    class="d-none input-toggle-filter-modal">
                                <label for="products-modal" style="cursor: pointer;"
                                    class="font-16 m-0 mr-1">منتجات</label>
                            </div>
                            <div class="flex align-items-center p-2 rounded categor-selector tourism">
                                <input type="checkbox" data-categoty-name="tourism" id="tourism-modal"
                                    class="d-none input-toggle-filter-modal">
                                <label for="tourism-modal" style="cursor: pointer;"
                                    class="font-16 m-0 mr-1">سياحة</label>
                            </div>
                            <div class="flex align-items-center p-2 rounded categor-selector personal">
                                <input type="checkbox" data-categoty-name="personal" id="personal-modal"
                                    class="d-none input-toggle-filter-modal">
                                <label for="personal-modal" style="cursor: pointer;"
                                    class="font-16 m-0 mr-1">شخصي</label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-body-sections px-4">
                        <h3>
                            اختر قالبًا للبدء
                        </h3>
                        <style>
                            .starter-template:hover {
                                cursor: pointer;
                            }
                            .starter-template div {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                flex-direction: column;
                                height: 100%;
                            }

                            .starter-template div p{
                                margin-top: 25px;
                                margin-bottom: 0;
                            }
                        </style>
                        <div class="row"
                            style="overflow-y: scroll; max-height: 100%;direction: ltr;padding-bottom: 46px;">
                            <a href="<?php echo e(url('/projects/create')); ?>"
                                class="col-md-4 overflow-hidden mb-3 starter-template">
                                <div class=" bg-white rounded">
                                    <img src="https://app.landik.ir/99615dbdd6b8334a46660f7872c2f8e2.svg"
                                        class="rounded-top rounded-lg mw-100">
                                    <p> صفحة فارغة</p>
                                </div>
                            </a>

                            <?php $__currentLoopData = $templates; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $template): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <div class="col-md-4 overflow-hidden mb-3"
                                    data-category-modal="<?php echo e($template['category'] ?? null); ?>">
                                    <div
                                        class="bg-white rounded tempates-preview-wrapper template-<?php echo e(str_replace('-', ' ', $template['name'])); ?>">
                                        <img src="<?php echo e($template['cover']); ?>" class="rounded-top rounded-lg mw-100">
                                        <div class="row bg-white w-full w-100 m-0 preview-use-template">
                                            <div class="col-6">
                                                <a href="<?php echo e(route('template.preview', ['template_name' => $template['name']])); ?>"
                                                    target="_blank"
                                                    class="rounded-lg btn w-100 "><?php echo e(_lang('Preview')); ?></a>
                                            </div>
                                            <div class="col-6">
                                                <a href="<?php echo e(url('/editor?template=' . $template['name'])); ?>"
                                                    target="_blank"
                                                    class="rounded-lg btn w-100 "><?php echo e(_lang('use template')); ?></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        $('[data-categoty-name]').on('change', function() {
            //uncheck all the previous inputs
            $('[data-categoty-name]').prop('checked', false)

            $(this).prop('checked', true)

            $('[data-categoty-name]:checked').parents('.categor-selector').addClass('active')
            $('[data-categoty-name]:not(:checked)').parents('.categor-selector').removeClass('active')

            if ($(this).data("categoty-name") === 'all') {
                $('.starter-template').removeClass('d-none')
                $(`[data-category-modal]`).removeClass('d-none')
            } else {
                $('.starter-template').addClass('d-none')
                $(`[data-category-modal]`).addClass('d-none')

                $(`[data-category-modal=${$(this).data("categoty-name")}]`).removeClass('d-none')
            }
        })
    </script>

</body>

</html>
<?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.art/resources/views/layouts/app.blade.php ENDPATH**/ ?>