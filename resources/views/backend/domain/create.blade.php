@extends('layouts.app')


@section('content')

    <h2 class="mb-3">اضف اسم نطاق جديد</h2>

    <div class="row">
        <div class="col-md-6 mx-auto">
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

@endsection
