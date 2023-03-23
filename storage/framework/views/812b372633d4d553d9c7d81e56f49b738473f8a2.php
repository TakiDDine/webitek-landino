<?php $__env->startSection('content'); ?>
    <div class="card">
        <div class="card-header">
            <?php echo app('translator')->get('Tickets'); ?>
        </div>
        <div class="card-body">
            <?php echo $__env->renderWhen(session()->has('message'), 'laravel.tickets.alert', ['message' => session()->get('message')], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path'])); ?>

            <div class="table-responsive">
                <table class="table table-striped">
                    <thead class="th">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><?php echo app('translator')->get('Subject'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Priority'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('State'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Open by'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Last Update'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Created at'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Action'); ?></th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $__currentLoopData = $tickets; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ticket): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <th scope="row"><?php echo e($ticket->id); ?></th>
                            <td><?php echo e($ticket->subject); ?></td>
                            <td><?php echo app('translator')->get(ucfirst(strtolower($ticket->priority))); ?></td>
                            <td><?php echo app('translator')->get(ucfirst(strtolower($ticket->state))); ?></td>
                            <td><?php echo e($ticket->opener()->exists()?$ticket->opener()->first()->name:$ticket->user()->first()->name); ?></td>
                            <td><?php echo e($ticket->updated_at ? $ticket->updated_at->format(config('laravel-tickets.datetime-format')) : trans('Not updated')); ?></td>
                            <td><?php echo e($ticket->created_at ? $ticket->created_at->format(config('laravel-tickets.datetime-format')) : trans('Not created')); ?></td>
                            <td>
                                <a href="<?php echo e(route('laravel-tickets.tickets.show', compact('ticket'))); ?>"
                                   class="btn btn-primary"><?php echo app('translator')->get('Show'); ?></a>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </tbody>
                </table>

                <div class="mt-2 d-flex justify-content-center">
                    <?php echo $tickets->links('pagination::bootstrap-4'); ?>

                </div>
            </div>

        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php echo $__env->make(config('laravel-tickets.layouts'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/vendor/rexlmanu/laravel-tickets/src/../resources/views/tickets/index.blade.php ENDPATH**/ ?>