<!DOCTYPE html>
<html lang="<?php echo e(app()->getLocale()); ?>"
    <?php if(_lang('SYSDIRECTIONDIR') == 'rtl'): ?> direction="rtl" dir="rtl" style="direction: rtl" <?php endif; ?>>

<!-- begin::Head -->

<head>
    <!--begin::Base Path (base relative path for assets of this page) -->
    <base href="<?php echo e(asset('/backend/assets/builder/builder')); ?>">
    <!--end::Base Path -->
    <meta charset="utf-8" />
    <title><?php echo e(get_option('site_title', 'Spotlayer Framework')); ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <meta name="author" content="" />

    <!-- App favicon -->
    <link rel="icon" href="<?php echo e(get_favicon()); ?>">

    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/builder/css/lib/bootstrap.min.css')); ?>" />
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/builder/css/lib/fx.css')); ?>" />
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/builder/css/lib/spectrum.css')); ?>" />
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/builder/css/lib/codemirror.css')); ?>" />
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/builder/css/fonts.css')); ?>" />
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/builder/css/main.css')); ?>" />
    <link rel="stylesheet" href="<?php echo e(asset('backend/assets/builder/css/preloader.css')); ?>" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

<body class="first-show">
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/jquery-2.1.4.min.js')); ?>"></script>
    <style id="builder-style"></style>
    <div id="main_body" style="display: none;">
        <div class="supra-preloader">
            
            <div class="progress-bar-s">
                <div class="progress">
                    <div class="load"></div>
                </div>
            </div>
            <div class="rights">
                <p>&copy; <?php echo e(date('Y') . ' ' . get_option('company_name')); ?></p>
            </div>
        </div>
        <aside class="left supra black"></aside>
        <aside class="control-panel supra black">
            <div class="title d-flex justify-content-between align-items-center">
                <h3><?php echo e(_lang('Sections')); ?></h3>
                <i class="supra bookmark"></i>
            </div>
            <ul class="sections">
                <?php $__currentLoopData = $groups; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $node): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <li data-group="<?php echo e($key); ?>"><?php echo e($node['name']); ?></li>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </ul>
        </aside>
        <div id="modal-thumb" class="supra">
            <div class="title"><?php echo e(_lang('Page modals')); ?></div>
            <div class="container-thumb"></div>
        </div>


        <div class="wrap-iframe d-flex flex-column justify-content-center align">
            <div class="iframeHeader">
                <div class="iframeHeader__left">
                    <ul id="sidebarTriggerers">
                        <li id="sections-sidebar__Triggerer">
                            <button type="button" id="sidebarTriggerer" class="btn btn-primary" role="button"
                                data-toggle="modal" data-target="#elementsSidebar" data-collapsed="true"><i
                                    class="fa fa-plus-circle"></i></button>
                        </li>
                        <li id="edit-section__Triggerer">
                        </li>
                        <li id="global-styles__Triggerer">
                        </li>
                    </ul>
                </div>
                <div class="iframeHeader__right">
                    <div id="backToDashboard"></div>
                    <div id="previewTemplate">
                    </div>
                    <div id="allExportsBtn">

                    </div>

                </div>
            </div>
            
            <div class="wrap viewing-desctop">
                <div class="modes-wraper">
                    <div id="iframeViewPort">
                        <ul id="iframeViewPort__list-container"></ul>
                    </div>
                    <div id="iframePageControl">
                        <a class="iframePageControl__pages-titles" data-toggle="dropdown">
                            <span id="pages_name" class="iframePageControl__pagesName">index.html</span>
                            <i class="fa fa-chevron-down"></i>
                        </a>
                        <div class="dropdown-menu" id="dropdown-menu-drop"></div>
                    </div>

                    <div id="iframeUndoRedo">
                        <ul id="iframeUndoRedo__list-container"></ul>
                    </div>
                </div>
                <label>
                    <div>
                        <span class="width" contenteditable="true"></span> x <span class="height"
                            contenteditable="true"></span>
                        <i class="rotate icon-blr-lg-mobile"></i>
                    </div>
                </label>
                <iframe id="main" src="<?php echo e(url('project/larabuilder')); ?>"></iframe>
            </div>
        </div>

        <div class="modal fade" id="elementsSidebar" tabindex="-1" role="dialog" aria-labelledby="elementsSidebar"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="sidebarContainer">
                        <div id="sidebar_contentHeader" class="myDiv">
                            <div class="sidebar-header">
                                
                                <h6>UI LIBRARY</h6>
                            </div>
                            <div id="sidebarContent__headerList">

                                <ul id="uiContainer"></ul>
                            </div>
                        </div>
                        <div id="sidebar_contentList" class="sidebar-body myDiv">
                            <div class="sidebar__elements-header">
                                <h3 id="sidebarTitle__list-title"></h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                </button>
                            </div>
                            <div class="sidebar-body__content" id="sidebarContent__contentList">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        


        <div class="sidebar-dialog-right" id="elementsSidebarRight" data-collapsed="false" role="document">
            <div class="sidebar-content">
                <div class="sidebarContainer">
                    <div id="sidebar_contentHeader-right" class="myDiv">
                        <div class="global-style__container">
                            <div class="sidebar-header">
                                <h2 class="sidebar-title">Global Styles</h2>
                            </div>
                            <div id="sidebarRight__Content">
                                <div class="sidebarRight__btns"></div>
                                <ul id="gStyle__list-container"></ul>
                            </div>
                        </div>
                        <div class="project-page__container">
                            <div class="sidebar-header">
                                <a class="sidebar-title"></a>
                            </div>
                            <div id="sidebarRight__project-page__content">
                                <div>
                                    <ul id="project-page__list-container"></ul>
                                </div>
                                <div class="project-page__btns"></div>
                            </div>
                        </div>
                    </div>
                    <div id="containers-results" class="sidebar-body myDiv">
                        <div class="containers-results__header">
                            <button class="close-btn"></button>
                            <div class="containers-results__control">
                                <h6 id="containers-results__control-title"></h6>
                                <div id="containers-results__control-viewport"></div>
                            </div>
                        </div>
                        <div id="containers-results__content"></div>
                    </div>
                </div>
            </div>
        </div>

        <div id="modal-container" class="supra"></div>
        <div id="modal-project-container" class="supra"></div>
        <div id="modal-form-container" class="supra font-style-supra"></div>
        <div id="csrf_field" class="csrf_field" style="display: none"><?php echo e(csrf_field()); ?></div>
        <div id="userId" class="userId" style="display: none"><?php echo e(Auth::user()->id); ?></div>
        <div id="project_id" class="project_id" style="display: none">0</div>
    </div>

    <script>
        localStorage.clear();
    </script>
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/popper.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/jquery.nicescroll.min.js')); ?>"></script>

    <script src="<?php echo e(asset('backend/assets/builder/js/lib/tether.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/bootstrap.min.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/spectrum.js')); ?>"></script>

    <script src="<?php echo e(asset('backend/assets/builder/js/lib/codemirror.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/javascript.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/css.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/htmlmixed.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/lib/xml.js')); ?>"></script>

    <script>
        <?php if(env('DEMO_MODE') == true): ?>
            var demoMode = 'active';
        <?php else: ?>
            var demoMode = 'no';

            <?php if(get_option('google_map_key') == '' || get_option('google_map_key') == null || empty(get_option('google_map_key'))): ?>
                /* alert('Please note that you did not add your google map key, so it will accure a javascript problem if you add any component which has a google map without adding the key first from settings'); */
            <?php endif; ?>
        <?php endif; ?>
        var ajaxbase = '<?php echo e(url('api/ajax')); ?>';
        var baseurl = '<?php echo e(url('/')); ?>';
        var publicpath = "<?php echo e(base_path('public')); ?>";
        var basepath = "<?php echo e(base_path('public/backend/assets/builder')); ?>";
        var googleKey = '<?php echo e(get_option('google_map_key')); ?>';
        var userId = '<?php echo e(Auth::user()->id); ?>';
        var project_id = 0;
        var project_file = '';
        var project_file_name = '';
    </script>
    <script src="<?php echo e(asset('backend/assets/builder/js/options.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/download.js')); ?>"></script>
    <script src="<?php echo e(asset('backend/assets/builder/js/builder.min.js')); ?>"></script>

    <script type="text/javascript">
        document.getElementById("main_body").style.display = "block";
    </script>
    <noscript>
        <style>
            .js_enabled_builder {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
                margin: auto;
                height: 100%;
                width: 50%;
                gap: 1em;
            }

            .js_enabled_builder h2 {
                text-align: center;
                font-size: 3rem;
                font-weight: 900;
                line-height: 1.7;
                color: #ff494b;
            }

            .js_enabled_builder h3 {
                text-align: center;
                font-weight: 600;
                line-height: 1.7;
                color: black;
                margin-bottom: 2rem;
            }
        </style>
        <section class="js_enabled_builder">
            <h2> An Error occurred </h2>
            <h3>
                To Load this page properly, we invite you to
                enable JavaScript in your browser and reload the page.
            </h3>

            <img src="https://i.postimg.cc/W12vXvCT/Capture-d-e-cran-2023-03-22-a-11-35-20.png" alt="js_popUp" />
        </section>

    </noscript>
</body>

</html>
<?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/accounting/project/lara.blade.php ENDPATH**/ ?>