@extends('install.layout')

@section('content')

<div class="panel panel-default">
  <div class="panel-heading text-center">Database Settings</div>
	<div class="panel-body">
	   <div class="col-md-12">
			@if (\Session::has('error'))
			  <div class="alert alert-danger">
				<p>{{ \Session::get('error') }}</p>
			  </div>
			  <br />
			@endif
		   <form action="{{ url('install/process_install') }}" method="post" autocomplete="off">
			   {{ csrf_field() }}
			   <div class="form-group">
				<label>App URL:</label>
				<input type="text" class="form-control" value="appurl" name="appurl" id="appurl">
			  </div>
			  <div class="form-group">
				<label>Hostname:</label>
				<input type="text" class="form-control" value="localhost" name="hostname" id="hostname">
			  </div>
			  
			  <div class="form-group">
				<label>Database:</label>
				<input type="text" class="form-control" name="database" id="database">
			  </div>
			  
			  <div class="form-group">
				<label>Username:</label>
				<input type="text" class="form-control" name="username" id="username">
			  </div>
			  
			  <div class="form-group">
				<label>Password:</label>
				<input type="password" class="form-control" name="password">
			  </div>
			  <button type="submit" id="next-button" class="btn btn-install">Next</button>
		   </form>
	   </div>
	</div>
</div>
@endsection
