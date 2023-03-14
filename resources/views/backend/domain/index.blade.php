@extends('layouts.app')


@section('content')

    <style>
        .kt-container>.alert {
            display: none !important;
        }

        .custom-table li:nth-child(4),
        .custom-table li:nth-child(3),
        .custom-table li:nth-child(2) {
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
        <div class="col-12 text-right">
            <div class="row">
                <div class="col-6  text-left projects-title">
                    <h2>نطاقاتي</h2>
                    <p>جميع النطاقات التي قمت بإضافتها تظهر هنا</p>
                </div>

                <div class="col-6">
                    <a href="javascript:;" data-toggle="modal" data-target="#modal-add-domain" class="btn add-project-btn">
                        <img src="/public/icons/domaine.svg" alt="">
                        {{ _lang('Add new domain name') }}
                    </a>
                </div>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="custom-table">
                <ul>
                    <li>{{ _lang('Domain name') }}</li>
                    <li>{{ _lang('Delete') }}</li>
                    <li>{{ _lang('Edit') }}</li>
                    <li>{{ _lang('الحالة') }}</li>
                    <li style="width: 239px;">{{ _lang('Project name') }}</li>
                </ul>
                @foreach ($domains as $domain)
                    <ul>
                        <li>
                            {{ $domain->name }}
                        </li>
                        <li>
                            <form action="/domains/{{ $domain->id }}/delete" method="post" onsubmit="return confirm('هل انت متأكد من حذف الدومين ؟ ')">
                                @method('delete')
                                @csrf
                                <button type="submit" style="border: none; background: transparent">
                                    <img src="/public/icons/delete-dark.svg" alt="">
                                </button>
                            </form>
                        </li>
                        <li>
                            <a href="javascript:;" data-url="/domains/{{ $domain->id }}/edit" class="edit-domain">
                                <img src="/public/icons/edit-dark.svg" alt="">
                            </a>
                        </li>
                        <li>
                            <span @if($domain->active) class="badge badge-success" @else class="badge badge-danger" @endif >
                                @if($domain->active)
                                    مفعل
                                @else 
                                    غير مفعل
                                @endif
                            </span>
                        </li>
                        <li style="width: 15%;">
                            {{ optional($domain->project)->name }}
                        </li>
                    </ul>
                @endforeach
            </div>
        </div>
    </div>

    <div class="modal fade sections-modal" id="modal-add-domain" tabindex="-1" role="dialog"
        aria-labelledby="modal-add-domain" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width: 1020px !important">
            <div class="modal-content">
                <div class="modal-header" style="padding: 30px !important;">
                    <button type=" button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="bg-white rounded shadow-md p-4">
                        <form action="{{ url('domains/store') }}" method="POST">
                            @csrf
                            @if ($errors->count() > 0)

                                <div class="alert alert-danger">

                                    @foreach ($errors->all() as $error)
                                        {{ _lang($error) }}
                                    @endforeach

                                </div>

                            @endif
                            <div class="form-group">
                                <label for="name">{{ _lang('Domain name') }}</label>
                                <input type="text" class="form-control" name="name" required autfocus>
                            </div>
                            <div class="form-group">
                                <label for="project">{{ _lang('Project name') }}</label>
                                <select class="form-control" name="project_id" required>
                                    <option value="">المرجو اختيار مشروع</option>
                                    @foreach ($projects as $project)
                                        <option value="{{ $project->id }}">{{ $project->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <button type="submit" class="w-100 btn btn--blue">
                                اضف اسم النطاق
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="result-modal-ajax"></div>
@endsection


@section('js-script')

    <script>
        $('.edit-domain').on('click', function(e) {
            e.preventDefault()
            e.stopPropagation()
            $.ajax({
                url: $(this).data('url'),
                success: function(r) {
                    $('#result-modal-ajax').html(r)
                    $('#modal-edit-domain').modal('show')
                }
            })
        })
    </script>


    @if ($errors->count() > 0)
        <script>
            $('#modal-add-domain').modal('show')
        </script>
    @endif

@endsection
