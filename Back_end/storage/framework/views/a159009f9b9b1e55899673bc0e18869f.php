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
                <form action="<?php echo e(route('seat.store')); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <div class="form-group">
                        <label for="">Loại Ghế</label>
                        <select name="seat_type_id" id="seat_type_id" class="form-control">
                            <?php $__currentLoopData = $seatType; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $id=>$seat_type_name): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($id); ?>"><?php echo e($seat_type_name); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="showtime_date">Số ghế</label>
                        <input type="text" id="seat_number" name="seat_number" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="">Id Phòng</label>
                        <input type="text" name="room_id" class="form-control" id="room_id">
                    </div>
                    <div class="form-group">
                        <label for="">Trạng thái</label>
                        <input type="text" name="seat_status" class="form-control" id="seat_status">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="<?php echo e(route('seat.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\du_an_victory\Back_end\resources\views/admin/seat/create.blade.php ENDPATH**/ ?>