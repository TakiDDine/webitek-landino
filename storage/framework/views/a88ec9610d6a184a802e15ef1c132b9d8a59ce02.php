


<?php $__env->startSection('title'); ?>
    الصفحة الرئيسية
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>
    <style>
        .alert-danger {
            color: #842029;
            background-color: #f8d7da;
            border-color: #f5c2c7;
        }

        .alert {
            position: relative;
            padding: 1rem 1rem;
            margin-bottom: 1rem;
            border: 1px solid transparent;
            border-radius: 0.25rem;
        }

        ul {
            list-style: none
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
                                <li><?php echo e(_lang($error)); ?></li>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </ul>
                    </div>
                <?php endif; ?>

                <!--begin::Form-->
                <form method="POST" class="kt-form" action="<?php echo e(route('login')); ?>">
                    <?php echo csrf_field(); ?>

                    <div class="form-group row">
                        <div class="col-md-12">
                            <input id="email" type="email"
                                class="form-control<?php echo e($errors->has('email') ? ' is-invalid' : ''); ?>" name="email"
                                value="<?php echo e(old('email')); ?>" placeholder="<?php echo e(_lang('Email')); ?>" required autofocus>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-12">

                            <input id="password" type="password"
                                class="form-control<?php echo e($errors->has('password') ? ' is-invalid' : ''); ?>" name="password"
                                placeholder="<?php echo e(_lang('Password')); ?>" required>
                        </div>
                    </div>

                    <div class="kt-login__actions mt-3">
                        <a href="<?php echo e(url('reset/password')); ?>" class="kt-link kt-login__link-forgot">
                            <?php echo e(_lang('Forgot Password?')); ?>

                        </a>
                        <button type="submit"
                            class="btn btn-primary btn-elevate kt-login__btn-primary"><?php echo e(_lang('Login')); ?></button>
                    </div>
                </form>
                <!--end::Form-->


                <p class="sign_up">
                    ليس لديك حساب ؟

                    <a href="/register">أنشىء حسابك الآن</a>
                </p>


            </div>



        </div>
    </div>


<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.login', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/auth/login.blade.php ENDPATH**/ ?>