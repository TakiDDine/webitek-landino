@extends('website.layout')


@section('title')
    الصفحة الرئيسية
@endsection





@section('content')

    <div class="login-wrapper">
        <div class="row">
            <div class="right-login">

                <div class="login-card">

                    <h1>مرحباً بك </h1>
                    <p>يمكنك ادخال البيانات في الحقول التالية </p>



                    <form method="POST" class="form-signin" action="{{ route('password.request') }}">
                        @csrf

                        <input type="hidden" name="token" value="{{ $token }}">

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="email" type="email"
                                    class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email"
                                    placeholder="{{ _lang('Email') }}" value="{{ $email ?? old('email') }}" required
                                    autofocus>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="password" type="password"
                                    class="form-control{{ $errors->has('password') ? ' is-invalid' : '' }}"
                                    placeholder="{{ _lang('Password') }}" name="password" required>

                                @if ($errors->has('password'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="password-confirm" type="password" class="form-control"
                                    placeholder="{{ _lang('Confirm Password') }}" name="password_confirmation" required>
                            </div>
                        </div>

                        <div class="form-group row mb-0">
                            <div class="col-md-4 offset-md-3">
                                <button type="submit" class="btn btn-primary reset-password">
                                    {{ _lang('Reset Password') }}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>


            </div>
            <div class="left-login">

            </div>

        </div>
    </div>


@endsection
