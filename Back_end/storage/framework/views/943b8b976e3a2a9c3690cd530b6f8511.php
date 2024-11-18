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
            <div class="card-body">
                <form action="<?php echo e(route('combofoods.store')); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <div class="form-group">
                        <label for="showtime_date">Tên Combo</label>
                        <input type="text" id="combofood_name" name="combofood_name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="showtime_date">Giá</label>
                        <input type="text" id="combofood_price" name="combofood_price" class="form-control">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="<?php echo e(route('combofoods.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\du_an_victory\Back_end\resources\views/admin/combofoods/create.blade.php ENDPATH**/ ?>