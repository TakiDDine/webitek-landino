@extends('layouts.app')

@section('content')

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
            {{ _lang('Affiliate page') }}
        </h2>
    </div>

    <div class="bg-white rounded-lg shadow-sm">
        <div class="custom-table">
            <ul style="font-size: 15px;">
                <li>{{ _lang('Link') }}</li>
                <li>{{ _lang('Referrals') }}</li>
                <li>{{ _lang('Total visits') }}</li>
                <li>{{ _lang('Registrations') }}</li>
            </ul>
            <ul style="font-weight: 700;">
                <li>
                    <a href="{{ route('register.affiliate', ['affiliate_id' => user()->affiliate_id]) }}" target="_blank">
                        {{ route('register.affiliate', ['affiliate_id' => user()->affiliate_id]) }}
                    </a>
                </li>
                <li>
                    {{ $data['visitors'] }}
                </li>
                <li>
                    {{ $data['registration'] }}
                </li>
                <li>
                    {{ $data['referrals'] }}
                </li>
            </ul>
        </div>
    </div>
    <div class="bg-white rounded-lg shadow-sm">
        <div class="custom-table _table">
            <h4>
                {{ _lang('Affiliate users') }}
            </h4>
            <ul style="font-size: 15px;">
                <li>{{ _lang('Full name') }}</li>
                <li>{{ _lang('Joined at') }}</li>
            </ul>
            @foreach ($affiliateUsers as $user)
                <ul style="font-weight: 700;">
                    <li>
                        {{ $user->name }}
                    </li>
                    <li>
                        {{ $user->created_at->format('M d, Y') }}
                    </li>
                </ul>
            @endforeach
        </div>
    </div>

@endsection
