<?php $__env->startSection('content'); ?>
    <style>
        .custom-table li:nth-child(6),
        .custom-table li:nth-child(5),
        .custom-table li:nth-child(4),
        .custom-table li:nth-child(3) {
            float: left;
            text-align: center;
        }

        .custom-table {
            background: white !important;
            position: relative;
            border-radius: 0.375rem;
            background-color: rgb(255, 255, 255);
            box-shadow: rgb(204 211 219 / 15%) 0px 0.3125rem 0.4375rem;
            padding: 20px;
            margin-top: 25px;
        }

        .custom-table ul {
            list-style: none;
            position: relative;
            padding-top: 22px;
            padding-bottom: 22px;
        }

        .custom-table ul li {
            display: inline-block;
        }

        .custom-table ul li:first-child {
            width: 60%;
        }


        /* .custom-table ul li:nth-child(2) {
                                                    width: 8%;
                                                } */

        .custom-table ul li:nth-child(3) {
            width: 8%;

        }

        .custom-table ul li:nth-child(4) {
            width: 8%;

        }


        .custom-table ul li:nth-child(5) {
            width: 8%;

        }

        .custom-table ul li:nth-child(6) {
            width: 8%;

        }

        .custom-table ul::after {
            right: 50%;
            width: calc(100% - 46px);
            height: 1px;
            bottom: 0;
            content: "";
            position: absolute;
            transform: translateX(50%);
            transition: all 0.2s ease-out;
            background-color: rgba(204, 211, 219, 0.5);
        }

        /* .custom-table ul:first-child li {
                                                    font-family: "Vazir" !important;
                                                    font-weight: bold;
                                                } */

        .custom-table li:first-child {
            font-weight: bold;
        }

        .projects-title {
            padding-right: 15px;
        }

        .projects-title p {
            font-family: "Vazir" !important;
            font-weight: 400;
        }

        .wrapper .header {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .logo {
            width: 80px;
        }

        .title {
            margin-top: 15px;
            text-align: center;
        }

    </style>


















    <style>
        ._table {
            background: white;
            border: 1px solid #e5e5e5;
            border-radius: 0.4em;
            padding: 1.5rem 1rem;
            box-shadow: 0px 0px 3px 0.1px #ebebeb;
            font-size: 20px;
        }

        ._table ul {
            list-style: none;
        }

    </style>

    <div class="wrapper">
        <div class="header">
            <img class="logo" src="<?php echo e(asset('/front/logo.svg')); ?>" />
            <h2 class="title">لاندينو</h2>
        </div>

        <div class="custom-table">
            <?php if(!isset($download)): ?>
                <ul>
                    <li><?php echo e(_lang('Id')); ?></li>
                    <li>
                        <?php echo e($payment->id); ?>

                    </li>
                </ul>
            <?php endif; ?>
            <ul>
                <li><?php echo e(_lang('Package')); ?></li>
                <li>
                    <?php echo e($payment->title); ?>

                </li>
            </ul>
            <ul>
                <li><?php echo e(_lang('طريقة الدفع')); ?></li>
                <li>
                    <?php echo e($payment->method); ?>

                </li>
            </ul>
            <ul>
                <li><?php echo e(_lang('Renewal date')); ?></li>
                <li>
                    <?php echo e($payment->getToDate() ??
                        now()->addMonth()->format('M d, Y')); ?>

                </li>
            </ul>
            <ul>
                <li><?php echo e(_lang('العميل')); ?></li>
                <li>
                    <?php echo e(auth()->user()->name); ?>

                </li>
            </ul>
            <ul>
                <li><?php echo e(_lang('Amount')); ?></li>
                <li>
                    <?php echo e($payment->amount); ?> $
                </li>
            </ul>
            
            </ul>
        </div>
    </div>

    <a href="javascript:;" class="mt-2 btn btn-primary" id="continue_payment">
        الذهاب إلى CMI
    </a>
    <form method="post" id="cmi_process_payment" action="" class="d-none">
        <?php echo csrf_field(); ?>
    </form>

    <?php if(isset($download) and $download): ?>
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                setTimeout(() => {
                    window.print()
                }, 1000);
            })
        </script>
    <?php else: ?>
        <script>
            $(document).on('click', '#continue_payment', function(e) {
                e.preventDefault()
                e.stopPropagation()

                $('#cmi_process_payment').submit()
            })
        </script>
    <?php endif; ?>


<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/payments/download.blade.php ENDPATH**/ ?>