@extends('layouts.app')

@section('content')
<style>
    #main_modal .modal-lg {
        max-width: 800px;
    }
    
    .head-title {
        font-size: 20px;
    }
    .medium-title {
        font-size: 18px;
    }
    .small-title {
        font-size: 15px;
    }
    hr {
        margin-top: 1rem;
        margin-bottom: 40px;
        border: 0;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
    }


    </style>
    <div class="container col-md-8 shadow-md">
        
        <div class="card">
            <div class="card-header">
                <h3 class="py-4">{{_lang('Settings')}}</h3>
            </div>
            <div class="card-body">
                <form method="post" class=" p-4" autocomplete="off" action="{{ route('projects.update', ['id'=> $id]) }}" enctype="multipart/form-data">
                    
                    @csrf
                    {{-- <input name="_method" type="hidden" value="PATCH">	 --}}
                    <input value="{{$company_id}}" type="hidden" name="company_id">			
                    
                    <div class="row">
                        <div class="col-md-8"> 
                            <div class="form-group">
                               <label class="control-label"><span class="display-5 head-title">{{ _lang('Project Name') }}</span></label>						
                               <input type="text" class="form-control" name="name" value="{{ $project->name }}" required>
                            </div>
                        </div>
                        
                        {{-- Domains --}}
                                <div class="tab-pane w-100">
                                    <div>
                                        <p class="title-break small-title text-muted "><strong>{{ _lang('Current Domain')}}:</strong>
                                            @if($project->domain_type == 0)
                                            <a href="http://{{$project->sub_domain}}" target="_blank">{{$project->sub_domain}}</a>
                                            @elseif($project->domain_type == 1)
                                            <a href="http://{{$project->custom_domain}}">{{$project->custom_domain}}</a>
                                            @endif
                                            
                                        </p>
                                        <hr/>
                                        
                                        <h4 class="title-tab-content medium-title mb-4">{{ _lang('Domain Settings')}}</h4>
                                    </div>
                                    <div class="card p-4">

                                        <div class="form-group col-md-8">
                                            <label class="form-label">{{ _lang('Domain Type')}}</label>
                                            <select name="domain_type" id="domain_type_select" class="form-control">
                                                <option value="0" {{ !$project->domain_type ? 'selected' : '' }}>{{ _lang('Sub domain')}}</option>
                                                <option value="1" {{ $project->domain_type ? 'selected' : '' }}>{{ _lang('Custom your domain')}}</option>
                                            </select>
                                        </div>
                                        <div class="">
                                            <div class="col-md-8">
                                                <div class="form-group form_customdomain">
                                                    <label class="form-label">{{ _lang('Sub domain')}}</label>
                                                    <input type="text" name="sub_domain" value="{{$project->sub_domain}}" class="form-control w-full" {{ $project->domain_type ? 'disabled' : '' }} id="input_sub_domain" @if(env('DEMO_MODE') == true) disabled @endif>
                                                    <span>{{ _lang('test.example.com')}}</span>
                                                    @if(env('DEMO_MODE') == true)
                                                <span class="required">{{ _lang("UNFORTUNATELY IT'S NOT ALLOWED AT DEMO MODE!")}}</span>
                                                @endif
                                                </div>
                                            </div>
                    
                                            <div class="col-md-8">
                                                <div class="form-group form_subdomain">
                                                    <label class="form-label">{{ _lang('Custom your domain')}}</label>
                                                    <input type="text" name="custom_domain" value="{{$project->custom_domain}}" class="form-control" {{ !$project->domain_type ? 'disabled' : '' }} placeholder="@lang('Enter your custom domain')" id="input_custom_domain" @if(env('DEMO_MODE') == true) disabled @endif>
                                                    <span>{{ _lang('example.com')}}</span>
                                                    @if(env('DEMO_MODE') == true)
                                                        <span class="required">{{ _lang("UNFORTUNATELY IT'S NOT ALLOWED AT DEMO MODE!")}}</span>
                                                    @endif
                                                </div>
                                            </div>
                    
                    
                                        </div>
                    
                                        <div class="row">
                                            <div class="col-md-12">
                                                <p class="{{ $project->domain_type ? 'd-none' : '' }}" id="sub_domain_note">{{ _lang('You can customize subdomain')}}</p>
                                                <div id="custom_domain_note" class="{{ !$project->domain_type ? 'd-none' : '' }}">
                                                    <table class="table card-table table-vcenter text-nowrap">
                                                        <p>{{ _lang("Add records below in your domain provider's DNS settings")}}</p>
                                                        <thead class="thead-dark">
                                                            <tr>
                                                                <th>{{ _lang('TYPE')}}</th>
                                                                <th>{{ _lang('HOST')}}</th>
                                                                <th>{{ _lang('VALUE')}}</th>
                                                                <th>{{ _lang('TTL')}}</th>
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
                
                                </div>
                 
                
                        <div class="col-md-12">
                            {{-- <div class="form-group">
                               <label class="control-label">{{ _lang('Description') }}</label>						
                               <textarea class="form-control summernote" name="description">{{ $project->description }}</textarea>
                            </div> --}}
                            <div class="form-group">
                                <div class="col-md-12">
                                    <button type="submit" class="btn btn-primary">{{ _lang('Update') }}</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </form>

            </div>

        </div>
    </div>
    
    
    <script>
    
    $('#domain_type_select').on('change', function (e) {
            var optionSelected = $("option:selected", this);
            var valueSelected = this.value;
    
            if (valueSelected) {
                // subdomain
                if (valueSelected == 0) {
                  
                  $("#input_custom_domain").attr('disabled','disabled');
                  $("#input_custom_domain").val('');
                  $("#input_sub_domain").removeAttr('disabled');
                  $("#custom_domain_note").removeClass("d-none").addClass("d-none");
                  $("#sub_domain_note").removeClass("d-none");
                }
                // custom_domain
                else if(valueSelected == 1){
                  $("#input_sub_domain").attr('disabled','disabled');
                  $("#input_sub_domain").val('');
                  $("#input_custom_domain").removeAttr('disabled');
                  $("#sub_domain_note").removeClass("d-none").addClass("d-none");
                  $("#custom_domain_note").removeClass("d-none");
                }
            }
          });
    </script>
@endsection