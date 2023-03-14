@extends('layouts.app')

@section('content')

    @if (\Session::has('paypal_success'))
        <div class="alert alert-success text-center">
            <b>{{ \Session::get('paypal_success') }}</b>
        </div>
        <br>
    @endif


    @if (\Session::has('cih_success'))
        <div class="alert alert-success text-center">
            <b>{{ \Session::get('cih_success') }}</b>
        </div>
        <br>
    @endif

    @php
    $currency = currency();
    $date_format = get_company_option('date_format', 'Y-m-d');
    @endphp

    <!--Start Card-->
    <div class="row d-flex align-items-stretch">

<style>
    .dashboard-home {
    text-align: center;
    width: 100%;
}
</style>


            <div class="dashboard-home">
            <h2>   مرحباً بك في لاندينو    </h2>  

            <p>
                الآن يمكنك التوجه ومعرفة جميع المعلومات الأساسية التي سوف تساعدك في العمل على المشروع بشكل كامل 
                <br>
                لن يكون هناك أي اختلاف او فرق في العمل ان شاء الله
            </p>

            <br>
            

            <iframe width="760" height="415" src="https://www.youtube.com/embed/KYKh2SFQtEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


            <br>
            <br>
            <br>
            <h3>	
                جديد الموقع 

            </h3>

            <br>
            <ul>
                <li>  [01/12/2021]   تم اضافة قالب جديد لآلة الحلاقة   </li>
            </ul>

            </div>
    </div>

@endsection

@section('js-script')
    <script src="{{ asset('backend/assets/js/ajax-datatable/projects.js') }}"></script>
@endsection
