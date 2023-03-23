

<?php $__env->startSection('content'); ?>


<?php if(env('DEMO_MODE') == true): ?>
<div class="alert alert-warning text-center">
	<b><?php echo e(_lang("It’s recommend to login with user account if you want to test the builder, because default admin account is for the general mangament, manage users and packages.")); ?></b>
</div>
<?php endif; ?>

<div class="row" id="charts" style="position: relative; zoom: 1;">
	<div class="col-sm-6 col-md-3">
		<div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-warning">
			<div class="kt-portlet__body kt-portlet__body--fluid">
				<div class="kt-widget26">
					<div class="kt-widget26__content">
						<span class="kt-widget26__number "><span class="kt-currency_before"></span><?php echo e($total_user); ?><span class="kt-currency_after"></span></span>
						<span class="kt-widget26__desc"><?php echo e(_lang('Total Users')); ?></span>
					</div>
				</div>
			</div>
		</div>

	</div>
	<div class="col-sm-6 col-md-3">
		<div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-success">
			<div class="kt-portlet__body kt-portlet__body--fluid">
				<div class="kt-widget26">
					<div class="kt-widget26__content">
						<span class="kt-widget26__number kt-font-success"><span class="kt-currency_before"></span><?php echo e($paid_user); ?><span class="kt-currency_after"></span></span>
						<span class="kt-widget26__desc"><?php echo e(_lang('Paid Users')); ?></span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-sm-6 col-md-3">
		<div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-brand">
			<div class="kt-portlet__body kt-portlet__body--fluid">
				<div class="kt-widget26">
					<div class="kt-widget26__content">
						<span class="kt-widget26__number kt-font-brand"><?php echo e($trial_user); ?></span>
						<span class="kt-widget26__desc"><?php echo e(_lang('Trial Users')); ?></span>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-sm-6 col-md-3">
		<div class="kt-portlet kt-portlet--height-fluid kt-portlet--border-bottom-dark">
			<div class="kt-portlet__body kt-portlet__body--fluid">
				<div class="kt-widget26">
					<div class="kt-widget26__content">
						<span class="kt-widget26__number kt-font-dark"><?php echo e(decimalPlace($total_payment, currency())); ?></span>
						<span class="kt-widget26__desc"><?php echo e(_lang('Total Payment')); ?></span>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>


<!--New Users-->
<div class="row">
   <div class="col-lg-12">
		<div class="card">
			<div class="card-body">
				<h4 class="header-title mt-0 mb-3"><?php echo e(_lang('New Registered Users')); ?></h4>                                    
				<div class="table-responsive browser_users">
					<table class="table table-bordered mb-0">
						<thead class="thead-light">
							<tr>
								<th><?php echo e(_lang('Name')); ?></th>
								<th><?php echo e(_lang('Company')); ?></th>
								<th><?php echo e(_lang('Email')); ?></th>
								<th><?php echo e(_lang('Package')); ?></th>
								<th class="text-center"><?php echo e(_lang('Membership')); ?></th>
								<th class="text-center"><?php echo e(_lang('Details')); ?></th>
							</tr>
						</thead>
						<tbody>
						    <?php if($news_users->count() > 0): ?>
								<?php $__currentLoopData = $news_users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
									<tr id="row_<?php echo e($user->id); ?>">
										<td class='name'>
										<div class="media">
											<img src="<?php echo e($user->profile_picture != "" ? asset('public/uploads/profile/'.$user->profile_picture) : asset('public/images/avatar.png')); ?>" alt="avatar" class="thumb-sm rounded-circle mr-2">                                       
											<div class="media-body align-self-center text-truncate">
												<h6 class="mt-0 text-dark"><?php echo e(_lang('USER ID')); ?> - #<?php echo e($user->id); ?></h6>
												<p class="text-muted mb-0"><?php echo e($user->name); ?></p>
											</div><!--end media-body-->
										</div>
										</td>
										<td class='company'><?php echo e($user->company->business_name); ?></td>			
										<td class='email'><?php echo e($user->email); ?></td>		
										<?php if($user->company->membership_type == 'Free'): ?>	
										<td class='package_id'><?php echo clean(status(ucwords($user->company->membership_type), 'success')); ?></td>
										<?php else: ?> 
										<td class='package_id'><?php echo e($user->company->package->package_name); ?>(<?php echo e(ucwords($user->company->package_type)); ?>)</td>
										<?php endif; ?>
										<td class='membership_type text-center'><?php echo $user->company->membership_type == 'trial' ? clean(status(ucwords($user->company->membership_type), 'danger')) : clean(status(ucwords($user->company->membership_type), 'success')); ?></td>		
										<td class="text-center">
										<a href="<?php echo e(action('UserController@show', $user['id'])); ?>" data-title="<?php echo e($user->name); ?>" class="btn btn-primary btn-xs ajax-modal"><?php echo e(_lang('View')); ?></a>
										</td>
									</tr>
								<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
							<?php else: ?>
								<tr >
									<td colspan="6"><?php echo e(_lang('No data found')); ?>.</td>
								</tr>
							<?php endif; ?>
						</tbody>
					</table> <!--end table-->                                               
				</div><!--end /div-->
			</div><!--end card-body-->
		</div><!--end card-->
	</div>
</div>
<!--End New Users-->


<!--Recent Payments-->
<div class="row">
   <div class="col-lg-12">
		<div class="card">
			<div class="card-body">
				<h4 class="header-title mt-0 mb-3"><?php echo e(_lang('Recent Payments')); ?></h4>                                    
				<div class="table-responsive browser_users">
					<table class="table table-bordered mb-0">
						<thead class="thead-light">
							<tr>
								<th><?php echo e(_lang('Date')); ?></th>
								<th><?php echo e(_lang('Company')); ?></th>
								<th><?php echo e(_lang('Package')); ?></th>
								<th><?php echo e(_lang('Method')); ?></th>
								<th class="text-right"><?php echo e(_lang('Amount')); ?></th>
							</tr>
						</thead>

						<tbody>
							<?php $date_format = get_option('date_format','Y-m-d'); ?>
							<?php $time_format = get_option('time_format',24) == '24' ? 'H:i' : 'h:i A'; ?>

						    <?php if($news_users->count() > 0): ?>
								<?php $__currentLoopData = $recent_payment; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $history): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
									<tr>
										<td><?php echo e(date("$date_format $time_format",strtotime($history->created_at))); ?></td>
										<td><?php echo e($history->company->business_name); ?></td>
										<td><?php echo e($history->title); ?>(<?php echo e(ucwords($history->package_type)); ?>)</td>
										<td><?php echo e($history->method); ?></td>					
										<td class="text-right"><b><?php echo e($history->currency.' '.$history->amount); ?></b></td>			
									</tr>
								<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
							<?php else: ?>
								<tr >
									<td colspan="5"><?php echo e(_lang('No data found')); ?>.</td>
								</tr>
							<?php endif; ?>
						</tbody>
					</table> <!--end table-->                                               
				</div><!--end /div-->
			</div><!--end card-body-->
		</div><!--end card-->
	</div>
</div>
<!--End Recent Payments-->

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/dashboard-admin.blade.php ENDPATH**/ ?>