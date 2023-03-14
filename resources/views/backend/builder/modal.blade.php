<style>
    .modal-dialog {
        margin: 0 auto !important;
        max-width: 1600px !important;
    }

    .modal-dialog {
        min-height: calc(100vh - 60px) !important;
        display: flex !important;
        flex-direction: column !important;
        justify-content: center !important;
        overflow: auto !important;
    }

    @media(max-width: 768px) {
        .modal-dialog {
            min-height: calc(100vh - 20px) !important;
        }
    }

    .modal-body {
        background: #F5F7FA !important;
        padding: 0 !important;
    }

    .modal-body-sections ul li {
        width: 33.33% !important;
        float: right !important;
    }

    .modal-body-sections ul li a {
        width: 100% !important;
    }

    .modal-body-sidbar {
        max-height: 84vh !important;
        overflow-y: scroll !important;
        float: right !important;
        overflow: hidden !important;
        width: 270px !important;
        background: white !important;
        padding: 10px !important;
        min-height: 84vh !important;
        display: inline-block !important;
        box-shadow: -0.3125rem 0 0.4375rem rgb(32 112 217 / 5%) !important;

    }

    .modal-body-sections {
        width: calc(100% - 270px) !important;
        float: right !important;
        max-height: 84vh !important;
        overflow-y: scroll !important;
        padding-left: 45px !important;
    }

    .modal-body-sections li a {

        overflow: hidden !important;
        float: right !important;
        position: relative !important;
        overflow: hidden !important;
        background-color: #fff !important;
        border-radius: .375rem !important;
        box-shadow: 0 0.1875rem 0.9375rem rgb(81 93 107 / 7%) !important;
    }

    .modal-body-sections ul {
        list-style: none !important;
    }

    .modal-body-sidbar li a {
        display: block !important;
        padding: 10px 21px !important;
        color: #515D6B !important;
        font-size: 18px !important;
    }

    .modal-body-sidbar ul {
        list-style: none !important;
        margin: 0 !important;
        padding: 0 !important;
        margin-top: 45px !important;
    }

    .modal-body-sidbar h2 {
        font-size: 18px !important;
        letter-spacing: 0 !important;
        padding-right: 10px !important;
        font-size: 16px !important;
        margin-top: 30px !important;
    }



    .modal-body-sections ul li {
        padding: 14px !important;
    }


    .modal-body-sections h3 {
        font-size: 16px !important;
        margin-right: 50px !important;
    }

    button.close.close-modal {
        background: none;
        left: 30px !important;
        position: absolute !important;
        top: 19px !important;
        font-size: 23px !important;
        color: #848688 !important;
    }

    .modal-body {
        position: relative !important;
    }

    .modal-body-sections {
        padding-top: 40px !important;
    }

</style>

<div class="modal fade sections-modal" id="SectionsModal" tabindex="-1" role="dialog" aria-labelledby="SectionsModal"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <div class="modal-body-sidbar">
                    <h2>اختر نوع الأقسام</h2>
                    <ul>
                        @foreach ($data['groups'] as $key => $node)
                            <li><a href="#" class="filter"
                                    data-filter="{{ $key }}">{{ ucwords($key) }}</a></li>
                        @endforeach
                    </ul>
                </div>
                <div class="modal-body-sections">
                    <h3>اختار القسم للإنطلاق</h3>
                    <ul class="main-ul">
                        {{-- @foreach ($data['groups'] as $key => $node)
                            @foreach ($node['sections'] as $section)
                                <li class="section__item__li" data-section-group="{{ $key }}">
                                    <a href="#" class="section__item" data-section-name="{{ $section->name }}">
                                        <img src="{{ $section->preview }}" alt="">
                                    </a>
                                </li>
                            @endforeach
                        @endforeach --}}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    $('.filter').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.section__item__li').hide();
        $(`[data-section-group=${$(this).data('filter')}]`).show()
    })
</script>

{{-- <script src="https://code.jquery.com/jquery-3.6.0.min.js" --}}
{{-- integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script> --}}

{{-- <script>
    $(document).on('click', '.section__item', function(e) {
        e.preventDefault();

        let name = $(this).data('section-name')
        let group = $(this).data('group')

        $.ajax({
            url: `/builder/section`,
            data: {
                name: name,
                group: group,
            },
            success: r => {
                $('.blr-active-page').append(r)
            }
        })
    })
</script> --}}
