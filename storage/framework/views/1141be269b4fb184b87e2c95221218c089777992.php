<script type="text/javascript">
	var _url = "<?php echo e(url('')); ?>";
	var _date_format = "<?php echo e(get_company_option('date_format',get_option('date_format','Y-m-d'))); ?>";
	var _request_live_chat = "<?php echo e(Request::is('live_chat')); ?>";
    var _pusher_key = "<?php echo e(get_option('PUSHER_KEY')); ?>";
    var _pusher_end_point = "<?php echo e(url('live_chat/auth')); ?>";
    var _pusher_cluster = "<?php echo e(get_option('PUSHER_CLUSTER')); ?>";
    var _currency = "<?php echo e(currency()); ?>";
    var _from_currency = "<?php echo e(base_currency()); ?>";
	var _backend_direction = "<?php echo e(get_company_option('backend_direction', get_option('backend_direction'))); ?>";

	var $lang_alert_title = "<?php echo e(_lang('Are you sure?')); ?>";
	var $lang_alert_message = "<?php echo e(_lang('Once deleted, you will not be able to recover this information !')); ?>";
	var $lang_confirm_button_text = "<?php echo e(_lang('Yes, delete it!')); ?>";
	var $lang_cancel_button_text = "<?php echo e(_lang('Cancel')); ?>";
	var $lang_no_data_found = "<?php echo e(_lang('No Data Found')); ?>";
	var $lang_showing = "<?php echo e(_lang('Showing')); ?>";
	var $lang_to = "<?php echo e(_lang('to')); ?>";
	var $lang_of = "<?php echo e(_lang('of')); ?>";
	var $lang_entries = "<?php echo e(_lang('Entries')); ?>";
	var $lang_showing_0_to_0_of_0_entries = "<?php echo e(_lang('Showing 0 To 0 Of 0 Entries')); ?>";
	var $lang_show = "<?php echo e(_lang('Show')); ?>";
	var $lang_loading = "<?php echo e(_lang('Loading...')); ?>";
	var $lang_processing = "<?php echo e(_lang('Processing...')); ?>";
	var $lang_search = "<?php echo e(_lang('Search')); ?>";
	var $lang_no_matching_records_found = "<?php echo e(_lang('No matching records found')); ?>";
	var $lang_first = "<?php echo e(_lang('First')); ?>";
	var $lang_last = "<?php echo e(_lang('Last')); ?>";
	var $lang_next = "<?php echo e(_lang('Next')); ?>";
	var $lang_previous = "<?php echo e(_lang('Previous')); ?>";
	var $lang_copy = "<?php echo e(_lang('Copy')); ?>";
	var $lang_excel = "<?php echo e(_lang('Excel')); ?>";
	var $lang_pdf = "<?php echo e(_lang('PDF')); ?>";
	var $lang_print = "<?php echo e(_lang('Print')); ?>";
	var $lang_you = "<?php echo e(_lang('You')); ?>";
	var $lang_please_select_a_contact_first = "<?php echo e(_lang('Please select a contact first')); ?>";
	var $lang_please_select_a_group_first= "<?php echo e(_lang('Please select a group first')); ?>";
	var $lang_income = "<?php echo e(_lang('Income')); ?>";
	var $lang_expense = "<?php echo e(_lang('Expense')); ?>";
	var $lang_income_vs_expense = "<?php echo e(_lang('Income vs Expense')); ?>";
	var $lang_no_data_availabel = "<?php echo e(_lang('No data availabel')); ?>";
	var $lang_source = "<?php echo e(_lang('Source')); ?>";
	var $lang_created = "<?php echo e(_lang('Created')); ?>";
	var $lang_tax_method = "<?php echo e(_lang('TAX Method')); ?>";
	var $lang_inclusive = "<?php echo e(_lang('INCLUSIVE')); ?>";
	var $lang_exclusive = "<?php echo e(_lang('EXCLUSIVE')); ?>";
	var $lang_unit_price = "<?php echo e(_lang('Unit Price')); ?>";
	var $lang_quantity = "<?php echo e(_lang('Quantity')); ?>";
	var $lang_discount = "<?php echo e(_lang('Discount')); ?>";
	var $lang_tax = "<?php echo e(_lang('Tax')); ?>";
	var $lang_save = "<?php echo e(_lang('Save')); ?>";
	var $lang_no_tax = "<?php echo e(_lang('No Tax')); ?>";
	var $lang_update_product = "<?php echo e(_lang('Update Product')); ?>";
	var $lang_none = "<?php echo e(_lang('NONE')); ?>";
	var $lang_copied_invoice_link = "<?php echo e(_lang('Copied Invoice Link')); ?>";
	var $lang_copied_quotation_link = "<?php echo e(_lang('Copied Quotation Link')); ?>";
	var $lang_no_user_assigned = "<?php echo e(_lang('No User Assigned')); ?>";
	var $lang_select_milestone = "<?php echo e(_lang('Select Milestone')); ?>";
</script><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/layouts/others/languages.blade.php ENDPATH**/ ?>