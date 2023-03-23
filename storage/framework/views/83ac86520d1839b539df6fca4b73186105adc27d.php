<?php $__env->startSection('content'); ?>
    <div class="card">
        
        <section class="d-flex flex-column">
        <div class="card-body">
            <?php echo $__env->renderWhen(session()->has('message'), 'laravel-tickets::alert', ['message' => session()->get('message')], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path'])); ?>
            <div class="mb-3">
                <div class="row">
                    <div class="col-6">
                        <h2><?php echo e(_lang('Support')); ?></h2>
                    </div>
                    
                        <div class="col-6">
                            <div class="float-right">
                                <a href="javascript:;" data-toggle="modal" data-target="#modal-add-ticket"
                                    class="btn add-project-btn">
                                    <img src="/public/icons/support.svg" alt="">
                                    <?php echo e(_lang('Create new ticket')); ?></a>
                            </div>
                        </div>
                    
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped">
                    <thead class="th">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col"><?php echo app('translator')->get('Subject'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Priority'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('State'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Open by'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Last Update'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Created at'); ?></th>
                        <th scope="col"><?php echo app('translator')->get('Action'); ?></th>
                    </tr>
                    </thead>
                    <tbody>
                    <?php $__currentLoopData = $tickets; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ticket): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <tr>
                            <th scope="row"><?php echo e($ticket->id); ?></th>
                            <td><?php echo e($ticket->subject); ?></td>
                            <td><?php echo app('translator')->get(ucfirst(strtolower($ticket->priority))); ?></td>
                            <td><span <?php if($ticket->state == 'OPEN'): ?> class="badge badge-warning" <?php else: ?> class="badge badge-success" <?php endif; ?>>
                                <?php echo app('translator')->get(ucfirst(strtolower($ticket->state))); ?>
                            </td>
                            <td><?php echo e($ticket->opener()->exists()?$ticket->opener()->first()->name:$ticket->user()->first()->name); ?></td>
                            <td><?php echo e($ticket->updated_at ? $ticket->updated_at->diffForHumans() : trans('Not updated')); ?></td>
                            <td><?php echo e($ticket->created_at ? $ticket->created_at->diffForHumans() : trans('Not created')); ?></td>
                            <td>
                                <a href="<?php echo e(route('laravel-tickets.tickets.show', compact('ticket'))); ?>"
                                   class="btn btn-primary"><?php echo app('translator')->get('Show'); ?></a>
                            </td>
                        </tr>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </tbody>
                </table>

                <div class="mt-2 d-flex justify-content-center">
                    <?php echo $tickets->links('pagination::bootstrap-4'); ?>

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
                        <?php echo $__env->renderWhen(session()->has('message'), 'laravel-tickets::alert', ['type' => 'info', 'message' => session()->get('message')], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path'])); ?>
                        <div class="alert alert-danger" id="errors-dialog" style="display: none;"> </div>

                        <form method="post" action="<?php echo e(route('laravel-tickets.tickets.store')); ?>"
                              <?php if(config('laravel-tickets.files')): ?>
                              enctype="multipart/form-data"
                            <?php endif; ?>>
                            <?php echo csrf_field(); ?>
                            <div class="row">
                                <?php if(config('laravel-tickets.category')): ?>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label><?php echo app('translator')->get('Category'); ?></label>
                                            <select class="form-control <?php $__errorArgs = ['category_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="category_id">
                                                <option value=""><?php echo e(_lang('Select a category')); ?></option>
                                                <?php $__currentLoopData = \RexlManu\LaravelTickets\Models\TicketCategory::all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ticketCategory): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            
                                                    <option value="<?php echo e($ticketCategory->id); ?>"
                                                            <?php if(old('category_id') === $ticketCategory->id): ?>
                                                            selected
                                                        <?php endif; ?>><?php echo app('translator')->get($ticketCategory->translation); ?></option>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </select>
                                            <?php $__errorArgs = ['category_id'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                            <div class="invalid-feedback"><?php echo e($message); ?></div>
                                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                        </div>
                                    </div>
                                <?php endif; ?>
                                <?php if(config('laravel-tickets.references')): ?>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label><?php echo app('translator')->get('Reference'); ?></label>
                                            <select class="form-control <?php $__errorArgs = ['reference'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>"
                                                    name="reference">
                                                <?php if(config('laravel-tickets.references-nullable')): ?>
                                                    <option value=""><?php echo app('translator')->get('No reference'); ?></option>
                                                <?php endif; ?>
                                                <?php $__currentLoopData = config('laravel-tickets.reference-models'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $modelClass): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <?php $__currentLoopData = resolve($modelClass)->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $model): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <?php if(!$model->hasReferenceAccess()): ?>
                                                            <?php continue; ?>
                                                        <?php endif; ?>
                                                        <option
                                                            value="<?php echo e($modelReference = \RexlManu\LaravelTickets\Helper\ReferenceHelper::modelToReference($model)); ?>"
                                                            <?php if(old('reference') === $modelReference): ?>
                                                            selected
                                                            <?php endif; ?>><?php echo e($model->toReference()); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            </select>
                                            <?php $__errorArgs = ['reference'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                            <div class="invalid-feedback"><?php echo e($message); ?></div>
                                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                        </div>
                                    </div>
                                <?php endif; ?>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label><?php echo app('translator')->get('Priority'); ?></label>
                                        <select class="form-control <?php $__errorArgs = ['priority'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="priority">
                                            <option value=""><?php echo e(_lang('Select priority')); ?></option>
                                            <?php $__currentLoopData = config('laravel-tickets.priorities'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $priority): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            
                                                <option value="<?php echo e($priority); ?>" <?php if(old('priority') === $priority): ?>
                                                selected
                                                    <?php endif; ?>><?php echo app('translator')->get(ucfirst(strtolower($priority))); ?></option>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </select>
                                        <?php $__errorArgs = ['priority'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                        <div class="invalid-feedback"><?php echo e($message); ?></div>
                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                    </div>
                                </div>
                                <div class="col-8">
                                    <div class="form-group">
                                        <label><?php echo app('translator')->get('Subject'); ?></label>
                                        <input class="form-control <?php $__errorArgs = ['subject'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" name="subject"
                                               placeholder="<?php echo app('translator')->get('Subject'); ?>" value="<?php echo e(old('subject')); ?>">
                                        <?php $__errorArgs = ['subject'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                        <div class="invalid-feedback"><?php echo e($message); ?></div>
                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label><?php echo app('translator')->get('Message'); ?></label>
                                        <textarea class="form-control <?php $__errorArgs = ['message'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>"
                                                  placeholder="<?php echo app('translator')->get('Message'); ?>" name="message"><?php echo e(old('message')); ?></textarea>
                                        <?php $__errorArgs = ['message'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                        <div class="invalid-feedback"><?php echo e($message); ?></div>
                                        <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                    </div>
                                </div>
                                <?php if(config('laravel-tickets.files')): ?>
                                    <div class="col-12 mb-2">
                                        <div class="custom-file">
                                            <input type="file" name="files[]" multiple
                                                   class="custom-file-input <?php $__errorArgs = ['files'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>" id="files">
                                            <label class="custom-file-label" for="files"><?php echo app('translator')->get('Choose_files'); ?></label>
                                            <?php $__errorArgs = ['files'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?>
                                            <div class="invalid-feedback"><?php echo e($message); ?></div>
                                            <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?>
                                        </div>
                                    </div>
                                <?php endif; ?>
                                <div class="col-12">
                                    <button class="btn btn-primary"><?php echo app('translator')->get('Create'); ?></button>
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
<?php $__env->stopSection(); ?>


<?php echo $__env->make(config('laravel-tickets.layouts'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/vendor/laravel-tickets/tickets/index.blade.php ENDPATH**/ ?>