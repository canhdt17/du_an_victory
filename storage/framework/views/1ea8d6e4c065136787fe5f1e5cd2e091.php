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
                <form action="<?php echo e(route('combofoods.update',$combofood)); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('PUT'); ?>
                    <div class="form-group">
                        <label for="showtime_date">Tên Combo</label>
                        <input type="text" id="combofood_name" name="combofood_name" class="form-control" value="<?php echo e($combofood->combofood_name); ?>">
                    </div>
                    <div class="form-group">
                        <label for="showtime_date">Giá</label>
                        <input type="text" id="combofood_price" name="combofood_price" class="form-control" value="<?php echo e($combofood->combofood_price); ?>">
                    </div>

                    <div>
                        <button class="btn btn-primary" type="submit">Update</button>
                        <a href="<?php echo e(route('combofoods.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\xampp\htdocs\DATN_VICTORY\du_an_victory\resources\views/admin/combofoods/edit.blade.php ENDPATH**/ ?>