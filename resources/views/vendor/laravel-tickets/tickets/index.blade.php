@extends(config('laravel-tickets.layouts'))

@section('content')
    <div class="card">
        {{-- <div class="card-header">
            @lang('Tickets')
        </div> --}}
        <section class="d-flex flex-column">
        <div class="card-body">
            @includeWhen(session()->has('message'), 'laravel-tickets::alert', ['message' => session()->get('message')])
            <div class="mb-3">
                <div class="row">
                    <div class="col-6">
                        <h2>{{ _lang('Support') }}</h2>
                    </div>
                    {{-- @if (!user()->isTicketAdmin()) --}}
                        <div class="col-6">
                            <div class="float-right">
                                <a href="javascript:;" data-toggle="modal" data-target="#modal-add-ticket"
                                    class="btn add-project-btn">
                                    <img src="/public/icons/support.svg" alt="">
                                    {{ _lang('Create new ticket') }}</a>
                            </div>
                        </div>
                    {{-- @endif --}}
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead class="th">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">@lang('Subject')</th>
                        <th scope="col">@lang('Priority')</th>
                        <th scope="col">@lang('State')</th>
                        <th scope="col">@lang('Open by')</th>
                        <th scope="col">@lang('Last Update')</th>
                        <th scope="col">@lang('Created at')</th>
                        <th scope="col">@lang('Action')</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach ($tickets as $ticket)
                        <tr>
                            <th scope="row">{{ $ticket->id }}</th>
                            <td>{{ $ticket->subject }}</td>
                            <td>@lang(ucfirst(strtolower($ticket->priority)))</td>
                            <td><span @if ($ticket->state == 'OPEN') class="badge badge-warning" @else class="badge badge-success" @endif>
                                @lang(ucfirst(strtolower($ticket->state)))
                            </td>
                            <td>{{ $ticket->opener()->exists()?$ticket->opener()->first()->name:$ticket->user()->first()->name }}</td>
                            <td>{{ $ticket->updated_at ? $ticket->updated_at->diffForHumans() : trans('Not updated') }}</td>
                            <td>{{ $ticket->created_at ? $ticket->created_at->diffForHumans() : trans('Not created') }}</td>
                            <td>
                                <a href="{{ route('laravel-tickets.tickets.show', compact('ticket')) }}"
                                   class="btn btn-primary">@lang('Show')</a>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>

                <div class="mt-2 d-flex justify-content-center">
                    {!! $tickets->links('pagination::bootstrap-4') !!}
                </div>
            </div>

        </div>
    </section>
    </div>

    
    <div class="modal fade sections-modal" id="modal-add-ticket" tabindex="-1" role="dialog"
        aria-labelledby="modal-add-ticket" aria-hidden="true">
        <div class="modal-dialog" role="document" style="max-width: 1020px !important">
            <div class="modal-content">
                <div class="modal-header" style="padding: 20px">
                    <button type=" button" class="close close-modal" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <h2>تذكرة جديدة</h2>
                </div>
                <div class="card">
 
                    <div class="card-body">
                        @includeWhen(session()->has('message'), 'laravel-tickets::alert', ['type' => 'info', 'message' => session()->get('message')])
                        <div class="alert alert-danger" id="errors-dialog" style="display: none;"> </div>

                        <form method="post" action="{{ route('laravel-tickets.tickets.store') }}"
                              @if (config('laravel-tickets.files'))
                              enctype="multipart/form-data"
                            @endif>
                            @csrf
                            <div class="row">
                                @if (config('laravel-tickets.category'))
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>@lang('Category')</label>
                                            <select class="form-control @error('category_id') is-invalid @enderror" name="category_id">
                                                <option value="">{{ _lang('Select a category') }}</option>
                                                @foreach (\RexlManu\LaravelTickets\Models\TicketCategory::all() as $ticketCategory)
            
                                                    <option value="{{ $ticketCategory->id }}"
                                                            @if (old('category_id') === $ticketCategory->id)
                                                            selected
                                                        @endif>@lang($ticketCategory->translation)</option>
                                                @endforeach
                                            </select>
                                            @error('category_id')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                @endif
                                @if (config('laravel-tickets.references'))
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label>@lang('Reference')</label>
                                            <select class="form-control @error('reference') is-invalid @enderror"
                                                    name="reference">
                                                @if (config('laravel-tickets.references-nullable'))
                                                    <option value="">@lang('No reference')</option>
                                                @endif
                                                @foreach (config('laravel-tickets.reference-models') as $modelClass)
                                                    @foreach (resolve($modelClass)->all() as $model)
                                                        @if (!$model->hasReferenceAccess())
                                                            @continue
                                                        @endif
                                                        <option
                                                            value="{{ $modelReference = \RexlManu\LaravelTickets\Helper\ReferenceHelper::modelToReference($model) }}"
                                                            @if (old('reference') === $modelReference)
                                                            selected
                                                            @endif>{{ $model->toReference() }}</option>
                                                    @endforeach
                                                @endforeach
                                            </select>
                                            @error('reference')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                @endif
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>@lang('Priority')</label>
                                        <select class="form-control @error('priority') is-invalid @enderror" name="priority">
                                            <option value="">{{ _lang('Select priority') }}</option>
                                            @foreach (config('laravel-tickets.priorities') as $priority)
            
                                                <option value="{{ $priority }}" @if (old('priority') === $priority)
                                                selected
                                                    @endif>@lang(ucfirst(strtolower($priority)))</option>
                                            @endforeach
                                        </select>
                                        @error('priority')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <label>@lang('Subject')</label>
                                        <input class="form-control @error('subject') is-invalid @enderror" name="subject"
                                               placeholder="@lang('Subject')" value="{{ old('subject') }}">
                                        @error('subject')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label>@lang('Message')</label>
                                        <textarea class="form-control @error('message') is-invalid @enderror"
                                                  placeholder="@lang('Message')" name="message">{{ old('message') }}</textarea>
                                        @error('message')
                                        <div class="invalid-feedback">{{ $message }}</div>
                                        @enderror
                                    </div>
                                </div>
                                @if (config('laravel-tickets.files'))
                                    <div class="col-12 mb-2">
                                        <div class="custom-file">
                                            <input type="file" name="files[]" multiple
                                                   class="custom-file-input @error('files') is-invalid @enderror" id="files">
                                            <label class="custom-file-label" for="files">@lang('Choose_files')</label>
                                            @error('files')
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                @endif
                                <div class="col-12">
                                    <button class="btn btn-primary">@lang('Create')</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        $('form').on('submit', function(e) {
            e.preventDefault()
            $('#errors-dialog').html('')
            $('#errors-dialog').hide()

            console.log($(this)[0])

            let data = new FormData($(this)[0])

            $.ajax({
                url: $(this).attr('action'),
                method: 'POST',
                data: data,
                processData: false,
                contentType: false,
                success: r => {
                    console.log('wahyyya')
                    window.location.reload()
                },
                error: err => {
                    let errors = `<ul>`
                    Object.values(err.responseJSON.errors).map(err => {
                        errors += `<li>${err}</li>`
                    })
                    errors += `</ul>`
                    $('#errors-dialog').html(errors)
                    $('#errors-dialog').show()
                }
            })
        })
    </script>
@endsection

