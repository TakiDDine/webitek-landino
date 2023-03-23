<div class="alert alert-<?php echo e($type); ?>" role="alert"><?php echo e($message); ?></div>

<?php if($errors->any()): ?>
    <div class="alert alert-danger">
        <ul>
            <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <li><?php echo e($error); ?></li>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </ul>
    </div>
<?php endif; ?>
<?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/vendor/laravel-tickets/alert.blade.php ENDPATH**/ ?>