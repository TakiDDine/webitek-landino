

<?php $__env->startSection('content'); ?>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-signin my-5">
                <div class="card-header text-center"><?php echo e(_lang('Verify Your Email Address')); ?></div>

                <div class="card-body text-center">
                    <?php if(session('resent')): ?>
                        <div class="alert alert-success" role="alert">
                            <?php echo e(_lang('A fresh verification link has been sent to your email address.')); ?>

                        </div>
                    <?php endif; ?>

                    <?php echo e(_lang('Before proceeding, please check your email for a verification link.')); ?>

                    <?php echo e(_lang('If you did not receive the email')); ?>,
                    <form action="<?php echo e(route('verification.resend')); ?>" method="POST" class="d-inline">
                        <?php echo csrf_field(); ?>
                        <button type="submit" class="d-inline btn btn-link p-0">
                        <?php echo e(_lang('click here to request another')); ?>

                        </button>
                    </form>

                </div>
            </div>
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.login', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/auth/verify.blade.php ENDPATH**/ ?>