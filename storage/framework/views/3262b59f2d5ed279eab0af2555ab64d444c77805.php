<div class="card panel-default">
<div class="card-body">
    <?php $date_format = get_option('date_format','Y-m-d'); ?>
	
    <table class="table table-bordered">
		<tr><td colspan="2" class="text-center"><img class="thumb-xl rounded" src="<?php echo e($user->profile_picture != "" ? asset('public/uploads/profile/'.$user->profile_picture) : asset('public/images/avatar.png')); ?>"></td></tr>
		<tr><td><?php echo e(_lang('Business Name')); ?></td><td><?php echo e($user->company->business_name); ?></td></tr>
		<tr><td><?php echo e(_lang('Admin Name')); ?></td><td><?php echo e($user->name); ?></td></tr>
		<tr><td><?php echo e(_lang('Admin Email')); ?></td><td><?php echo e($user->email); ?></td></tr>
		<tr><td><?php echo e(_lang('Status')); ?></td><td><?php echo $user->company->status == 1 ? clean(status(_lang('Active'), 'success')) : clean(status(_lang('In-Active'), 'danger')); ?></td></tr>
		<?php if($user->user_type == 'user'): ?>
			<?php if($user->company->package->type == 'free'): ?>
			<tr><td><?php echo e(_lang('Package')); ?></td><td><?php echo status($user->company->package->package_name, 'success'); ?></td></tr>	
			<tr><td><?php echo e(_lang('Package Valid To')); ?></td><td><?php echo e(_lang('Forever')); ?></td></tr>	
			<?php else: ?>
			<tr><td><?php echo e(_lang('Package')); ?></td><td><?php echo e($user->company->package->package_name); ?>(<?php echo e(ucwords($user->company->package_type)); ?>)</td></tr>	
			<tr><td><?php echo e(_lang('Package Valid To')); ?></td><td><?php echo e(date($date_format, strtotime($user->company->valid_to))); ?></td></tr>	
			<?php endif; ?>
	        <tr>
	        	<td><?php echo e(_lang('Membersip Type')); ?></td><td><?php echo $user->company->membership_type == 'trial' ? clean(status(ucwords($user->company->membership_type), 'danger')) : clean(status(ucwords($user->company->membership_type), 'success')); ?></td>
	        </tr>
		<?php endif; ?>
    </table>

    <?php if($user->user_type == 'user'): ?>
	    <table class="table table-striped">
	    	<tr>
	    		<td colspan="2" class="text-center"><b><?php echo e(_lang('Package Details')); ?></b></td>
	    	</tr>
	    	<tr>
	    		<td><b><?php echo e(_lang('Feature')); ?></b></td>
	    		<td class="text-center"><b><?php echo e(_lang('Avaialble Limit')); ?></b></td>
	    	</tr>
	    	<tr>
	    		<td><?php echo e(_lang('Websites Limit')); ?></td>
	    		<td class="text-center"><?php echo e($user->company->websites_limit); ?></td>
	    	</tr>
	    	<tr>
	    		<td><?php echo e(_lang('Recurring Transaction')); ?></td>
	    		<td class="text-center"><?php echo e(ucwords($user->company->recurring_transaction)); ?></td>
	    	</tr>
	    	<tr>
	    		<td><?php echo e(_lang('Online Payment')); ?></td>
	    		<td class="text-center"><?php echo e(ucwords($user->company->online_payment)); ?></td>
	    	</tr>
	    </table>
    <?php endif; ?>
</div>
</div>
<?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/user/modal/view.blade.php ENDPATH**/ ?>