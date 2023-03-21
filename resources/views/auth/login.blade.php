@extends('layouts.login')


@section('title')
    الصفحة الرئيسية
@endsection

@section('content')
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
                <img src="/public/front/logo.svg">
                <h1>مرحباً بك </h1>
                <p>يمكنك ادخال البيانات في الحقول التالية </p>

                @if ($errors->count() > 0)
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ _lang($error) }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif

                <!--begin::Form-->
                <form method="POST" class="kt-form" action="{{ route('login') }}">
                    @csrf

                    <div class="form-group row">
                        <div class="col-md-12">
                            <input id="email" type="email"
                                class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email"
                                value="{{ old('email') }}" placeholder="{{ _lang('Email') }}" required autofocus>
                        </div>
                    </div>

                    <div class="form-group row">
                        <div class="col-md-12">

                            <input id="password" type="password"
                                class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password"
                                placeholder="{{ _lang('Password') }}" required>
                        </div>
                    </div>

                    <div class="kt-login__actions mt-3">
                        <a href="{{ url('reset/password') }}" class="kt-link kt-login__link-forgot">
                            {{ _lang('Forgot Password?') }}
                        </a>
                        <button type="submit"
                            class="btn btn-primary btn-elevate kt-login__btn-primary">{{ _lang('Login') }}</button>
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


@endsection
