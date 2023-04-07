@extends('layouts.app')


@section('content')

    <h3 class="my-3">{{ _lang('Templates') }}</h3>
    <p>أكثر من 50 قالبًا جاهزاً حول مواضيع مختلفة</p>

    <br>
    <div class="bg-white d-flex align-items-center mb-4 templates-filter">

        <div class="flex align-items-center p-4 rounded filter-item">
            <label for="all" class="font-16 m-0 mr-1">الكل</label>
            <input type="checkbox" value="all" id="all" class="input-toggle-filter" checked="checked">
        </div>
        <div class="flex align-items-center p-4 rounded filter-item">
            <label for="courses" class="font-16 m-0 mr-1">دورات</label>
            <input type="checkbox" id="courses" class="input-toggle-filter">
        </div>
        <div class="flex align-items-center p-4 rounded filter-item">
            <label for="products" class="font-16 m-0 mr-1">منتجات</label>
            <input type="checkbox" id="products" class="input-toggle-filter">
        </div>
        <div class="flex align-items-center p-4 rounded filter-item">
            <label for="tourism" class="font-16 m-0 mr-1">سياحة</label>
            <input type="checkbox" id="tourism" class="input-toggle-filter">
        </div>
        <div class="flex align-items-center p-4 rounded filter-item">
            <label for="personal" class="font-16 m-0 mr-1">شخصي</label>
            <input type="checkbox" id="personal" class="input-toggle-filter">
        </div>
    </div>

    <div class="row">
        @foreach ($templates as $template) 
            <div class="col-md-4 overflow-hidden mb-3" data-category="{{ $template['category'] ?? null }}">
                <div
                    class="bg-white rounded tempates-preview-wrapper template-{{ str_replace('-', ' ', $template['name']) }}">
                    <img src="{{ $template['cover'] }}" class="rounded-top rounded-lg mw-100">
                    <div class="row bg-white w-full w-100 m-0 preview-use-template">
                        <div class="col-6">
                            <a href="{{ route('template.preview', ['template_name' => $template['name']]) }}"
                                target="_blank" class="rounded-lg btn w-100 ">{{ _lang('Preview') }}</a>
                        </div>
                        <div class="col-6">
                            <a href="{{ url('/editor?template=' . $template['name']) }}" target="_blank"
                                class="rounded-lg btn w-100 ">{{ _lang('use template') }}</a> 
                        </div>
                    </div>
                </div>
            </div> 
        @endforeach
    </div>

    <script>
        $(document).ready(function() {
            $('.input-toggle-filter').click(function() {
                let checked = $('.input-toggle-filter')
                let _this = this


                if ($(_this).val() !== 'all') {
                    $('[data-category]').map(function(index, item) {
                        if ($(_this).prop('checked')) {
                            $(item).addClass('d-none')
                        } else {
                            $(item).removeClass('d-none')
                        }
                    })
                } else {
                    $('[data-category]').removeClass('d-none')
                }


                $(checked).map(function(index, item) {
                    if (item !== _this) {
                        $(item).prop('checked', false)
                    }
                })

                if ($(this).prop('checked') && $(_this).val() !== 'all') {
                    $(`[data-category='${$(this).attr('id')}']`).removeClass('d-none')
                }
            })
        })
    </script>


@endsection
