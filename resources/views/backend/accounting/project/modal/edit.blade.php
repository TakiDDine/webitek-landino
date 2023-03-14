<style>
#main_modal .modal-lg {
    max-width: 800px;
}

#main_modal .modal-body {
    overflow: visible !important;
}
</style>
<form method="post" class="ajax-submit" autocomplete="off" action="{{ action('ProjectController@update', $id) }}" enctype="multipart/form-data">
	{{ csrf_field()}}
	<input name="_method" type="hidden" value="PATCH">				
	
	<div class="row">
		<div class="col-md-12">
			<div class="form-group">
			   <label class="control-label">{{ _lang('Project Name') }}</label>						
			   <input type="text" class="form-control" name="name" value="{{ $project->name }}" required>
			</div>
		</div>
		
		{{-- Domains --}}
                <div class="tab-pane">
                    <h4 class="title-tab-content">@lang('Domain Settings')</h4>
                    <p class="title-break"><strong>@lang('Current domain'):</strong>
                        @if($project->domain_type == 0)
                        <a href="http://{{$project->sub_domain}}" target="_blank">{{$project->sub_domain}}</a>
                        @elseif($project->domain_type == 1)
                        <a href="http://{{$project->custom_domain}}">{{$project->custom_domain}}</a>
                        @endif

                    </p>
                    <div class="form-group">
                        <label class="form-label">@lang('Domain Type')</label>
                        <select name="domain_type" id="domain_type_select" class="form-control">
                            <option value="0" {{ !$project->domain_type ? 'selected' : '' }}>@lang('Sub domain')</option>
                            <option value="1" {{ $project->domain_type ? 'selected' : '' }}>@lang('Custom your domain')</option>
                        </select>
                    </div>
                    <div class="row">
                        <div class="col-md-3">
                            <div class="form-group form_customdomain">
                                <label class="form-label">@lang('Sub domain')</label>
                                <input type="text" name="sub_domain" value="{{$project->sub_domain}}" class="form-control" {{ $project->domain_type ? 'disabled' : '' }} id="input_sub_domain" @if(env('DEMO_MODE') == true) disabled @endif>
                                <span>test.example.com</span>
                                @if(env('DEMO_MODE') == true)
					        <span class="required">{{ _lang("UNFORTUNATELY IT'S NOT ALLOWED AT DEMO MODE!")}}</span>
				            @endif
                            </div>
                        </div>

                        <div class="col-md-9">
                            <div class="form-group form_subdomain">
                                <label class="form-label">@lang('Custom your domain')</label>
                                <input type="text" name="custom_domain" value="{{$project->custom_domain}}" class="form-control" {{ !$project->domain_type ? 'disabled' : '' }} placeholder="@lang('Enter your custom domain')" id="input_custom_domain" @if(env('DEMO_MODE') == true) disabled @endif>
                                <span>example.com</span>
                                @if(env('DEMO_MODE') == true)
					<span class="required">{{ _lang("UNFORTUNATELY IT'S NOT ALLOWED AT DEMO MODE!")}}</span>
				@endif
                            </div>
                        </div>


                    </div>

					<div class="row">
                        <div class="col-md-12">
                            <p class="{{ $project->domain_type ? 'd-none' : '' }}" id="sub_domain_note">@lang('You can customize subdomain')</p>
                            <div id="custom_domain_note" class="{{ !$project->domain_type ? 'd-none' : '' }}">
                                <table class="table card-table table-vcenter text-nowrap">
                                    <p>@lang("Add records below in your domain provider's DNS settings")</p>
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>@lang('TYPE')</th>
                                            <th>@lang('HOST')</th>
                                            <th>@lang('VALUE')</th>
                                            <th>@lang('TTL')</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>A</td>
                                            <td>@</td>
                                            <td>{{ get_option('server_ip') }}</td>
                                            <td>Automatic</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

				</div>
 

		<div class="col-md-12">
			<div class="form-group">
			   <label class="control-label">{{ _lang('Description') }}</label>						
			   <textarea class="form-control summernote" name="description">{{ $project->description }}</textarea>
			</div>
		</div>
		
		<div class="form-group">
		    <div class="col-md-12">
			    <button type="submit" class="btn btn-primary">{{ _lang('Update') }}</button>
		    </div>
		</div>
	</div>
</form>


<script>

$('#domain_type_select').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;

        if (valueSelected) {
            // subdomain
            if (valueSelected == 0) {
              
              $("#input_custom_domain").attr('disabled','disabled');
              $("#input_sub_domain").removeAttr('disabled');
              $("#custom_domain_note").removeClass("d-none").addClass("d-none");
              $("#sub_domain_note").removeClass("d-none");
            }
            // custom_domain
            else if(valueSelected == 1){
              $("#input_sub_domain").attr('disabled','disabled');
              $("#input_custom_domain").removeAttr('disabled');
              $("#sub_domain_note").removeClass("d-none").addClass("d-none");
              $("#custom_domain_note").removeClass("d-none");
            }
        }
      });
</script>