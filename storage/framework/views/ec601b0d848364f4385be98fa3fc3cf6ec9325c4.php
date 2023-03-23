<?php $permissions = permission_list(); ?>



<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel create-new">
    <a href="javascript:;" data-toggle="modal" data-target="#modal-templates" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/dashboard-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text"><?php echo e(_lang('New project')); ?></span>
    </a>
</li>

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel <?php if(Request::is('templates')): ?> kt-menu__item--open kt-menu__item--here <?php endif; ?>">
    <a href="<?php echo e(url('all_templates')); ?>" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/template-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text"><?php echo e(_lang('Templates')); ?></span>
    </a>
</li>

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel <?php if(Request::is('projects')): ?> kt-menu__item--open kt-menu__item--here <?php endif; ?>">
    <a href="<?php echo e(url('projects')); ?>" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/my-projects-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text"><?php echo e(_lang('Projects')); ?></span>
    </a>
</li>

<?php if(has_feature('websites_limit')): ?>
    <li style="display: none;" class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel <?php if(Request::is('projects') || Request::is('projects/create')): ?> kt-menu__item--open <?php endif; ?>"
        data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
        <a href="<?php echo e(url('projects')); ?>" class="kt-menu__link kt-menu__toggle">
            <span class="kt-menu__link-icon">
                <img src="/public/icons/my-projects-dark.svg" alt="">
            </span>

            <span class="kt-menu__link-text"><?php echo e(_lang('Projects')); ?></span>
            <i class="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        <div class="kt-menu__submenu ">
            <span class="kt-menu__arrow"></span>
            <ul class="kt-menu__subnav">
                <li class="kt-menu__item <?php if(Request::is('projects')): ?> kt-menu__item--open <?php endif; ?>" aria-haspopup="true">
                    <a href="<?php echo e(url('projects')); ?>" class="kt-menu__link ">
                        <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                        <span class="kt-menu__link-text"><?php echo e(_lang('Projects')); ?></span>
                    </a>
                </li>
                <li class="kt-menu__item <?php if(Request::is('projects/create')): ?> kt-menu__item--open <?php endif; ?>" aria-haspopup="true">
                    <a href="<?php echo e(url('projects/create')); ?>" class="kt-menu__link ">
                        <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                        <span class="kt-menu__link-text"><?php echo e(_lang('Add New')); ?></span>
                    </a>
                </li>
            </ul>
        </div>
    </li>
<?php endif; ?>



<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel <?php if(Request::is('tickets')): ?> kt-menu__item--open kt-menu__item--here <?php endif; ?>">
    <a href="<?php echo e(url('tickets')); ?>" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/support.svg" alt="">
        </span>
        <span class="kt-menu__link-text"><?php echo e(_lang('Support')); ?></span>
    </a>
</li>




<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel <?php if(Request::is('profile/edit')): ?> kt-menu__item--open kt-menu__item--here <?php endif; ?>">
    <a href="<?php echo e(url('profile/edit')); ?>" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/settings.svg" alt="">
        </span>
        <span class="kt-menu__link-text"><?php echo e(_lang('account')); ?></span>
    </a>
</li>

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel <?php if(Request::is('payments')): ?> kt-menu__item--open kt-menu__item--here <?php endif; ?>">
    <a href="<?php echo e(url('payments')); ?>" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/payments-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text"><?php echo e(_lang('Payments')); ?></span>
    </a>
</li>


<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel <?php if(Request::url() === route('affiliate.index')): ?> kt-menu__item--open kt-menu__item--here <?php endif; ?>">
    <a href="<?php echo e(route('affiliate.index')); ?>" class="kt-menu__link">
        <span class="kt-menu__link-icon">

            <img src="/public/icons/affiliates.svg" alt="">
        </span>
        <span class="kt-menu__link-text"><?php echo e(_lang('Affiliate page')); ?></span>
    </a>
</li>

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel <?php if(Request::is('logout')): ?> kt-menu__item--open kt-menu__item--here <?php endif; ?>">
    <a href="<?php echo e(url('logout')); ?>" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/logout.svg" alt="">
        </span>
        <span class="kt-menu__link-text"><?php echo e(_lang('Logout')); ?></span>
    </a>
</li>

<?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/layouts/menus/user.blade.php ENDPATH**/ ?>