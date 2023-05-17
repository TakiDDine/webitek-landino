@extends('layouts.app')

@section('content')
<style>
  .custom-table li:nth-child(4),
        .custom-table li:nth-child(3),
        .custom-table li:nth-child(2) {
            float: left;
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

        .modal-body {
            padding: 20px 40px !important;
            background: white !important;
        }
table.dataTable thead th {
    /* border-bottom: 1px solid #111; */
	font-family: "Vazir" !important;
	font-weight: bold;
	color: #646c9a !important;
}
 
table.dataTable tfoot th {
    border-top: 1px solid  #111;
}
tfoot {
    display: table-header-group;
}

table body tr td {
	padding: 25px;

}
button, input[type="submit"] {
	background: none;
	color: inherit;
	border: none;
	padding: 0;
	font: inherit;
	cursor: pointer;
	outline: inherit;
}
th {
	font-family: "Vazir" !important;
	font-weight: bold;
}
</style>

<div class="row">
	<div class="col-12 text-right">
		<div class="row">
			<div class="col-6  text-left projects-title">
				<h2>مشاريعي</h2>
				<p>جميع المشاريع التي قمت بإنشائها تظهر هنا</p>
			</div>
		</div>
	</div>
	<div class="col-lg-12">

		<div class="card mt-2">
			<span class="panel-title d-none">{{ _lang('Project List') }}</span>		
			<div class="card-body">


				<table id="projects_table" class="table cell-border ">
					<thead>
					    <tr class="p-4">
							<th>{{ _lang('Name') }}</th> 
							<th class="text-center">{{ _lang('Settings') }}</th>
							<th class="text-center">{{ _lang('Edit') }}</th>
							<th class="text-center">{{ _lang('Delete') }}</th>
					    </tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
<div id="resultModal"></div>
@endsection

@section('js-script')
<script>
	$('.edit-project').on('click', function(e) {
		e.preventDefault()

		$.ajax({
			url: $(this).data('url'),
			success: r => {
				$('#resultModal').html(r)
				$('#edit-project-modal').modal('show')
			}
		})
	})

    // delete project confirmation 
    function confirmDelete(event) {
        event.preventDefault();
        Swal.fire({
			title: $lang_alert_title,
			text: $lang_alert_message,
			icon: 'warning',
			showCancelButton: true, 
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: $lang_confirm_button_text,
			cancelButtonText: $lang_cancel_button_text
		}).then((result) => {
            if (result.value) {
                // User clicked the "Delete" button in the SweetAlert dialog
                event.target.submit();
            } else {
                // User clicked the "Cancel" button in the SweetAlert dialog
                Swal.fire($lang_alert_message_cancel);
            }
        });
    }
</script>
<script src="{{ asset('/backend/assets/js/ajax-datatable/projects.js') }}"></script>
@endsection