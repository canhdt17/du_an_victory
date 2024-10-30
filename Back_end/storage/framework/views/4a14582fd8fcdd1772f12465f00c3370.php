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
                <form action="<?php echo e(route('seatType.update',$seatType)); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('PUT'); ?>
                    <div class="form-group">
                        <label for="showtime_date">Loại ghế</label>
                        <input type="text" id="seat_type_name" name="seat_type_name" class="form-control" value="<?php echo e($seatType->seat_type_name); ?>">
                    </div>

                    <div class="form-group">
                        <label for="">Giá</label>
                        <input type="text" name="seat_price" class="form-control" id="seat_price" value="<?php echo e($seatType->seat_price); ?>">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="<?php echo e(route('seatType.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\du_an_victory\Back_end\resources\views/admin/seat_type/edit.blade.php ENDPATH**/ ?>