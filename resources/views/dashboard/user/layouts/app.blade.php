<!DOCTYPE html>
<html>
    <head>
        <title>Dashboard</title>
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div class="dashboard">
            <div class="sidebar">
                <div class="sidebar-logo">
                    Your Logo
                </div>
                <ul class="sidebar-menu">
                    <li class="menu-item ">
                        <div class="menu-icon">
                            <!-- Your icon HTML or use an icon font like Font Awesome -->
                        </div>
                        <div class="menu-text">
                            <a href="/test/dashboard">dashboard</a>
                        </div>
                    </li>
                    <li class="menu-item">
                        <div class="menu-icon">
                            <!-- Your icon HTML or use an icon font like Font Awesome -->
                        </div>
                        <div class="menu-text">
                            <a href="/test/templates">templates</a>
                        </div>
                        <div class="menu-badge">
                            5
                        </div>
                    </li>
                    <!-- Add more menu items -->
                </ul>
            </div>
            <div class="content">
                <!-- Main content -->
                @yield('content')
            </div>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
