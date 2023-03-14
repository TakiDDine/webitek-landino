<div class="modal fade sections-modal" id="modal-edit-domain" tabindex="-1" role="dialog"
    aria-labelledby="modal-add-domain" aria-hidden="true">
    <div class="modal-dialog" role="document" style="max-width: 1020px !important">
        <div class="modal-content">
            <div class="modal-header" style="padding: 20px !important;">
                <button type=" button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4>تعديل اسم نطاق : {{ $domain->name }}</h4>
            </div>
            <div class="modal-body">
                <div class="bg-white rounded shadow-md p-4">
                    <div class="alert alert-danger" id="errors" style="display: none;"></div>
                    <div class="alert alert-success" id="success" style="display: none;"></div>
                    <form action="/domains/{{ $domain->id }}/update" method="POST" id="form-edit">
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
                            <input type="text" value="{{ $domain->name }}" class="form-control" name="name" required
                                autfocus>
                        </div>
                        <div class="form-group">
                            <label for="project">{{ _lang('Project name') }}</label>
                            <select class="form-control" name="project_id" required>
                                <option value="">المرجو اختيار مشروع</option>
                                @foreach ($projects as $project)
                                    <option value="{{ $project->id }}" @if ($project->id === $domain->project_id) selected @endif>{{ $project->name }}
                                    </option>
                                @endforeach
                            </select>
                        </div>

                        <button type="submit" class="w-100 btn btn--blue">
                            تعديل اسم النطاق
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $('#form-edit').on('submit', function(e) {
        e.preventDefault()

        let formData = new FormData($('#form-edit')[0])

        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name=csrf-token').attr('content')
            }
        })

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(r) {
                $('#errors').html('')
                $('#errors').hide()
                $('#success').html('تم التحيث بنجاح')
                $('#success').show()
                setTimeout(() => {
                    window.location.reload()
                }, 500);
            },
            error: function(err) {
                let errors = err.responseJSON.errors
                let _err = `<ul>`
                Object.values(errors).map(err => {
                    _err += `<li>${err}</li>`
                })
                _err += `</ul>`

                $('#errors').html(_err)
                $('#errors').show()
            }
        })
    })
</script>
