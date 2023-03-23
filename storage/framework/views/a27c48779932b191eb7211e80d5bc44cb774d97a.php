<?php $__env->startSection('content'); ?>
    <div class="card">
        <div class="card-header">
            <?php echo app('translator')->get('Open ticket'); ?>
        </div>
        <div class="card-body">
            <?php echo $__env->renderWhen(session()->has('message'), 'laravel-tickets::alert', ['type' => 'info', 'message' => session()->get('message')], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path'])); ?>
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
unset($__errorArgs, $__bag); ?>"
                                        name="category_id">
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
                                <label class="custom-file-label" for="files"><?php echo app('translator')->get('Choose files'); ?></label>
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
<?php $__env->stopSection(); ?>

<?php echo $__env->make(config('laravel-tickets.layouts'), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /home/takiddine-landino-test/htdocs/landino-test.takiddine.ar/resources/views/vendor/laravel-tickets/tickets/create.blade.php ENDPATH**/ ?>