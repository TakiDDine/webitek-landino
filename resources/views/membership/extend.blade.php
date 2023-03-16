@extends('layouts.app')

@section('content')
    <style>
        body {
            font-family: 'Cairo', sans-serif !important;
        }

        .icon__2kAHX {
            width: 1.5rem;
            height: 1.5rem;
            fill: currentColor;
        }

        .tick__2NJXI {
            width: .625rem;
            height: .5rem;
        }

        .jss493 {
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
            z-index: 0;
            position: absolute;
            overflow: hidden;
            border-radius: inherit;
            pointer-events: none;
        }

        /*! CSS Used from: Embedded */
        .jss313 {
            color: inherit;
            border: 0;
            margin: 0;
            cursor: pointer;
            display: inline-flex;
            outline: none;
            padding: 0;
            position: relative;
            align-items: center;
            user-select: none;
            border-radius: 0;
            vertical-align: middle;
            justify-content: center;
            -moz-appearance: none;
            text-decoration: none;
            background-color: transparent;
            -webkit-appearance: none;
            -webkit-tap-highlight-color: transparent;
        }

        .jss313::-moz-focus-inner {
            border-style: none;
        }

        /*! CSS Used from: Embedded */
        .jss449 {
            color: rgba(0, 0, 0, 0.87);
            padding: 6px 16px;
            font-size: 1rem;
            min-width: 64px;
            box-sizing: border-box;
            transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            line-height: 1.75;
            font-family: Vazir, tahoma, arial;
            font-weight: 500;
            border-radius: 4px;
            text-transform: uppercase;
        }

        .jss449:hover {
            text-decoration: none;
            background-color: rgba(0, 0, 0, 0.08);
        }

        @media (hover: none) {
            .jss449:hover {
                background-color: transparent;
            }
        }

        .jss450 {
            width: 100%;
            display: inherit;
            align-items: inherit;
            justify-content: inherit;
        }

        .jss460 {
            color: rgba(0, 0, 0, 0.87);
            box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);
            background-color: #e0e0e0;
        }

        .jss460:active {
            box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
        }

        .jss460:hover {
            background-color: #d5d5d5;
        }

        @media (hover: none) {
            .jss460:hover {
                background-color: #e0e0e0;
            }
        }

        .jss461 {
            color: #fff;
            background-color: #3081E9;
        }

        .jss461:hover {
            background-color: rgb(33, 90, 163);
            color: white !important;
        }

        @media (hover: none) {
            .jss461:hover {
                background-color: #3081E9;
            }
        }

        .jss473 {
            padding: 8px 24px;
            font-size: 1.0714285714285714rem;
        }

        /*! CSS Used from: Embedded */
        .jss442 {
            padding-top: 0.375rem;
            border-radius: 0.4375rem;
            padding-bottom: 0.375rem;
        }

        .jss443 {
            padding-top: 0.625rem;
            border-radius: 0.4375rem;
            padding-bottom: 0.625rem;
        }

        .jss444 {
            box-shadow: none;
        }

        .title__1p3O_ var {
            font-weight: 500;
        }

        .wrap__1QIKi {
            background-color: #fff;
            border-radius: .625rem;
            box-shadow: 0 .4375rem 1.25rem rgba(38, 72, 123, .07);
            padding: 3.125rem 0;
        }

        @media only screen and (max-width:900px) {
            .wrap__1QIKi {
                border-radius: .375rem;
                padding: 1.5625rem 0 2.5rem;
            }
        }

        .title__1p3O_ {
            font-size: 1.125rem;
            color: #485869;
            text-align: center;
        }

        .title__1p3O_ var {
            font-size: 2rem;
            color: #2070d9;
        }

        .subtitle__36Lpw {
            text-align: center;
            color: #5c748e;
            font-size: .875rem;
            margin-top: .625rem;
            padding: 0 .625rem;
        }

        .list__O7hT0 {
            margin: 2.625rem 0;
            padding: 0 5.3125rem;
        }

        @media only screen and (max-width:900px) {
            .list__O7hT0 {
                padding: 0 3.125rem;
            }
        }

        .list__O7hT0 li {
            display: flex;
            align-items: center;
            font-size: 1.125rem;
            color: #5c748e;
            margin-bottom: .25rem;
        }

        .list__O7hT0 svg {
            width: .8125rem;
            height: .8125rem;
            margin-left: .75rem;
            fill: #2070d9;
            transform: translateY(-2px);
        }

        .footer__1nPep {
            display: flex;
            justify-content: center;
        }

        .footer__1nPep a {
            min-width: 13.125rem !important;
        }

        .why {
            color: #727478;
            font-size: 20px;
            font-family: "Vazir" !important;
            font-weight: 600;
            letter-spacing: 0 !important;
        }

        ul.list__O7hT0 li {
            font-size: 18px;
            font-family: "Vazir" !important;
            font-weight: 600;
            letter-spacing: 0 !important;

        }

        .why h2 {
            margin-bottom: 15px;
        }

        .why p {
            line-height: 43px;
        }

        .why {
            margin-top: 155px;
        }

        .list__O7hT0 {
            padding: 20px;
        }

        a {
            font-family: "Vazir", sans-serif !important;
        }

    </style>

    <div class="kt-grid kt-grid--ver kt-grid--root p-4" id='whysection'>
        <div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
            <div
                class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile d-flex flex-column">


                <style>
                    p.motivation_speech {
                        font-weight: 200;
                    }

                    span.price_span {
                        font-size: 74px;
                        font-style: initial;
                    }

                    .wrap__1QIKi {
                        min-width: 425px;
                    }

                    ul.list__O7hT0 span {
                        font-weight: 400;
                    }

                    a#show_pay {
                        display: block;
                        background: #3081e9;
                        width: 100%;
                        margin-top: 0;
                        text-align: center;
                        padding-top: 15px;
                        padding-bottom: 15px;
                        margin-bottom: 0;
                        font-size: 18px;
                    }

                    a#continue_payment {
                        transition: all .3s ease-in-out;
                        display: block;
                        background: #ffffff;
                        color: #3081e9;
                        border: 1px solid #3081e9;
                        border-radius: 5px;
                        margin-top: 10px;
                        width: 100%;
                        text-align: center;
                        padding-top: 15px;
                        padding-bottom: 15px;
                        margin-bottom: 0;
                        font-size: 18px;
                        opacity: 0;
                        transform: translateY(-30px)
                    }

                    a#continue_payment:hover {
                        background: #3081e9;
                        color: white;
                    }

                    a#continue_payment.show_button {
                        opacity: 1;
                        transform: translateY(0)
                    }

                    a#show_pay.disabled {
                        opacity: 50% !important;
                        pointer-events: none;
                        cursor: not-allowed;
                    }

                </style>
                <div class="row">
                    <div class="col-md-2">

                    </div>
                    <div class="col-md-4">
                        <div class="why">
                            <h2> إبدا الآن في صناعة صفحات بيع احترافية </h2>
                            <p class='motivation_speech'>
                                لم تعد بحاجة الى مبرمج لصناعة صفحات هبوط احترافية وعرض منتجاتك بشكل رائع
                                ، لا تحتاج الى أي خبرة في البرمجة
                                ، يمكنك البدأ الآن والإستفادة من كل هذه المزايا
                            </p>
                        </div>
                    </div>
                    <div class="col-md-1">

                    </div>

                    <div class="col-md-3">
                        <div class="wrap__1QIKi">
                            <div class="title__1p3O_"><var>
                                    <span style="vertical-align: inherit;">
                                        <span class="price_span">24 </span>
                                    </span>
                                </var>
                                <span style="vertical-align: inherit;">
                                    <span style="vertical-align: inherit;font-weight: 700"> دولار</span>
                                </span>
                            </div>
                            <div class="subtitle__36Lpw">
                                <span style="vertical-align: inherit;">
                                    <span style="vertical-align: inherit;font-weight: 700">عرض خيالي ، والإستفادة
                                        أكبر</span>
                                </span>
                            </div>
                            <ul class="list__O7hT0">
                                <li>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        class="icon__2kAHX tick__2NJXI" viewBox="0 0 11.6 9.6" width="13" height="13">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.6 9.6" id="tick">
                                                <path
                                                    d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                                </path>
                                            </symbol>
                                        </defs>
                                        <g fill="#2070D9">
                                            <path
                                                d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                            </path>
                                        </g>
                                    </svg>
                                    <p>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">استفد من كل القوالب </span>
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        class="icon__2kAHX tick__2NJXI" viewBox="0 0 11.6 9.6" width="13" height="13">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.6 9.6" id="tick">
                                                <path
                                                    d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                                </path>
                                            </symbol>
                                        </defs>
                                        <g fill="#2070D9">
                                            <path
                                                d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                            </path>
                                        </g>
                                    </svg>
                                    <p>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;"> نماذج الطلب COD مربوطة ب جوجل شيت
                                            </span>
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        class="icon__2kAHX tick__2NJXI" viewBox="0 0 11.6 9.6" width="13" height="13">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.6 9.6" id="tick">
                                                <path
                                                    d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                                </path>
                                            </symbol>
                                        </defs>
                                        <g fill="#2070D9">
                                            <path
                                                d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                            </path>
                                        </g>
                                    </svg>
                                    <p>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">مئات العناصر من أجل صناعة صفحات خاصة
                                            </span>
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        class="icon__2kAHX tick__2NJXI" viewBox="0 0 11.6 9.6" width="13" height="13">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.6 9.6" id="tick">
                                                <path
                                                    d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                                </path>
                                            </symbol>
                                        </defs>
                                        <g fill="#2070D9">
                                            <path
                                                d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                            </path>
                                        </g>
                                    </svg>
                                    <p>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">خطوط مميزة</span>
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        class="icon__2kAHX tick__2NJXI" viewBox="0 0 11.6 9.6" width="13" height="13">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.6 9.6" id="tick">
                                                <path
                                                    d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                                </path>
                                            </symbol>
                                        </defs>
                                        <g fill="#2070D9">
                                            <path
                                                d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                            </path>
                                        </g>
                                    </svg>
                                    <p>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">تحميل الصفحة الى استضافتك</span>
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        class="icon__2kAHX tick__2NJXI" viewBox="0 0 11.6 9.6" width="13" height="13">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.6 9.6" id="tick">
                                                <path
                                                    d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                                </path>
                                            </symbol>
                                        </defs>
                                        <g fill="#2070D9">
                                            <path
                                                d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                            </path>
                                        </g>
                                    </svg>
                                    <p>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;"> ربط الصفحة مع الدومين </span>
                                        </span>
                                    </p>
                                </li>
                                <li>
                                    <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
                                        class="icon__2kAHX tick__2NJXI" viewBox="0 0 11.6 9.6" width="13" height="13">
                                        <defs>
                                            <symbol xmlns="http://www.w3.org/2000/svg"
                                                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11.6 9.6" id="tick">
                                                <path
                                                    d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                                </path>
                                            </symbol>
                                        </defs>
                                        <g fill="#2070D9">
                                            <path
                                                d="M5,9.6c-0.2,0-0.4-0.1-0.6-0.2l-4-3.2c-0.4-0.3-0.5-1-0.2-1.4c0.3-0.4,1-0.5,1.4-0.2l3.2,2.6l5-6.8c0.3-0.4,1-0.5,1.4-0.2  c0.4,0.3,0.5,1,0.2,1.4L5.8,9.2C5.7,9.4,5.4,9.6,5.2,9.6C5.1,9.6,5.1,9.6,5,9.6z">
                                            </path>
                                        </g>
                                    </svg>
                                    <p>
                                        <span style="vertical-align: inherit;">
                                            <span style="vertical-align: inherit;">دعم فني</span>
                                        </span>
                                    </p>
                                </li>


                            </ul>
                            <div class="footer__1nPep" style="display: flex; flex-direction: column; padding: 0px 20px;">
                                <a class="jss313 jss449 jss442 jss460 jss441 jss461 jss444 jss463 jss464 jss473 jss443"
                                    href="javascript:;" id='show_pay'>
                                    ترقية الخطة
                                </a>
                                <a href="{{ route('cmi.proccess') }}" id="continue_payment">
                                    التقدم والدفع نحو cmi
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- begin:: Page -->
    <div class="kt-grid kt-grid--ver kt-grid--root p-4" id='paysection' style="display: none">
        <div class="kt-grid kt-grid--hor kt-grid--root  kt-login kt-login--v1" id="kt_login">
            <div
                class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--desktop kt-grid--ver-desktop kt-grid--hor-tablet-and-mobile d-flex flex-column">

                <div class="row">

                    <div class="col-md-6 mx-auto bg-white" style="padding: 50px;">

                        <div class="row">
                            <div class="col-md-12 mx-auto">
                                <div
                                    class="kt-grid__item kt-grid__item--order-tablet-and-mobile-2 kt-grid kt-grid--hor kt-login__aside d-flex flex-column align-items-center text-center">
                                    <div class="kt-grid__item kt-grid__item--fluid kt-grid kt-grid--ver">
                                        <div class="kt-grid__item kt-grid__item--middle">
                                            <h3 class="kt-login__title">{{ _lang('Membership Payment') }}!</h3>
                                            <h4 class="kt-login__subtitle">
                                                {{ _lang('Upgrade your membership to use more features') }}.
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="kt-grid__item">
                                        <div class="kt-login__info">
                                            <div class="kt-login__copyright">
                                                &copy; {{ date('Y') . ' ' . get_option('company_name') }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--begin::Aside-->

                        <!--begin::Content-->
                        <div
                            class="kt-grid__item kt-grid__item--fluid  kt-grid__item--order-tablet-and-mobile-1  kt-login__wrapper">
                            <!--begin::Body-->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="kt-login__body">

                                        <!--begin::Signin-->
                                        <div class="kt-login__form">
                                            @if (\Session::has('message'))
                                                <div class="alert alert-danger text-center">
                                                    <b>{{ \Session::get('message') }}</b>
                                                </div>
                                            @endif

                                            <!--begin::Form-->
                                            <form method="POST" class="kt-form" enctype="multipart/form-data"
                                                action="{{ url('membership/pay') }}">
                                                @csrf

                                                <div class="form-group">
                                                    <label class="control-label">{{ _lang('Package') }}</label>
                                                    <select id="package" class="form-control" name="package" required>
                                                        <option value="">{{ _lang('Select Package') }}</option>
                                                        {{ create_option('packages', 'id', 'package_name', $user->company->package_id) }}
                                                    </select>
                                                </div>
                                                <br>

                                                <div class="form-group d-none">
                                                    <label class="control-label">{{ _lang('Package Type') }}</label>
                                                    <select class="form-control" name="package_type" required>
                                                        <option value="">{{ _lang('Select Package Type') }}</option>
                                                        <option value="monthly"
                                                            {{ $user->company->package_type == 'monthly' ? 'selected' : '' }}>
                                                            {{ _lang('Monthly Pack') }}</option>
                                                        <option value="yearly"
                                                            {{ $user->company->package_type == 'yearly' ? 'selected' : '' }}>
                                                            {{ _lang('Yearly Pack') }}</option>
                                                    </select>
                                                </div>
                                                <br>

                                                <div class="form-group">
                                                    <label class="control-label">{{ _lang('Payment Gateway') }}</label>
                                                    <select class="form-control" name="gateway" id="gateway" required>
                                                        @if (get_option('paypal_active') == 'Yes')
                                                            <option value="PayPal">{{ _lang('PayPal') }}</option>
                                                        @endif
                                                        @if (get_option('stripe_active') == 'Yes')
                                                            <option value="Stripe">{{ _lang('Stripe') }}</option>
                                                        @endif
                                                        @if (get_option('razorpay_active') == 'Yes')
                                                            <option value="Razorpay">{{ _lang('Razorpay') }}</option>
                                                        @endif
                                                        @if (get_option('cih_active') == 'Yes')
                                                            <option value="cih">{{ _lang('CIH bank') }}</option>
                                                        @endif
                                                        @if (get_option('paystack_active') == 'Yes')
                                                            <option value="Paystack">{{ _lang('Paystack') }}</option>
                                                        @endif
                                                    </select>
                                                </div>

                                                <div class="proof-container form-group">
                                                    <br>
                                                    <label for="proof">{{ _lang('Proof') }}</label>
                                                    <input id="proof" type="file" accept="image/png,image/jpeg,image/jpg"
                                                        class="form-control{{ $errors->has('proof') ? ' is-invalid' : '' }}"
                                                        name="proof" autofocus>
                                                </div>

                                                <div class="kt-login__actions">
                                                    <button type="submit"
                                                        class="btn btn-primary btn-elevate kt-login__btn-primary btn-block">{{ _lang('Process') }}</button>
                                                </div>
                                            </form>
                                            <!--end::Form-->

                                        </div>
                                        <!--end::Signin-->
                                    </div>
                                </div>
                            </div>
                            <!--end::Body-->
                        </div>

                    </div>

                </div>
                <!--begin::Aside-->

                <!--end::Content-->
            </div>
        </div>
    </div>

    <script>
        $(document).on('click', '#show_pay', function(e) {
            e.preventDefault()
            e.stopPropagation()

            $('#continue_payment').addClass('show_button')
            $(this).addClass('disabled')
        })
        $(document).on('click', '#continue_payment', function(e) {
            // e.preventDefault()
            // e.stopPropagation()

            // $('#cmi_process_payment').submit()
        })
    </script>



    <script>
        $('select[name=gateway]').on('change', function(e) {

            if (e.target.value === 'cih') {
                $('.proof-container').show();
                $("input[name=proof]").prop('required', true);
            } else {
                $("input[name=proof]").prop('required', false);
                $('.proof-container').hide();
            }

        })


        $('#go_pay').click(function() {
            $('#whysection').hide();

            $('#paysection').show();
        });
    </script>
@endsection
