

<?php $__env->startSection('content'); ?>
<div class="row">
	<div class="col-md-4">
		<div class="card">		
			<span class="panel-title d-none"><?php echo e(_lang('Add New Language')); ?></span>

			<div class="card-body">
			  <form method="post" class="validate" autocomplete="off" action="<?php echo e(url('languages')); ?>" enctype="multipart/form-data">
				<?php echo e(csrf_field()); ?>

				<div class="row">
				    <div class="col-md-12">
						<div class="form-group">
							<label class="control-label"><?php echo e(_lang('Language Name')); ?></label>						
							<input type="text" class="form-control" name="language_name" value="<?php echo e(old('language_name')); ?>" required>
						</div>
						<div class="form-group">
							<label class="control-label"><?php echo e(_lang('Language Direction')); ?></label>						
							<select class="form-control auto-select" data-selected="<?php echo e(old('language_direction','ltr')); ?>" name="language_direction" required>
								<option value="ltr"><?php echo e(_lang('LTR')); ?></option>
								<option value="rtl"><?php echo e(_lang('RTL')); ?></option>
							</select>
						</div>
						<div class="form-group">
							<label class="control-label"><?php echo e(_lang('Language Flag')); ?></label>					
							<input type="file" class="form-control dropify" name="flag" data-max-file-size="2M" data-allowed-file-extensions="png jpg jpeg PNG JPG JPEG" required>
						</div>
					</div>
					
					<div class="col-md-12">
						<div class="form-group">
							<button type="submit" class="btn btn-primary"><?php echo e(_lang('Create Language')); ?></button>
						</div>
					</div>
				</div>
			  </form>
			</div>
	  	</div>
 	</div>
</div>
<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/administration/language/create.blade.php ENDPATH**/ ?>