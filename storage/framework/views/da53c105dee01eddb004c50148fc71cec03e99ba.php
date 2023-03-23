

<?php $__env->startSection('content'); ?>

<div class="row">
	<div class="col-12">
	    
		<a class="btn btn-primary btn-xs" href="<?php echo e(route('languages.create')); ?>"><i class="ti-plus"></i> <?php echo e(_lang('Add New')); ?></a>
			
		<div class="card mt-2">
			
			<span class="panel-title d-none"><?php echo e(_lang('Languages')); ?></span>
			<div class="card-body">
			 <div class="table-responsive">
				 <table class="table table-bordered">
					<thead>
					  <tr>
						<th><?php echo e(_lang('Language Name')); ?></th>
						<th><?php echo e(_lang('Edit Translation')); ?></th>
						<th><?php echo e(_lang('Remove')); ?></th>
					  </tr>
					</thead>
					<tbody>
					  
					  <?php $__currentLoopData = get_language_list(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $language): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					  <tr>
						<td><?php echo e($language); ?></td>
						<td>
							<a href="<?php echo e(action('LanguageController@edit', $language)); ?>" class="btn btn-secondary btn-xs"><?php echo e(_lang('Edit Translation')); ?></a>
						</td>	
						<td>
							<form action="<?php echo e(action('LanguageController@destroy', $language)); ?>" method="post">
							   <?php echo e(csrf_field()); ?>

							   <input name="_method" type="hidden" value="DELETE">
							   <button class="btn btn-danger btn-xs btn-remove" type="submit"><?php echo e(_lang('Delete')); ?></button>
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
</div>

<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/administration/language/list.blade.php ENDPATH**/ ?>