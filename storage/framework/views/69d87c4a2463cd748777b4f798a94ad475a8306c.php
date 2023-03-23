<?php $__env->startSection('content'); ?>

    <style>
        .custom-table:not(._table) li:nth-child(4),
        .custom-table:not(._table) li:nth-child(3),
        .custom-table:not(._table) li:nth-child(2) {
            float: left;
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


        .custom-table ul li:nth-child(2) {
            width: 8%;
        }

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

        .custom-table>ul li {
            font-family: "Vazir" !important;
            font-weight: bold;
        }

        .projects-title {
            padding-right: 15px;
        }

        .projects-title p {
            font-family: "Vazir" !important;
            font-weight: 400;
        }

    </style>

    <div class="mb-4">
        <h2 class="h2">
            <?php echo e(_lang('Affiliate page')); ?>

        </h2>
    </div>

    <div class="bg-white rounded-lg shadow-sm">
        <div class="custom-table">
            <ul style="font-size: 15px;">
                <li><?php echo e(_lang('Link')); ?></li>
                <li><?php echo e(_lang('Referrals')); ?></li>
                <li><?php echo e(_lang('Total visits')); ?></li>
                <li><?php echo e(_lang('Registrations')); ?></li>
            </ul>
            <?php if($data): ?>
                <ul style="font-weight: 700;">
                    <li>
                        <a href="<?php echo e(route('register.affiliate', ['affiliate_id' => auth()->user()->affiliate_id])); ?>" target="_blank">
                            <?php echo e(route('register.affiliate', ['affiliate_id' => auth()->user()->affiliate_id])); ?>

                        </a>
                    </li>
                    <li>
                        <?php echo e($data['visitors']); ?>

                    </li>
                    <li>
                        <?php echo e($data['registration']); ?>

                    </li>
                    <li>
                        <?php echo e($data['referrals']); ?>

                    </li>
                </ul>
                
            <?php endif; ?>
        </div>
    </div>
    <div class="bg-white rounded-lg shadow-sm">
        <div class="custom-table _table">
            <h4>
                <?php echo e(_lang('Affiliate users')); ?>

            </h4>
            <ul style="font-size: 15px;">
                <li><?php echo e(_lang('Full name')); ?></li>
                <li><?php echo e(_lang('Joined at')); ?></li>
            </ul>
            <?php $__currentLoopData = $affiliateUsers; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $user): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <ul style="font-weight: 700;">
                    <li>
                        <?php echo e($user->name); ?>

                    </li>
                    <li>
                        <?php echo e($user->created_at->format('M d, Y')); ?>

                    </li>
                </ul>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/affiliate/index.blade.php ENDPATH**/ ?>