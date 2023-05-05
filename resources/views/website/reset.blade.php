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


                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ _lang(session('status')) }}
                        </div>
                    @endif

                    <form method="POST" class="kt-form" action="{{ route('password.email') }}" autocomplete="off">
                        @csrf

                        <div class="form-group row">
                            <div class="col-md-12">
                                <input id="email" type="email"
                                    class="form-control{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email"
                                    placeholder="{{ _lang('Enter your Email') }}" value="{{ old('email') }}" required>

                                @if ($errors->has('email'))
                                    <span class="invalid-feedback">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="kt-login__actions mt-3">
                            <button type="submit"
                                class="btn btn-primary btn-elevate kt-login__btn-primary">{{ _lang('Send Password Reset Link') }}</button>
                        </div>
                    </form>









                </div>


            </div>
            <div class="left-login">

            </div>

        </div>
    </div>


@endsection
