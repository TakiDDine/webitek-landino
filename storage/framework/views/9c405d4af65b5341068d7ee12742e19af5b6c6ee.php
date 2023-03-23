<?php $__env->startSection('content'); ?>
    <div class="row">
        <div class="col-12 col-sm-12 col-md-12 col-lg-8">
            <?php echo $__env->renderWhen(session()->has('message'), 'laravel-tickets::alert', ['type' => 'info', 'message' => session()->get('message')], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path'])); ?>

            <?php if(config('laravel-tickets.open-ticket-with-answer') || $ticket->state !== 'CLOSED'): ?>
                <div class="card mb-3">
                    <div class="card-header">
                        <?php echo app('translator')->get('Ticket answer'); ?>
                    </div>
                    <div class="card-body">
                        <form method="post" action="<?php echo e(route('laravel-tickets.tickets.message', compact('ticket'))); ?>"
                              <?php if(config('laravel-tickets.files')): ?> enctype="multipart/form-data" <?php endif; ?>>
                            <?php echo csrf_field(); ?>
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
                            <?php if(config('laravel-tickets.files')): ?>
                                <div class="custom-file mt-2">
                                    <input type="file" name="files[]" multiple
                                           class="custom-file-input <?php $__errorArgs = ['files'];
$__bag = $errors->getBag($__errorArgs[1] ?? 'default');
if ($__bag->has($__errorArgs[0])) :
if (isset($message)) { $__messageOriginal = $message; }
$message = $__bag->first($__errorArgs[0]); ?> is-invalid <?php unset($message);
if (isset($__messageOriginal)) { $message = $__messageOriginal; }
endif;
unset($__errorArgs, $__bag); ?> <?php echo e(empty($errors->get('files.*'))?'':'is-invalid'); ?>"
                                           id="files">
                                    <label class="custom-file-label" for="files"><?php echo app('translator')->get('Choose files'); ?></label>
                                    <?php $__currentLoopData = $errors->get('files.*'); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div class="invalid-feedback"><?php echo e($value[0]); ?></div>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

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
                            <?php endif; ?>

                            <button class="btn btn-primary float-right mt-2"><?php echo app('translator')->get('Send'); ?></button>
                        </form>
                    </div>
                </div>
            <?php endif; ?>
            <?php ($messagesPagination = $messages->paginate(4)); ?>
            <?php $__currentLoopData = $messagesPagination; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $message): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div class="card <?php if(! $loop->first): ?> mt-2 <?php endif; ?>">
                    <div class="card-header">
                        <div class="row">
                            <div class="col">
                                <?php echo e($message->user()->exists() ? $message->user->email : trans('Deleted user')); ?>

                            </div>
                            <div class="col-auto">
                                <?php echo e($message->created_at->format(config('laravel-tickets.datetime-format'))); ?>

                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div>
                            <?php echo nl2br(e($message->message)); ?>

                        </div>
                    </div>
                    <?php if($message->uploads()->count() > 0): ?>
                        <div class="card-body border-top p-1">
                            <div class="row mt-1 mb-2 pr-2 pl-2">
                                <?php $__currentLoopData = $message->uploads()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $ticketUpload): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <div class="col">
                                        <a
                                            href="<?php echo e(route('laravel-tickets.tickets.download', compact('ticket', 'ticketUpload'))); ?>"
                                        ><?php echo e(basename($ticketUpload->path)); ?></a>
                                    </div>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>
                        </div>
                    <?php endif; ?>

                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

            <div class="mt-2 d-flex justify-content-center">
                <?php echo $messagesPagination->links('pagination::bootstrap-4'); ?>

            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-4">
            <div class="card">
                <div class="card-header">
                    <?php echo app('translator')->get('Ticket overview'); ?>
                </div>
                <div class="card-body">
                    <?php if(config('laravel-tickets.category') && $ticket->category()->exists()): ?>
                        <div class="form-group">
                            <label><?php echo app('translator')->get('Category'); ?>:</label>
                            <input class="form-control" type="text"
                                   value="<?php echo e($ticket->category()->first()->translation); ?>" disabled>
                        </div>
                    <?php endif; ?>
                    <?php if(config('laravel-tickets.references') && $ticket->reference()->exists()): ?>
                        <div class="form-group">
                            <label><?php echo app('translator')->get('Reference'); ?>:</label>
                            <?php ($referenceable = $ticket->reference->referenceable); ?>
                            <input class="form-control" type="text"
                                   value="<?php echo e($referenceable->toReference()); ?>" disabled>
                        </div>
                    <?php endif; ?>
                    <div class="form-group">
                        <label><?php echo app('translator')->get('Subject'); ?>:</label>
                        <input class="form-control" type="text" value="<?php echo e($ticket->subject); ?>" disabled>
                    </div>
                    <div class="form-group">
                        <label><?php echo app('translator')->get('Priority'); ?>:</label>
                        <input class="form-control" type="text" value="<?php echo app('translator')->get(ucfirst(strtolower($ticket->priority))); ?>"
                               disabled>
                    </div>
                    <div class="form-group">
                        <label><?php echo app('translator')->get('State'); ?>:</label>
                        <input class="form-control" type="text" value="<?php echo app('translator')->get(ucfirst(strtolower($ticket->state))); ?>"
                               disabled>
                    </div>
                    <?php if($ticket->state !== 'CLOSED'): ?>
                        <form method="post" action="<?php echo e(route('laravel-tickets.tickets.close', compact('ticket'))); ?>">
                            <?php echo csrf_field(); ?>
                            <button class="btn btn-block btn-danger"><?php echo app('translator')->get('Close ticket'); ?></button>
                        </form>
                    <?php endif; ?>
                </div>
            </div>

            <ul class="nav nav-pills mb mt-2" id="pills-tab">
                <?php if(config('laravel-tickets.list.users')): ?>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-users-tab" data-toggle="pill"
                           href="#pills-users"><?php echo app('translator')->get('Users'); ?></a>
                    </li>
                <?php endif; ?>
                <?php if(config('laravel-tickets.list.files')): ?>
                    <li class="nav-item">
                        <a class="nav-link" id="pills-files-tab" data-toggle="pill"
                           href="#pills-files"><?php echo app('translator')->get('Files'); ?></a>
                    </li>
                <?php endif; ?>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade" id="pills-users">
                    <?php echo $__env->make('laravel-tickets::tickets.partials.users', compact('ticket', 'messages'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </div>
                <div class="tab-pane fade" id="pills-files">
                    <?php echo $__env->make('laravel-tickets::tickets.partials.files', compact('ticket', 'messages'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                </div>
            </div>

        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make(config('laravel-tickets.layouts'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/vendor/laravel-tickets/tickets/show.blade.php ENDPATH**/ ?>