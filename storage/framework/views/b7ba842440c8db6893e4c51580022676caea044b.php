

<?php $__env->startSection('content'); ?>

<div class="row">
	<div class="col-12">
	    <a class="btn btn-primary btn-xs ajax-modal" data-title="<?php echo e(_lang('Add User')); ?>" href="<?php echo e(route('users.create')); ?>"><i class="ti-plus"></i> <?php echo e(_lang('Add New')); ?></a>
		<div class="card mt-2"> 
			<div class="card-body">
				<h4 class="mt-0 header-title d-none panel-title"><?php echo e($title); ?></h4>
				<table class="table table-bordered data-table">
					<thead>
					  <tr>
						<th><?php echo e(_lang('ID')); ?></th>
						<th class="text-center"><?php echo e(_lang('Avatar')); ?></th>
						<th><?php echo e(_lang('Business Name')); ?></th>
						<th><?php echo e(_lang('Email')); ?></th>
						<th><?php echo e(_lang('Package')); ?></th>
						<th class="text-center"><?php echo e(_lang('Membership')); ?></th>
						<th><?php echo e(_lang('Status')); ?></th>
						<th class="text-center"><?php echo e(_lang('Action')); ?></th>
					  </tr>
					</thead>
					<tbody>
					  
					  <?php $__currentLoopData = $users; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
						<tr id="row_<?php echo e($user->id); ?>">
							<td class='id'><?php echo e($user->id); ?></td>
							<td class="text-center">
								<img src="<?php echo e(asset('public/uploads/profile/'.$user->profile_picture)); ?>" class="thumb-sm rounded-circle mr-2">
							</td>
							<td class='name'><?php echo e($user->company->business_name); ?></td>
							<td class='email'><?php echo e($user->email); ?></td>					
							<?php if($user->company->package->type == 'free'): ?>
							<td class='package_id'><?php echo status($user->company->package->package_name, 'success'); ?></td>
							<?php else: ?> 
							<td class='package_id'><?php echo e($user->company->package->package_name); ?>(<?php echo e(ucwords($user->company->package_type)); ?>)</td>
							<?php endif; ?>
							<td class='membership_type text-center'><?php echo $user->company->membership_type == 'trial' ? clean(status(ucwords($user->company->membership_type), 'danger')) : clean(status(ucwords($user->company->membership_type), 'success')); ?></td>					
							<td class='status'><?php echo $user->company->status == 1 ? clean(status(_lang('Active'), 'success')) : clean(status(_lang('In-Active'), 'danger')); ?></td>					
							<td class="text-center">
							  <form action="<?php echo e(action('UserController@destroy', $user['id'])); ?>" method="post">
								<a href="<?php echo e(action('UserController@edit', $user['id'])); ?>" data-title="<?php echo e(_lang('Update User')); ?>" class="btn btn-outline-warning btn-xs ajax-modal"><?php echo e(_lang('Edit')); ?></a>
								<a href="<?php echo e(action('UserController@show', $user['id'])); ?>" data-title="<?php echo e(_lang('View User')); ?>" class="btn btn-outline-primary btn-xs ajax-modal"><?php echo e(_lang('View')); ?></a>
								<?php echo e(csrf_field()); ?>

								<input name="_method" type="hidden" value="DELETE">
								<button class="btn btn-outline-danger btn-xs btn-remove" type="submit"><?php echo e(_lang('Delete')); ?></button>
							  </form>
							</td>
						</tr>
					  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>

<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/user/list.blade.php ENDPATH**/ ?>