

<?php $__env->startSection('content'); ?>

<div class="row">
	<div class="col-12">
		<div class="card">
			<span class="panel-title d-none"><?php echo e(_lang('Payment History')); ?></span>
			<div class="card-body">
			  <table class="table table-bordered data-table">
				<thead>
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
				  
				  <?php $__currentLoopData = $payment_history; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $history): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
					<tr>
						<td><?php echo e(date("$date_format $time_format",strtotime($history->created_at))); ?></td>
						<td><?php echo e($history->company->business_name); ?></td>
						<td><?php echo e($history->title); ?></td>
						<td><?php echo e($history->method); ?></td>					
						<td class="text-right"><b><?php echo e(decimalPlace($history->amount, currency($history->currency))); ?></b></td>			
					</tr>
				  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
				</tbody>
			  </table>
			  
			  <div class="pull-right">
				 <?php echo e($payment_history->links()); ?>

			  </div>
			</div>
		</div>
	</div>
</div>

<?php $__env->stopSection(); ?>



<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/user/payments.blade.php ENDPATH**/ ?>