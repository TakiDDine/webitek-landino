<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
	<head>
		  
		
	
	<!-- Google tag (gtag.js) -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-XD2MTZ40F2"></script>
	<script>
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());

	gtag('config', 'G-XD2MTZ40F2');
	</script>



		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">

		<!-- CSRF Token -->
		<meta name="csrf-token" content="{{ csrf_token() }}">

		<title>LaraBuilder Installation</title>
		<!-- Google font -->
		<link href="https://fonts.googleapis.com/css?family=Lato:700%7CMontserrat:400,600" rel="stylesheet">

		<!-- Bootstrap -->
		<link type="text/css" rel="stylesheet" href="{{ asset('install_asset/css/bootstrap.min.css') }}"/>
		
		<link type="text/css" rel="stylesheet" href="{{ asset('install_asset/css/select2.css') }}"/>

		<!-- Custom stlylesheet -->
		<link type="text/css" rel="stylesheet" href="{{ asset('install_asset/css/style.css') }}"/>

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->

    </head>
	<body>

		<div class="container">
		    <div class="install-container col-md-6">
				@yield('content')
			</div>			
		</div>

		<!-- jQuery Plugins -->
		<script type="text/javascript" src="{{ asset('install_asset/js/jquery.min.js') }}"></script>
		<script type="text/javascript" src="{{ asset('install_asset/js/bootstrap.min.js') }}"></script>
		<script type="text/javascript" src="{{ asset('install_asset/js/select2.min.js') }}"></script>
		<script type="text/javascript" src="{{ asset('install_asset/js/scripts.js') }}"></script>
		{{-- <script>
			(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
			})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
		  
			ga('create', 'G-XD2MTZ40F2', 'auto');
			ga('send', 'pageview');
		  
		  </script> --}}
	</body>
</html>