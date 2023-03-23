

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col-12">
		<div class="card">

			<div class="card-body">
				<h4 class="d-none panel-title"><?php echo e(_lang('Create User')); ?></h4>
				<form method="post" class="validate" autocomplete="off" action="<?php echo e(url('users')); ?>" enctype="multipart/form-data">
				    <div class="row">
						<div class="col-md-6">
							  <?php echo e(csrf_field()); ?>

							  
							  <div class="form-group">
								<label class="control-label"><?php echo e(_lang('Business Name')); ?></label>						
								<input type="text" class="form-control" name="business_name" value="<?php echo e(old('business_name')); ?>" required>
							  </div>
							  
							  <div class="form-group">
								<label class="control-label"><?php echo e(_lang('Name')); ?></label>						
								<input type="text" class="form-control" name="name" value="<?php echo e(old('name')); ?>" required>
							  </div>

							  <div class="form-group">
								<label class="control-label"><?php echo e(_lang('Email')); ?></label>						
								<input type="email" class="form-control" name="email" value="<?php echo e(old('email')); ?>" required>
							  </div>

							  <div class="form-group">
								<label class="control-label"><?php echo e(_lang('Password')); ?></label>						
								<input type="password" class="form-control" name="password" value="<?php echo e(old('password')); ?>" required>
							  </div>
							
							  <div class="form-group">
								<label class="control-label"><?php echo e(_lang('Confirm Password')); ?></label>						
								<input type="password" class="form-control" name="password_confirmation" required>
							  </div>				  
							  
							  <div class="form-group">
									<label class="control-label"><?php echo e(_lang('Status')); ?></label>						
									<select class="form-control select2" id="status" name="status" required>
									  <option value="1"><?php echo e(_lang('Active')); ?></option>
									  <option value="0"><?php echo e(_lang('Inactive')); ?></option>
									</select>
							  </div>
							  

							  <div class="form-group">
								<button type="submit" class="btn btn-primary"><?php echo e(_lang('Save')); ?></button>
								<button type="reset" class="btn btn-danger"><?php echo e(_lang('Reset')); ?></button>
							  </div>
							
						</div>
						
						<?php $free = DB::table('packages')->where('type', 'free')->first(); ?>
						<div class="col-md-6">	

		                      <div class="col-md-12">
								  <div class="form-group">
									<label class="control-label"><?php echo e(_lang('Package')); ?></label>						
									<select id="package" class="form-control" name="package_id" required>
										<option value=""><?php echo e(_lang('Select Package')); ?></option>
										 <?php if(isset($free) && $free != ''): ?>
                                            <option type="<?php echo e($free->type); ?>" value="<?php echo e($free->id); ?>"><?php echo e($free->package_name); ?></option>
                                        <?php endif; ?>
										<?php echo e(create_option('packages','id','package_name',old('package_id'))); ?>

									</select>
								  </div>
							  </div>
							  
							  <div class="col-md-12">
								  <div id="packageType" class="form-group">
									<label class="control-label"><?php echo e(_lang('Package Type')); ?></label>						
									<select class="form-control auto-select" data-selected="<?php echo e(old('package_type')); ?>" id="package_type" name="package_type" required>
										<option value=""><?php echo e(_lang('Select Package')); ?></option>
										<option value="monthly"><?php echo e(_lang('Monthly')); ?></option>
										<option value="yearly"><?php echo e(_lang('Yearly')); ?></option>
									</select>
								  </div>
							  </div>
							  
							  <div class="col-md-12">
								  <div id="membershipType" class="form-group">
									  <label class="control-label"><?php echo e(_lang('Membership Type')); ?></label>						
									  <select class="form-control select2 auto-select" data-selected="<?php echo e(old('membership_type','trial')); ?>" name="membership_type" id="membership_type" required>
										  <option value="trial"><?php echo e(_lang('Trial')); ?></option>
										  <option value="member"><?php echo e(_lang('Paid Member')); ?></option>
									  </select>
								  </div>
							  </div>
							  
		  
							  <div class="col-md-12">
								 <div class="form-group">
									<label class="control-label"><?php echo e(_lang('Profile Picture')); ?> ( 300 X 300 <?php echo e(_lang('for better view')); ?> )</label>						
									<input type="file" class="dropify" name="profile_picture" data-allowed-file-extensions="png jpg jpeg PNG JPG JPEG" data-default-file="">
								 </div>
							  </div>
						</div>
		            </div>			
				</form>
			</div>
	   </div>
	</div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js-script'); ?>

<script>

	const select = document.getElementById('package');

select.addEventListener('change', function handleChange(event) {
	if( select.options[select.selectedIndex].getAttribute('type') == 'free') {
        $('#packageType').removeClass('d-block');
        $('#packageType').addClass('d-none');
        $('#package_type').removeAttr('required');
        $('#package_type').attr('disabled', 'disabled');

		$('#membershipType').removeClass('d-block');
        $('#membershipType').addClass('d-none');
        $('#membership_type').removeAttr('required');
        $('#membership_type').attr('disabled', 'disabled');
    
    } else {
        $('#packageType').removeClass('d-none');
        $('#packageType').addClass('d-block');
        $('#package_type').attr('required', 'required');
        $('#package_type').removeAttr('disabled');

		$('#membershipType').removeClass('d-none');
        $('#membershipType').addClass('d-block');
        $('#membership_type').attr('required', 'required');
        $('#membership_type').removeAttr('disabled');
    }
    });
</script>

<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/user/create.blade.php ENDPATH**/ ?>