<div style="height: 28.15vh; overflow-y: scroll">
    <?php $__currentLoopData = $messages->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $message): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php $__currentLoopData = $message->uploads()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $upload): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="card mt-2">
                <div class="card-body">
                    <div class="row justify-content-between align-items-center">
                        <div class="col-12">
                            <div class="row">
                                <div class="col-12">
                                    <a href="<?php echo e(route('laravel-tickets.tickets.download', ['ticket' => $ticket, 'ticketUpload' => $upload])); ?>"><?php echo e(basename($upload->path)); ?></a>
                                </div>
                                <div class="col-12 ">
                                                <span class="text-muted">
                                                    <?php echo e($message->user->name); ?> <?php echo e($upload->created_at->format(config('laravel-tickets.datetime-format'))); ?>

                                                </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/vendor/laravel-tickets/tickets/partials/files.blade.php ENDPATH**/ ?>