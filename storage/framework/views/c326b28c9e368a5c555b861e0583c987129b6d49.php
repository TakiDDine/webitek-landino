




<?php $__env->startSection('content'); ?>
    <style>
        button.clipboard-btn {
            background: none;
            border: none;
        }

        body {
            font-family: "Vazir" !important;
        }

        div#main_alert {
            max-width: 800px;
            margin: auto;
        }

    </style>
    <h2 class="mb-4"><?php echo e(_lang('Profile Settings')); ?></h2>
    <div class="row">
        <div class="col-md-6 mx-auto  bg-white" style="padding: 50px;">
            <div class="row">
                <div class="col-12">

                    <form action="<?php echo e(url('profile/update')); ?>" autocomplete="off"
                        class="form-horizontal form-groups-bordered validate" enctype="multipart/form-data" method="post">
                        <?php echo csrf_field(); ?>
                        <div class="form-group">
                            <label class="control-label"><?php echo e(_lang('Name')); ?></label>
                            <input type="text" class="form-control" name="name" value="<?php echo e($profile->name); ?>" required>
							<?php $__errorArgs = ['name'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
								<div class="text-md text-danger"><?php echo e($message); ?></div>
							<?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                        <div class="form-group">
                            <label class="control-label"><?php echo e(_lang('Email')); ?></label>
                            <input type="text" class="form-control" name="email" value="<?php echo e($profile->email); ?>" required>
							<?php $__errorArgs = ['email'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
								<div class="text-md text-danger"><?php echo e($message); ?></div>
							<?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>

                        <div class="form-group">
                            <label class="control-label"><?php echo e(_lang('Phone')); ?></label>
                            <input type="text" class="form-control" name="phone" value="<?php echo e($profile->phone); ?>" required>
							<?php $__errorArgs = ['phone'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
								<div class="text-md text-danger"><?php echo e($message); ?></div>
							<?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php echo e(_lang('Affiliate URL')); ?></label>
                            <div style="position: relative">
                                <input type="text" id="affiliate_id_input" class="form-control" readonly
                                    value="<?php echo e(route('register.affiliate', ['affiliate_id' => $profile->affiliate_id])); ?>"
                                    required>
                                <button type="button" class="clipboard-btn" data-clipboard-target="#affiliate_id_input"
                                    style="position: absolute;top: 50%;transform: translateY(-50%);left: 10px;">
                                    <?php echo e(_lang('Copy the link')); ?>

                                </button>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn-block btn--blue btn"><?php echo e(_lang('Update Profile')); ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-6 mx-auto  bg-white" style="padding: 50px;">
            <div class="row">
                <div class="col-12">
                    <form action="<?php echo e(url('profile/update_password')); ?>" autocomplete="off"
                        class="form-horizontal form-groups-bordered validate" enctype="multipart/form-data" method="post">
                        <?php echo csrf_field(); ?>
                        <div class="form-group">
                            <label class="control-label"><?php echo e(_lang('Current password')); ?></label>
                            <input type="password" class="form-control" name="current_password" required>
							<?php $__errorArgs = ['current_password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
								<div class="text-md text-danger"><?php echo e($message); ?></div>
							<?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php echo e(_lang('New password')); ?></label>
                            <input type="password" class="form-control" name="password" required>
							<?php $__errorArgs = ['password'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
								<div class="text-md text-danger"><?php echo e($message); ?></div>
							<?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>
                        <div class="form-group">
                            <label class="control-label"><?php echo e(_lang('Confirm new password')); ?></label>
                            <input type="password" class="form-control" name="password_confirmation" required>
							<?php $__errorArgs = ['password_confirmation'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
								<div class="text-md text-danger"><?php echo e($message); ?></div>
							<?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn-block btn--blue btn"><?php echo e(_lang('Update Profile')); ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-4">
        <div class="col-md-6 mx-auto  bg-white" style="padding: 50px;">
            <div class="row">
                <div class="col-12">
                    <form onsubmit="return confirm('هل انت متأكد من حذف الحساب')" action="<?php echo e(url('profile/delete')); ?>"
                        autocomplete="off" class="form-horizontal form-groups-bordered validate"
                        enctype="multipart/form-data" method="post">
                        <?php echo csrf_field(); ?>
                        <?php echo method_field('DELETE'); ?>
                        <h3>
                            حذف الحساب :
                        </h3>
                        <p style="font-size: 18px">
                            عند حذف حسابك أنت تتحمل كافة المسؤولية
                        </p>
                        <div class="form-group">
                            <button type="submit" class="btn btn-block btn-danger"><?php echo e(_lang('Delete account')); ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>


<?php $__env->startSection('js-script'); ?>
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js"></script>

    <script>
        var clipboard = new ClipboardJS('.clipboard-btn');

        clipboard.on('success', function(e) {
            $(e.trigger).text('تم نسخ الرابط !')
        });
    </script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/profile/profile_edit.blade.php ENDPATH**/ ?>