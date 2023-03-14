@extends('layouts.app')

@section('content')

<div class="row">
	<div class="col-12">
		<div class="card">
			<span class="panel-title d-none">{{ _lang('Payment History') }}</span>
			<div class="card-body">
			  <table class="table table-bordered data-table">
				<thead>
					<tr>
						<th>{{ _lang('Date') }}</th>
						<th>{{ _lang('User') }}</th>
						<th>{{ _lang('Package') }}</th>
						<th>{{ _lang('Method') }}</th>
						<th class="text-right">{{ _lang('Amount') }}</th>
						<th>{{ _lang('Action') }}</th>
					</tr>
				</thead>
				<tbody>
				  @php $date_format = get_option('date_format','Y-m-d'); @endphp
				  @php $time_format = get_option('time_format',24) == '24' ? 'H:i' : 'h:i A'; @endphp
				  
				  @foreach($payment_history as $history)
					<tr>
						<td>{{ date("$date_format $time_format",strtotime($history->created_at)) }}</td>
						<td>{{ $history->user->name }}</td>
						<td>{{ $history->title }}</td>
						<td>{{ $history->method }}</td>	
						<td class="text-right"><b>{{ decimalPlace($history->amount, currency($history->currency)) }}</b></td>			
						<td>
							@if (trim(strtolower($history->method)) === 'cih')
								<a href="{{ route('payment.proof', ['id' => $history->id]) }}" class="btn btn-primary" id="get_proof">Get proof</a>	
								@if (!$history->is_accepted)
									<a href="{{ route('payment.accept', ['id' => $history->id]) }}" class="btn btn-success">Accept payment</a>	
									<a href="" class="btn btn-danger" id="delete_payment" onclick="event.preventDefault(); $('#form-delete').submit()">Delete payment</a>
									<form action="{{ route('payment.delete', ['id' => $history->id]) }}" id="form-delete" method="POST">
									@csrf
									@method('delete')
								</form>		
								@endif
							@endif
						</td>
					</tr>
				  @endforeach
				</tbody>
			  </table>
			  
			  <div class="pull-right">
				 {{ $payment_history->links() }}
			  </div>
			</div>
		</div>
	</div>
</div>

<div id="main_modal" class="modal" tabindex="-1" role="dialog">
	<div class="modal-dialog modal-lg" role="document">
		<div class="modal-content">
			<div class="modal-body">
				<h5 class="modal-title mt-0 text-white"></h5>
				<img src="" class="mw-100" id="proof_image" alt="">
			</div>
		</div>
	</div>
</div>

<script>
	$('#get_proof').click(function (e) {
		e.preventDefault()
		e.stopPropagation()

		$.ajax({
			url: $(this).attr('href'),
			success: response => {
				$('#main_modal #proof_image').attr('src', response);
				$('#main_modal').modal('toggle')
			}
		})

	})

	$('#delete_payment').click(function (e) {
		e.preventDefault()
		e.stopPropagation()


		if (confirm('Are you sure to delete the payment ?')) {
			$('#form-delete').submit();
		}
	})
</script>

@endsection


