@php $permissions = permission_list(); @endphp



<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel create-new">
    <a href="javascript:;" data-toggle="modal" data-target="#modal-templates" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/dashboard-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('New project') }}</span>
    </a>
</li>

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('templates')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ url('templates') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/template-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('Templates') }}</span>
    </a>
</li>

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('projects')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ url('projects') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/my-projects-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('Projects') }}</span>
    </a>
</li>

@if (has_feature('websites_limit'))
    <li style="display: none;" class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('projects') || Request::is('projects/create')) kt-menu__item--open @endif"
        data-ktmenu-submenu-toggle="hover" aria-haspopup="true">
        <a href="{{ url('projects') }}" class="kt-menu__link kt-menu__toggle">
            <span class="kt-menu__link-icon">
                <img src="/public/icons/my-projects-dark.svg" alt="">
            </span>

            <span class="kt-menu__link-text">{{ _lang('Projects') }}</span>
            <i class="kt-menu__ver-arrow la la-angle-right"></i>
        </a>
        <div class="kt-menu__submenu ">
            <span class="kt-menu__arrow"></span>
            <ul class="kt-menu__subnav">
                <li class="kt-menu__item @if (Request::is('projects')) kt-menu__item--open @endif" aria-haspopup="true">
                    <a href="{{ url('projects') }}" class="kt-menu__link ">
                        <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                        <span class="kt-menu__link-text">{{ _lang('Projects') }}</span>
                    </a>
                </li>
                <li class="kt-menu__item @if (Request::is('projects/create')) kt-menu__item--open @endif" aria-haspopup="true">
                    <a href="{{ url('projects/create') }}" class="kt-menu__link ">
                        <i class="kt-menu__link-bullet kt-menu__link-bullet--dot"><span></span></i>
                        <span class="kt-menu__link-text">{{ _lang('Add New') }}</span>
                    </a>
                </li>
            </ul>
        </div>
    </li>
@endif

{{-- <li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('membership/my_subscription')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ url('membership/my_subscription') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/icons/payments-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('My Subscription') }}</span>
    </a>
</li> --}}

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('tickets')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ url('tickets') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/support.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('Support') }}</span>
    </a>
</li>


{{-- <li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('domains')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ url('domains') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/domaines.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('Domains') }}</span>
    </a>
</li> --}}

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('profile/edit')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ url('profile/edit') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/settings.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('account') }}</span>
    </a>
</li>

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('payments')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ url('payments') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/payments-dark.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('Payments') }}</span>
    </a>
</li>


<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::url() === route('affiliate.index')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ route('affiliate.index') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">

            <img src="/public/icons/affiliates.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('Affiliate page') }}</span>
    </a>
</li>

<li class="kt-menu__item kt-menu__item--submenu kt-menu__item--rel @if (Request::is('logout')) kt-menu__item--open kt-menu__item--here @endif">
    <a href="{{ url('logout') }}" class="kt-menu__link">
        <span class="kt-menu__link-icon">
            <img src="/public/icons/logout.svg" alt="">
        </span>
        <span class="kt-menu__link-text">{{ _lang('Logout') }}</span>
    </a>
</li>

