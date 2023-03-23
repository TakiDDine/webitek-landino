

<?php $__env->startSection('content'); ?>

<div class="row">
	<div class="col-md-12">
		<a class="btn btn-primary btn-xs" href="<?php echo e(route('features.create')); ?>"><i class="ti-plus"></i> <?php echo e(_lang('Add New')); ?></a>
		<div class="card mt-2">
			<div class="card-body">
			 <span class="panel-title d-none"><?php echo e(_lang('Software Feature List')); ?></span>
				
			 <table class="table table-bordered data-table">
				<thead>
				  <tr>
					<th><?php echo e(_lang('Title')); ?></th>
					<th><?php echo e(_lang('Content')); ?></th>
					<th class="text-center"><?php echo e(_lang('Action')); ?></th>
				  </tr>
				</thead>
				<tbody>
				  
				  <?php $language = get_option('language'); ?>

				  <?php $__currentLoopData = $features; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $feature): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
				  <tr id="row_<?php echo e($feature->id); ?>">
					<td class='title'><?php echo e(get_array_data($feature->title, $language)); ?></td>
					<td class='content'><?php echo e(get_array_data($feature->content, $language)); ?></td>
					
					<td class="text-center">
					    <div class="dropdown">
						  <button class="btn btn-primary dropdown-toggle btn-xs" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
						  <?php echo e(_lang('Action')); ?> <i class="fa fa-angle-down"></i>
						  </button>
						  <form action="<?php echo e(action('FeatureController@destroy', $feature['id'])); ?>" method="post">
							<?php echo e(csrf_field()); ?>

							<input name="_method" type="hidden" value="DELETE">
							
							<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
								<a href="<?php echo e(action('FeatureController@edit', $feature['id'])); ?>" class="dropdown-item"><i class="ti-pencil-alt"></i> <?php echo e(_lang('Edit')); ?></a>
								<a href="<?php echo e(action('FeatureController@show', $feature['id'])); ?>" class="dropdown-item"><i class="ti-eye"></i> <?php echo e(_lang('View')); ?></a>
								<button class="btn-remove dropdown-item" type="submit"><i class="ti-trash"></i> <?php echo e(_lang('Delete')); ?></button>
							</div>
						  </form>
						</div>
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



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/feature/list.blade.php ENDPATH**/ ?>