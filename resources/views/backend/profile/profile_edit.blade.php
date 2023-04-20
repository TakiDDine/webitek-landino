@extends('layouts.app')
{{-- @section('content')
<div class="row">
	<div class="col-12">
		<div class="card">
		    <h5 class="card-header bg-primary text-white mt-0 panel-title">{{ _lang('Profile Settings') }}</h5>
			<div class="card-body">
				<div class="row">
					<div class="col-md-6">
						<form action="{{ url('profile/update')}}" autocomplete="off" class="form-horizontal form-groups-bordered validate" enctype="multipart/form-data" method="post">
							@csrf
							<div class="form-group">
								<label class="control-label">{{ _lang('Name') }}</label>
								<input type="text" class="form-control" name="name" value="{{$profile->name}}" required>
							</div>

							<div class="form-group">
								<label class="control-label">{{ _lang('Email') }}</label>
								<input type="text" class="form-control" name="email" value="{{ $profile->email }}" required>
							</div>

							<div class="form-group">
								<label class="control-label">{{ _lang('Language') }}</label>
								<select class="form-control select2" name="language">
									<option value="">{{ _lang('-- Select One --') }}</option>
									{{ load_language( $profile->language ) }}
								</select>
							</div>

							<div class="form-group">
								<label class="control-label">{{ _lang('Image') }} (300 X 300)</label>
								<input type="file" class="form-control dropify" data-default-file="{{ $profile->profile_picture != "" ? asset('public/uploads/profile/'.$profile->profile_picture) : '' }}" name="profile_picture" data-allowed-file-extensions="png jpg jpeg PNG JPG JPEG">
							</div>

							<div class="form-group">
								<button type="submit" class="btn btn-primary">{{ _lang('Update Profile') }}</button>
							</div>
						</form>
					</div>	

                    @if(Auth::user()->user_type == 'user')
	                    <div class="col-md-6">
	                    	 <table class="table table-striped table-bordered">
						    	<tr>
						    		<td colspan="2" class="text-center"><b>{{ $profile->company->package->package_name.' '._lang('Package Details') }}</b></td>
						    	</tr>
						    	<tr>
						    		<td><b>{{ _lang('Feature') }}</b></td>
						    		<td class="text-center"><b>{{ _lang('Avaialble Limit') }}</b></td>
						    	</tr>
						    	<tr>
						    		<td>{{ _lang('Websites Limit') }}</td>
						    		<td class="text-center">{{ $profile->company->websites_limit }}</td>
						    	</tr>
						    	<tr>
						    		<td>{{ _lang('Recurring Transaction') }}</td>
						    		<td class="text-center">{{ $profile->company->recurring_transaction }}</td>
						    	</tr>
						    	<tr>
						    		<td>{{ _lang('Online Payment') }}</td>
						    		<td class="text-center">{{ $profile->company->online_payment }}</td>
						    	</tr>
						    </table>
	                    </div>
                    @endif


				</div>	
			</div>
		</div>
	</div>
</div>
@endsection --}}



@section('content')
    <style>
        button.clipboard-btn {
            background: none;
            border: none;
        }

        body {
            font-family: "Vazir" !important;
        }

        div#main_alert {
            max-width: 800px;
            margin: auto;
        }

    </style>
    <h2 class="mb-4">{{ _lang('Profile Settings') }}</h2>
    <div class="row">
        <div class="col-md-6 mx-auto  bg-white" style="padding: 50px;">
            <div class="row">
                <div class="col-12">

                    <form action="{{ url('profile/update') }}" autocomplete="off"
                        class="form-horizontal form-groups-bordered validate" enctype="multipart/form-data" method="post">
                        @csrf
                        <div class="form-group">
                            <label class="control-label">{{ _lang('Name') }}</label>
                            <input type="text" class="form-control" name="name" value="{{ $profile->name }}" required>
							@error('name')
								<div class="text-md text-danger">{{ $message }}</div>
							@enderror
                        </div>

                        <div class="form-group">
                            <label class="control-label">{{ _lang('Email') }}</label>
                            <input type="text" class="form-control" name="email" value="{{ $profile->email }}" required>
							@error('email')
								<div class="text-md text-danger">{{ $message }}</div>
							@enderror
                        </div>

                        <div class="form-group">
                            <label class="control-label">{{ _lang('Phone') }}</label>
                            <input type="text" class="form-control" name="phone" value="{{ $profile->phone }}" required>
							@error('phone')
								<div class="text-md text-danger">{{ $message }}</div>
							@enderror
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ _lang('Affiliate URL') }}</label>
                            <div style="position: relative">
                                <input type="text" id="affiliate_id_input" class="form-control" readonly
                                    value="{{ route('register.affiliate', ['affiliate_id' => $profile->affiliate_id]) }}"
                                    required>
                                <button type="button" class="clipboard-btn" data-clipboard-target="#affiliate_id_input"
                                    style="position: absolute;top: 50%;transform: translateY(-50%);left: 10px;">
                                    {{ _lang('Copy the link') }}
                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn-block btn--blue btn">{{ _lang('Update Profile') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-6 mx-auto  bg-white" style="padding: 50px;">
            <div class="row">
                <div class="col-12">
                    <form action="{{ url('profile/update_password') }}" autocomplete="off"
                        class="form-horizontal form-groups-bordered validate" enctype="multipart/form-data" method="post">
                        @csrf
                        <div class="form-group">
                            <label class="control-label">{{ _lang('Current password') }}</label>
                            <input type="password" class="form-control" name="current_password" required>
							@error('current_password')
								<div class="text-md text-danger">{{ $message }}</div>
							@enderror
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ _lang('New password') }}</label>
                            <input type="password" class="form-control" name="password" required>
							@error('password')
								<div class="text-md text-danger">{{ $message }}</div>
							@enderror
                        </div>
                        <div class="form-group">
                            <label class="control-label">{{ _lang('Confirm new password') }}</label>
                            <input type="password" class="form-control" name="password_confirmation" required>
							@error('password_confirmation')
								<div class="text-md text-danger">{{ $message }}</div>
							@enderror
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn-block btn--blue btn">{{ _lang('Update Profile') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-6 mx-auto  bg-white" style="padding: 50px;">
            <div class="row">
                <div class="col-12">
                    <form onsubmit="return confirm('هل انت متأكد من حذف الحساب')" action="{{ url('profile/delete') }}"
                        autocomplete="off" class="form-horizontal form-groups-bordered validate"
                        enctype="multipart/form-data" method="post">
                        @csrf
                        @method('DELETE')
                        <h3>
                            حذف الحساب :
                        </h3>
                        <p style="font-size: 18px">
                            عند حذف حسابك أنت تتحمل كافة المسؤولية
                        </p>
                        <div class="form-group">
                            <button type="submit" class="btn btn-block btn-danger">{{ _lang('Delete account') }}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

@endsection


@section('js-script')
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js"></script>

    <script>
        var clipboard = new ClipboardJS('.clipboard-btn');

        clipboard.on('success', function(e) {
            $(e.trigger).text('تم نسخ الرابط !')
        });
    </script>

@endsection