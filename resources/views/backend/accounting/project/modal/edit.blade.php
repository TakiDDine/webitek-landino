<style>
    #main_modal .modal-lg {
        max-width: 800px;
    }

    #main_modal .modal-body {
        overflow: visible !important;
    }

    button:disabled {
        cursor: not-allowed
    }

    .modal-header.bg-primary {
        background: none !important;
    }

    .main-domain {
        font-weight: 500;
        position: absolute;
        font-size: 16px;
        top: 0;
        right: 0;
        background: #e1e1e1;
        bottom: 0;
        padding: 11px 15px;
        direction: ltr;
        border: 0.1px solid #d1d1d1;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }

</style>

<div id="edit-project-modal" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" style="max-width: 800px;" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title mt-0">
                    تحديث المشروع {{ $project->name }}
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="alert alert-danger m-3 w-full" style="display: none" id="error"></div>
            <div class="alert alert-danger d-none m-3"></div>
            <div class="alert alert-secondary d-none m-3"></div>
            <div class="modal-body overflow-hidden">
                <form method="post" id="edit-project" autocomplete="off"
                    action="{{ action('ProjectController@update', $id) }}" enctype="multipart/form-data">
                    {{ csrf_field() }}
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label">{{ _lang('إسم المشروع') }}</label>
                                <input type="text" class="form-control" name="name" value="{{ $project->name }}"
                                    required>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label class="control-label">{{ _lang('السابدومين') }}</label>
                                <div class="position-relative">
                                    <input type="text" class="form-control" name="subdomain"
                                        style="padding-right: 130px;" value="{{ $project->subdomain }}" required>
                                    <span class="main-domain">
                                        .landino.ma
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="w-100 btn btn-primary">{{ _lang('تحديث') }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    $('#edit-project').on('submit', function(e) {
        e.preventDefault();

        $('#error').html('')
        $('#error').hide()
        $.ajax({
            url: $(this).attr('action'),
            data: new FormData($('#edit-project')[0]),
            method: 'POST',
            processData: false,
            contentType: false,
            success: r => {
                if (r.result === 'error') {
                    $('#error').html(r.message.join('<br />'))
                    $('#error').show()
                }

                $('#edit-project-modal').modal('hide')
            }
        })

    })

    function checkSubdomain() {
        let subdomain = $('input[name="subdomain"]').val()
        var reg = /[^a-zA-Z0-9\-]/;

        console.log(subdomain)

        $("#error-dialog").remove()

        if (reg.test(subdomain)) {
            $div = $("<div>", {
                id: "error-dialog",
                "class": "alert alert-danger"
            });
            $div.html('المرجو ادخل اسم نطاق صالح')
            $("#form-edit .row").prepend($div);

            $('button[type="submit"]').attr('disabled', true)
        } else {
            $('button[type="submit"]').attr('disabled', false)
        }
    }

    $('input[name="subdomain"]').on('keyup', checkSubdomain);
</script>
