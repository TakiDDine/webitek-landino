@extends('layouts.app')

@section('content')
<div class="row">
	<div class="col-12">
		<div class="card">
			<div class="d-none panel-title">{{ _lang('Update Package') }}</div>

			<div class="card-body">
			  <form method="post" class="validate" autocomplete="off" action="{{ action('PackageController@update', $id) }}" enctype="multipart/form-data">
				
				{{ csrf_field() }}
				
				<input name="_method" type="hidden" value="PATCH">				
								
				<div class="row">
					<div class="col-md-6">
					  <div class="form-group">
						<label class="control-label">{{ _lang('Package Name') }}</label>						
						<input type="text" class="form-control" name="package_name" value="{{ $package->package_name }}" required>
					  </div>
					</div>
					
					<div class="col-md-6">
					  <div class="form-group">
						<label class="control-label">{{ _lang('Featured') }}</label>						
						<select class="form-control" name="is_featured">
						   <option value="0" {{ $package->is_featured == 0 ? 'selected' : '' }}>{{ _lang('No') }}</option>
						   <option value="1" {{ $package->is_featured == 1 ? 'selected' : '' }}>{{ _lang('Yes') }}</option>
						</select>
					  </div>
					</div>
					
					<div class="col-md-12">
						<table class="table table-bordered">
							<thead class="thead-dark">
							   <th class="w-50">{{ _lang('Monthly Limit') }}</th>
							   <th class="w-50">{{ _lang('Yearly Limit') }}</th>
							</thead>
							<tbody>
								<tr>
									<td>
										<div>
										  <div class="form-group">
											<label class="control-label">{{ _lang('Websites Limit') }}</label>						
											<select class="form-control select2" name="websites_limit[monthly]" id="websites_limit_monthly" required>
												<option value="No">{{ _lang('No') }}</option>
												<option value="Unlimited">{{ _lang('Unlimited') }}</option>
												@for( $i = 1; $i <= 30; $i++ )
													<option value="{{ $i }}">{{ $i }}</option>
												@endfor
											</select>
										  </div>
										</div>
									</td>
									<td>
										<div>
										  <div class="form-group">
											<label class="control-label">{{ _lang('Websites Limit') }}</label>						
											<select class="form-control select2" name="websites_limit[yearly]" id="websites_limit_yearly" required>
												<option value="No">{{ _lang('No') }}</option>
												<option value="Unlimited">{{ _lang('Unlimited') }}</option>
												@for( $i = 1; $i <= 30; $i++ )
													<option value="{{ $i }}">{{ $i }}</option>
												@endfor
											</select>
										  </div>
										</div>
									</td>
								</tr>

								<tr>
									<td>				
										<div>
										  <div class="form-group">
											<label class="control-label">{{ _lang('Recurring Transaction') }}</label>					
											<select class="form-control select2" name="recurring_transaction[monthly]" id="recurring_transaction_monthly" required>
												<option value="Yes">{{ _lang('Yes') }}</option>
												<option value="No">{{ _lang('No') }}</option>
											</select>
										  </div>
										</div>
									</td>
									<td>				
										<div>
										  <div class="form-group">
											<label class="control-label">{{ _lang('Recurring Transaction') }}</label>					
											<select class="form-control select2" name="recurring_transaction[yearly]" id="recurring_transaction_yearly" required>
												<option value="Yes">{{ _lang('Yes') }}</option>
												<option value="No">{{ _lang('No') }}</option>
											</select>
										  </div>
										</div>
									</td>
								</tr>
								
								
								<tr>
									<td>								
										<div>
										  <div class="form-group">
											<label class="control-label">{{ _lang('Online Payment') }}</label>						
											<select class="form-control select2" name="online_payment[monthly]" id="online_payment_monthly" required>
												<option value="No">{{ _lang('No') }}</option>
												<option value="Yes">{{ _lang('Yes') }}</option>
											</select>
										  </div>
										</div>
									</td>
									<td>								
										<div>
										  <div class="form-group">
											<label class="control-label">{{ _lang('Online Payment') }}</label>						
											<select class="form-control select2" name="online_payment[yearly]" id="online_payment_yearly" required>
												<option value="No">{{ _lang('No') }}</option>
												<option value="Yes">{{ _lang('Yes') }}</option>
											</select>
										  </div>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div>
										  <div class="form-group">
											<label class="control-label">{{ _lang('Cost Per Month').' '.currency() }}</label>						
											<input type="text" class="form-control float-field" name="cost_per_month" value="{{ $package->cost_per_month }}" required>
										  </div>
										</div>
									</td>
									
									<td>
										<div>
										  <div class="form-group">
											<label class="control-label">{{ _lang('Cost Per Year').' '.currency() }}</label>						
											<input type="text" class="form-control float-field" name="cost_per_year" value="{{ $package->cost_per_year }}" required>
										  </div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					
					<div class="col-md-12">
					  <div class="form-group">
						<button type="reset" class="btn btn-danger">{{ _lang('Reset') }}</button>
						<button type="submit" class="btn btn-primary">{{ _lang('Save') }}</button>
					  </div>
					</div>
				</div>
			  	</form>
			</div>
	  	</div>
 	</div>
</div>
@endsection


@section('js-script')
<script>
(function($) {
    "use strict"

	$("#websites_limit_monthly").val("{{ unserialize($package->websites_limit)['monthly'] }}").trigger('change');
	$("#websites_limit_yearly").val("{{ unserialize($package->websites_limit)['yearly'] }}").trigger('change');

	$("#recurring_transaction_monthly").val("{{ unserialize($package->recurring_transaction)['monthly'] }}").trigger('change');
	$("#recurring_transaction_yearly").val("{{ unserialize($package->recurring_transaction)['yearly'] }}").trigger('change');

	$("#online_payment_monthly").val("{{ unserialize($package->online_payment)['monthly'] }}").trigger('change');
	$("#online_payment_yearly").val("{{ unserialize($package->online_payment)['yearly'] }}").trigger('change');

})(jQuery);	
</script>
@endsection

