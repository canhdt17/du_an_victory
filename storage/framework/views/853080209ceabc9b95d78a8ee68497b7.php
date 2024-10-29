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
                <h1 class="text-center">Edit</h1>
            </div>
            <div class="card-body">
                <form action="<?php echo e(route('banners.update',$banner)); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('PUT'); ?>
                    <div class="form-group">
                        <label for="">image</label>
                        <input type="file" name="image" class="form-control" id="image">
                        <img src="<?php echo e(asset('/storage/'.$banner->image)); ?>" alt="" width="60">
                    </div>
                    <div class="form-group">
                        <label for="link">Link</label>
                        <input type="text" id="link" name="link" class="form-control" value="<?php echo e($banner->link); ?>">
                    </div>

                    <div>
                        <button class="btn btn-primary" type="submit">Update</button>
                        <a href="<?php echo e(route('banners.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\du_an_victory\resources\views/admin/banners/edit.blade.php ENDPATH**/ ?>