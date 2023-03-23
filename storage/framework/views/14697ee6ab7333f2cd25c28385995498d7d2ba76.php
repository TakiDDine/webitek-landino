


<?php $__env->startSection('title'); ?>
    الصفحة الرئيسية
<?php $__env->stopSection(); ?>


<?php $__env->startSection('content'); ?>
    <style>
        .alert-danger {
            color: #842029;
            background-color: #f8d7da;
            border-color: #f5c2c7;
            text-align: right;
        }

        .alert {
            position: relative;
            padding: 1rem 1rem;
            margin-bottom: 1rem;
            border: 1px solid transparent;
            border-radius: 0.25rem;
        }

        .iti.iti--allow-dropdown {
            width: 100% !important;
            margin-bottom: 15px !important;
            direction: ltr;
        }

        input#telephone {
            direction: rtl;
        }

        a {
            color: #3081e9;
            text-decoration: underline;
        }

    </style>
    <div class="login-wrapper">
        <div class="row">
            <div class="login-card">
                <a href="/">
                    <img src="<?php echo e(asset('front/logo.svg')); ?>">
                </a>
                <h1>مرحباً بك </h1>
                <p>يمكنك ادخال البيانات في الحقول التالية </p>
                <?php if($errors->count() > 0): ?>
                    <div class="alert alert-danger">

                        <ul>

                            <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <li><?php echo e($error); ?></li>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                        </ul>

                    </div>
                <?php endif; ?>
                <form method="POST" class="form-signup" autocomplete="off"
                    action="<?php echo e(isset($affiliate_id) && $affiliate_id ? url("/s/$affiliate_id") : route('register')); ?>">
                    <?php echo csrf_field(); ?>
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input id="name" type="text" placeholder="<?php echo e(_lang('Name')); ?>"
                                class="form-control<?php echo e($errors->has('name') ? ' is-invalid' : ''); ?>" name="name"
                                value="<?php echo e(old('name')); ?>" required autofocus>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input id="email" type="email" placeholder="<?php echo e(_lang('E-Mail Address')); ?>"
                                class="form-control<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" name="email"
                                value="<?php echo e(old('email')); ?>" required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input id="telephone"
                                oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                type="text" placeholder="<?php echo e(_lang('رقم الهاتف')); ?>" class="form-control" name="phone"
                                required>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-md-12">
                            <input id="password" type="password" placeholder="<?php echo e(_lang('Password')); ?>"
                                class="form-control<?php echo e($errors->has('password') ? ' is-invalid' : ''); ?>" name="password"
                                required>

                        </div>
                    </div>
                    <p style="margin-bottom: 5px;">
                        بإنشائك الحساب انت توافق على <a href="/terms">شروط الإستخدام</a>
                    </p>
                    <div class="form-group row mb-0">
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-primary btn-block register-btn">
                                <?php echo e(_lang('Register')); ?>

                            </button>
                        </div>
                    </div>
                </form>
                <p class="sign_up">
                    لديك حساب ؟
                    <a href="/login"> يمكنك تسجيل الدخول </a>
                </p>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>


<?php $__env->startSection('js'); ?>

    <script>
        $("#telephone").intlTelInput({
            initialCountry: "ma"
        });
    </script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.login', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/auth/register.blade.php ENDPATH**/ ?>