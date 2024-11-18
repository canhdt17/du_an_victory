;
<?php $__env->startSection('content'); ?>

    <style>
        input,
        select {
            margin-bottom: 20px
        }
    </style>

    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h1 class="text-center">Create New</h1>
            </div>
            <?php if($errors->any()): ?>
                <div class="alert alert_danger mt-5">
                    <ul>
                        <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <li><?php echo e($error); ?></li>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </ul>
                </div>
            <?php endif; ?>
            <div class="card-body">
                <form action="<?php echo e(route('movies.store')); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <div class="form-group">
                        <label for="">name</label>
                        <input type="text" name="name_movie" class="form-control" id="name_movie">
                    </div>
                    <div class="form-group">
                        <label for="">image</label>
                        <input type="file" name="image" class="form-control" id="image">
                    </div>
                    <div class="mb-3">
                        <label for="type" class="form-label">type</label>
                        <select class="form-select" id="type_id" name="type_id">
                            <?php $__currentLoopData = $types; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($type->id); ?>"><?php echo e($type->name_type); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">duration</label>
                        <input type="text" name="duration" class="form-control" id="duration">
                    </div>
                    <div class="form-group">
                        <label for="">nation</label>
                        <input type="text" name="nation" class="form-control" id="nation">
                    </div>
                    <div class="form-group">
                        <label for="">director</label>
                        <input type="text" name="director" class="form-control" id="director">
                    </div>
                    <div class="form-group">
                        <label for="">performer</label>
                        <input type="text" name="performer" class="form-control" id="performer">
                    </div>

                    <div class="form-group">
                        <label for="">show</label>
                        <input type="date" name="show" class="form-control" id="show">
                    </div>

                    <div class="form-group">
                        <label for="">content</label>
                        <input type="text" name="content" class="form-control" id="content">
                    </div>
                    <div class="form-group">
                        <label for="">link_trailler</label>
                        <input type="text" name="link_trailler" class="form-control" id="link_trailler">
                    </div>
                    <div class="mb-3">
                        <label for="categories" class="form-label">categories</label>
                        <select class="form-select" id="category_id" name="category_id">
                            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($category->id); ?>"><?php echo e($category->name_category); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="<?php echo e(route('movies.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\xampp\htdocs\DATN_VICTORY\du_an_victory\Back_end\resources\views/admin/movie/create.blade.php ENDPATH**/ ?>