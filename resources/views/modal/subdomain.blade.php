<div id="modal-publish" class="modal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header bg-primary">
                <h5 class="modal-title mt-0 text-white"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="alert alert-danger d-none m-3"></div>
            <div class="alert alert-secondary d-none m-3"></div>
            <div class="modal-body">
                <style>
                    #modal-publish .modal-lg {
                        max-width: 800px;
                    }

                    #modal-publish .modal-body {
                        overflow: visible !important;
                    }

                    .main-domain {
                        top: 50%;
                        transform: translateY(-50%);
                        left: 10px;
                    }

                </style>
                <form action="{{ route('projects.save.subdomain', ['id' => $id]) }}" id="form-edit">
                    <div class="alert alert-danger text-right" id="error-dialog" style="display: none;">
                    </div>
                    <label>ادخل السابدومين</label>
                    <div class="position-relative">
                        <input type="text" class="form-control" id="subdomaine-input"
                            placeholder="المرجو ادخال السابدومين">
                        <label for="" class="position-absolute main-domain">.landino.ma</label>
                    </div>
                    <button class="btn btn--blue mt-4" type="submit">
                        حفظ
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>

<script>
    $('#form-edit').on('submit', function(e) {
        e.preventDefault()

        $.ajax({
            url: $(this).attr('action'),
            method: 'POST',
            success: (data) => {
                console.log(data)
            }
        })

    })
</script>
