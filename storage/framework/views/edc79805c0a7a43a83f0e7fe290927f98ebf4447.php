

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col-6">
	<div class="card">

	<div class="card-body">
		<h4 class="d-none panel-title"><?php echo e(_lang('Offline Payment')); ?></h4>
		<form method="post" id="offline-payments" class="validate" autocomplete="off" action="<?php echo e(url('offline_payment/store')); ?>">
		    <div class="row">
				<div class="col-md-12">
					  <?php echo e(csrf_field()); ?>

					  
					  <div class="form-group">
						<label class="control-label"><?php echo e(_lang('User')); ?></label>						
						<select class="form-control select2" id="user" name="user" required>
							<option value=""><?php echo e(_lang('Select User')); ?></option>
							<?php $__currentLoopData = \App\User::where('user_type','user')->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
								<option value="<?php echo e($user->id); ?>" data-package="<?php echo e($user->company->package_id); ?>" data-type="<?php echo e($user->company->package_type); ?>"><?php echo e($user->name.' ('.$user->email.')'); ?></option>
						    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
						</select>  
					  </div>
					  
					  <div class="form-group">
						<label class="control-label"><?php echo e(_lang('Package')); ?></label>						
						<select class="form-control" id="package" name="package" required>
							<option value=""><?php echo e(_lang('Select Package')); ?></option>
							<?php echo e(create_option('packages','id','package_name')); ?>

						</select>  
					  </div>	

					  <div class="form-group">
							<label class="control-label"><?php echo e(_lang('Package Type')); ?></label>	
							<select class="form-control" id="package_type" name="package_type" required>
								<option value=""><?php echo e(_lang('Select Package Type')); ?></option>
								<option value="monthly"><?php echo e(_lang('Monthly Pack')); ?></option>
								<option value="yearly"><?php echo e(_lang('Yearly Pack')); ?></option> 
							</select>  					  
					  </div>
						
					  <div class="form-group">
						<button type="submit" class="btn btn-primary"><?php echo e(_lang('Make Payment')); ?></button>
					  </div>
				</div>
            </div>			
		</form>
	</div>
  </div>
 </div>
</div>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/offline_payment/create.blade.php ENDPATH**/ ?>