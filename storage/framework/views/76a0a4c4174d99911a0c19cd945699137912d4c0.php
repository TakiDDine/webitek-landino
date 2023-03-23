

<?php $__env->startSection('content'); ?>

    <?php if(\Session::has('paypal_success')): ?>
        <div class="alert alert-success text-center">
            <b><?php echo e(\Session::get('paypal_success')); ?></b>
        </div>
        <br>
    <?php endif; ?>


    <?php if(\Session::has('cih_success')): ?>
        <div class="alert alert-success text-center">
            <b><?php echo e(\Session::get('cih_success')); ?></b>
        </div>
        <br>
    <?php endif; ?>

    <?php
    $currency = currency();
    $date_format = get_company_option('date_format', 'Y-m-d');
    ?>

    <!--Start Card-->
    <div class="row d-flex align-items-stretch">

<style>
    .dashboard-home {
    text-align: center;
    width: 100%;
}
</style>


            <div class="dashboard-home">
            <h2>   مرحباً بك في لاندينو    </h2>  

            <p>
                الآن يمكنك التوجه ومعرفة جميع المعلومات الأساسية التي سوف تساعدك في العمل على المشروع بشكل كامل 
                <br>
                لن يكون هناك أي اختلاف او فرق في العمل ان شاء الله
            </p>

            <br>
            

            <iframe width="760" height="415" src="https://www.youtube.com/embed/KYKh2SFQtEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            <br>
            <br>
            <br>
            <h3>	
                جديد الموقع 

            </h3>

            <br>
            <ul>
                <li>  [01/12/2021]   تم اضافة قالب جديد لآلة الحلاقة   </li>
            </ul>

            </div>
    </div>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('js-script'); ?>
    <script src="<?php echo e(asset('backend/assets/js/ajax-datatable/projects.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/dashboard-user.blade.php ENDPATH**/ ?>