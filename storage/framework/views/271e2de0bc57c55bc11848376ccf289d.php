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
                <form action="<?php echo e(route('rooms.update', $room)); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('PUT'); ?>
                    <div class="form-group">

                        <div class="form-group">
                            <label for="">Tên Phòng</label>
                            <input type="text" name="room_name" class="form-control"
                                id="room_id"value="<?php echo e($room->room_name); ?>">
                        </div>
                        <label for="">Khu vực</label>
                        <select name="area_id" id="area_id" class="form-control">
                            <?php $__currentLoopData = $areas; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $area): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($area->area_id); ?>" <?php if($area->area_id == $room->area_id): ?> selected <?php endif; ?>><?php echo e($area->area_name); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="showtime_date"> Tổng Số Ghế</label>
                        <input type="text" id="total_seat" name="total_seat" class="form-control"
                            value="<?php echo e($room->total_seat); ?>">
                    </div>


                    <div>
                        <button class="btn btn-primary" type="submit">Update</button>
                        <a href="<?php echo e(route('rooms.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\xampp\htdocs\DATN_VICTORY\du_an_victory\resources\views/admin/rooms/edit.blade.php ENDPATH**/ ?>