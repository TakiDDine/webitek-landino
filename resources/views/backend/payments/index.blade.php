@extends('layouts.app')

@section('content')

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

    </style>

    <div class="row">
        <div class="col-12">
            <h2> {{ _lang('My payments') }}</h2>
        </div>
        <div class="col-lg-12">
            <div class="custom-table">
                <ul>
                    <li style="width:10%">{{ _lang('Id') }}</li>
                    <li style="width:50%">{{ _lang('Package') }}</li>
                    <li>{{ _lang('الفاتورة') }}</li>
                    <li>{{ _lang('طريقة الدفع') }}</li>
                    <li>{{ _lang('Status') }}</li>
                    <li>{{ _lang('Renewal date') }}</li>
                    <li>{{ _lang('Amount') }}</li>
                </ul>

                @foreach ($payments as $payment)
                    <ul>
                        <li style="width:10%">
                            {{ $payment->id }}
                        </li>
                        <li style="width:50%">
                            {{ $payment->title }}
                        </li>
                        <li>
                            <a style="display: inline;" class="btn btn--blue" @if (!$payment->getToDate()) href="javascript:;" style="cursor: not-allowed;opacity: 0.5" @else href="{{url("/payments/$payment->id/download")}}" @endif>
                                تحميل الفاتورة
                            </a>
                        </li>
                        <li>
                            {{ $payment->method }}
                        </li>
                        <li>
                            <span @if ($payment->getToDate()) class="badge badge-success" @else class="badge badge-danger" @endif>
                                {{ _lang($payment->status) }}
                            </span>
                        </li>
                        <li>
                            {{ $payment->getToDate() }}
                        </li>
                        <li>
                            {{ $payment->amount }} $
                        </li>
                    </ul>
                @endforeach
            </div>
        </div>
    </div>

@endsection
