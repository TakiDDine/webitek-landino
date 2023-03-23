<?php $__env->startSection('content'); ?>
    <style>
        .custom-table li:nth-child(4),
        .custom-table li:nth-child(3),
        .custom-table li:nth-child(2) {
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

        .custom-table ul:first-child li {
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

        .modal-body {
            padding: 20px 40px !important;
            background: white !important;
        }

    </style>
    <div class="row">
        <div class="col-12 text-right">
            <div class="row">
                <div class="col-6  text-left projects-title">
                    <h2>مشاريعي</h2>
                    <p>جميع المشاريع التي قمت بإنشائها تظهر هنا</p>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="custom-table">
                <ul>
                    <li><?php echo e(_lang('Project')); ?></li>
                    <li class="text-center"><?php echo e(_lang('Delete')); ?></li>
                    <li class="text-center"><?php echo e(_lang('Settings')); ?></li>
                    <li class="text-center"><?php echo e(_lang('Edit')); ?></li>
                </ul>
                <?php $__currentLoopData = $projects; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $project): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <ul>
                        <li>
                            <?php echo e($project->name); ?>

                        </li>
                        <li class="text-center">
                            <form action="/projects/<?php echo e($project->id); ?>/delete" method="post"
                                onsubmit="return confirm('هل انت متأكد من حذف المشروع ؟')">
                                <?php echo method_field('delete'); ?>
                                <?php echo csrf_field(); ?>
                                <button type="submit" style="border: none; background: transparent">
                                    <img src="/icons/delete-dark.svg" alt="">
                                </button>
                            </form>
                        </li>
                        <li class="text-center">
                            <a href="javascript:;" data-url="/projects/<?php echo e($project->id); ?>/edit" class="edit-project">
                                <img src="/icons/settings.svg" alt="">
                            </a>
                        </li>
                        <li class="text-center">
                            <a href="/projects/<?php echo e($project->id); ?>/edit">
                                <img src="/icons/edit-dark.svg" alt="">
                            </a>
                        </li>
                    </ul>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
            <div class="card mt-2" style="display: none">
                <span class="panel-title d-none"><?php echo e(_lang('Project List')); ?></span>
                <div class="card-body">
                    <table id="projects_table" class="table table-bordered">
                        <thead>
                            <tr>
                                <th><?php echo e(_lang('Name')); ?></th>
                                <th class="text-center"><?php echo e(_lang('Action')); ?></th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div id="resultModal"></div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('js-script'); ?>
    <script>
        $('.edit-project').on('click', function(e) {
            e.preventDefault()

            $.ajax({
                url: $(this).data('url'),
                success: r => {
                    $('#resultModal').html(r)
                    $('#edit-project-modal').modal('show')
                }
            })
        })
    </script>
    <script src="<?php echo e(asset('backend/assets/js/ajax-datatable/projects.js')); ?>"></script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/backend/accounting/project/list.blade.php ENDPATH**/ ?>