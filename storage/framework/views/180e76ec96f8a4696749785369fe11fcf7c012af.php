<div style="height: 28.15vh; overflow-y: scroll">
    <?php $__currentLoopData = $messages->whereNotIn('user_id', [$ticket->user_id])->orderBy('created_at', 'asc')->get()->unique('user_id'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $message): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="card mt-2">
            <div class="card-body">
                <div class="row justify-content-between align-items-center">
                    <div class="col-sm-4 col-md-4 col-lg-3 col-xl-2">
                        <img class="rounded" height="48"
                             src="https://avatars.r-services.eu/<?php echo e($message->user->id); ?>">

                    </div>
                    <div class="col-sm-8 col-md-8 col-lg-9 col-xl-10">
                        <div class="row">
                            <div class="col-12">
                                <?php echo e($message->user->name); ?>

                            </div>
                            <div class="col-12 ">
                                                <span
                                                    class="text-muted"><?php echo e($message->created_at->format(config('laravel-tickets.datetime-format'))); ?></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
</div>
<?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/vendor/laravel-tickets/tickets/partials/users.blade.php ENDPATH**/ ?>