@extends('layouts.public')

@section('content')
<style type="text/css">
@media all {
	.table th {
		background-color: #2a77d6 !important;
		color: #ffffff;
	}
	
	.base_color{
		background:#2a77d6 !important;
	}
}
</style> 

<div class="row">

	<div class="col-md-12">

		<div class="btn-group mb-1">
			<a class="btn btn-primary btn-round print" href="#" data-print="quotation-view"> {{ _lang('Print Quotation') }}</a>
			<a class="btn btn-danger btn-round" href="{{ url('quotations/download_pdf/'.encrypt($quotation->id)) }}" >{{ _lang('PDF Quotation') }}</a>
		</div>
		
		<div class="card clearfix">
		
			@php $base_currency = get_company_field( $quotation->company_id, 'base_currency', 'USD' ); @endphp
			@php $date_format = get_company_field($quotation->company_id, 'date_format','Y-m-d'); @endphp	
			@php $currency = currency($base_currency); @endphp
			
			<div class="card-body">
				<div class="invoice-box" id="quotation-view">
					<table cellpadding="0" cellspacing="0">
						<tbody>
							 <tr class="top">
								<td colspan="2">
									<table>
										<tbody>
											 <tr>
												<td>
													 <b>{{ _lang('Quotation') }} #:</b>  {{ $quotation->quotation_number }}<br>
													 <b>{{ _lang('Created') }}: </b>{{ date($date_format, strtotime( $quotation->quotation_date)) }}<br>						
												</td>
												<td class="invoice-logo">
													 <img src="{{ get_company_logo($quotation->company_id) }}" class="wp-100">
												</td>
											 </tr>
										</tbody>
									</table>
								</td>
							 </tr>
							 <tr class="information">
								<td colspan="2">
									<div class="row">	
										<div class="invoice-col-6 pt-3">
											<h5><b>{{ _lang('Quotation To') }}</b></h5>
											@if($quotation->related_to == 'contacts' && isset($quotation->client))
												 {{ $quotation->client->contact_name }}<br>
												 {{ $quotation->client->contact_email }}<br>
												 {!! $quotation->client->company_name != '' ? clean($quotation->client->company_name).'<br>' : '' !!}
												 {!! $quotation->client->address != '' ? clean($quotation->client->address).'<br>' : '' !!}
												 {!! $quotation->client->vat_id != '' ? _lang('VAT ID').': '.clean($quotation->client->vat_id).'<br>' : '' !!}
												 {!! $quotation->client->reg_no != '' ? _lang('REG NO').': '.clean($quotation->client->reg_no).'<br>' : '' !!}
											 @elseif($quotation->related_to == 'leads' && isset($quotation->lead))	 
												 {{ $quotation->lead->name }}<br>
												 {{ $quotation->lead->email }}<br>
												 {!! $quotation->lead->company_name != '' ? clean($quotation->lead->company_name).'<br>' : '' !!}
												 {!! $quotation->lead->address != '' ? clean($quotation->lead->address).'<br>' : '' !!}
												 {!! $quotation->lead->vat_id != '' ? _lang('VAT ID').': '.clean($quotation->lead->vat_id).'<br>' : '' !!}
												 {!! $quotation->lead->reg_no != '' ? _lang('REG NO').': '.clean($quotation->lead->reg_no).'<br>' : '' !!}
											@endif                         
										</div>
										<!--Company Address-->
										<div class="invoice-col-6 pt-3">
											<div class="d-inline-block float-md-right">
												 <h5><b>{{ _lang('Company Details') }}</b></h5>
												 {{ get_company_field($quotation->company_id,'company_name') }}<br>
												 {{ get_company_field($quotation->company_id,'address') }}<br>
												 {{ get_company_field($quotation->company_id,'email') }}<br>
												 {!! get_company_field($quotation->company_id,'vat_id') != '' ? _lang('VAT ID').': '.clean(get_company_field($quotation->company_id,'vat_id')).'<br>' : '' !!}
												 {!! get_company_field($quotation->company_id,'reg_no')!= '' ? _lang('REG NO').': '.clean(get_company_field($quotation->company_id,'reg_no')).'<br>' : '' !!}
												 <br>
												 <!--Invoice Payment Information-->
												 <h4>{{ _lang('Quotation Total') }}: &nbsp; {{ decimalPlace($quotation->grand_total, $currency) }}</h4>
												 @if($quotation->related_to == 'contacts' && isset($quotation->client))
												    @if($quotation->client->currency != $base_currency)
														<h4>{{ _lang('Converted Total') }}: &nbsp;{{ decimalPlace($quotation->converted_total, currency($quotation->client->currency)) }}</h4>	
													@endif
												 @elseif($quotation->related_to == 'leads' && isset($quotation->lead))
	 												@if($quotation->lead->currency != $base_currency)
														<h4>{{ _lang('Converted Total') }}: &nbsp;{{ decimalPlace($quotation->converted_total, currency($quotation->lead->currency)) }}</h4>
													@endif
	                                             @endif
											</div>
										</div>
									</div>
								</td>
							 </tr>
						</tbody>
					 </table>
					 <!--End Invoice Information-->
					 
					 <!--Invoice Product-->
					 <div class="table-responsive">
						<table class="table">
							 <thead class="base_color">
								 <tr>
									 <th>{{ _lang('Name') }}</th>
									 <th class="text-center wp-100">{{ _lang('Quantity') }}</th>
									 <th class="text-right">{{ _lang('Unit Cost') }}</th>
									 <th class="text-right wp-100">{{ _lang('Discount') }}</th>
									 <th class="no-print">{{ _lang('Tax method') }}</th>
									 <th class="text-right">{{ _lang('Tax') }}</th>
									 <th class="text-right">{{ _lang('Sub Total') }}</th>
								 </tr>
							 </thead>
							 <tbody id="invoice">
								 @foreach($quotation->quotation_items as $item)
									 <tr id="product-{{ $item->item_id }}">
										 <td>
											<b>{{ $item->item->item_name }}</b><br>{{ $item->description }}
									 	 </td>
										 <td class="text-center">{{ $item->quantity }}</td>
										 <td class="text-right">{{ decimalPlace($item->unit_cost, $currency) }}</td>
										 <td class="text-right">{{ decimalPlace($item->discount, $currency) }}</td>
										 <td class="no-print">{{ strtoupper($item->tax_method) }}</td>
										 <td class="text-right">{{ decimalPlace($item->tax_amount, $currency) }}</td>
										 <td class="text-right">{{ decimalPlace($item->sub_total, $currency) }}</td>
									 </tr>
								@endforeach
							 </tbody>
						</table>
					 </div>
					 <!--End Invoice Product-->	
					 
					 <!--Summary Table-->
					 <div class="invoice-summary-right">
						<table class="table table-bordered">
							<tbody>
								<tr>
									 <td>{{ _lang('Tax') }}</td>
									 <td class="text-right">
										<span>{{ decimalPlace($quotation->tax_total, $currency) }}</span>
										@if($quotation->related_to == 'contacts' && isset($quotation->client))
											@if($quotation->client->currency != $base_currency)
												<br><span>{{ decimalPlace(convert_currency($base_currency, $quotation->client->currency, $quotation->tax_total), currency($quotation->client->currency)) }}</span>	
											@endif
										@elseif($quotation->related_to == 'leads' && isset($quotation->lead))
											@if($quotation->lead->currency != $base_currency)
												<br><span>{{ decimalPlace(convert_currency($base_currency, $quotation->lead->currency, $quotation->tax_total), currency($quotation->lead->currency)) }}</span>	
											@endif
										@endif
									 </td>
								</tr>
								<tr>
									 <td>{{ _lang('Grand Total') }}</td>
									 <td class="text-right">
										<b>{{ decimalPlace($quotation->grand_total, $currency) }}</b>
										@if($quotation->related_to == 'contacts' && isset($quotation->client))
											@if($quotation->client->currency != $base_currency)
												<br><b>{{ decimalPlace($quotation->converted_total, currency($quotation->client->currency)) }}</b>
											@endif
										@elseif($quotation->related_to == 'leads' && isset($quotation->lead))
											@if($quotation->lead->currency != $base_currency)
												<br><b>{{ decimalPlace($quotation->converted_total, currency($quotation->lead->currency)) }}</b>
											@endif
										@endif
									 </td>
								</tr>
							 </tbody>
						</table>
					 </div>
					 <!--End Summary Table-->
					 
					 <div class="clearfix"></div>

					 <!--Quotation Note-->
					 @if($quotation->note  != '')
						<div>
							<div class="invoice-note">{{ strip_tags($quotation->note) }}</div>
						</div>
					@endif
					 <!--End Quotation Note-->
					 
					 <!--Quotation Footer Footer-->
					 @if(get_company_field($quotation->company_id,'quotation_footer')  != '')
						<div>
							<div class="invoice-note">{!! xss_clean(get_company_field($quotation->company_id,'quotation_footer')) !!}</div>
						</div> 
					 @endif
					 <!--End Footer Text-->
				</div>
		    </div>
    	</div>
    </div>
</div>
@endsection