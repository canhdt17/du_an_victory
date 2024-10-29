<style>
    .button a,
    .button button {
        margin: 0 3px;
        width: 77px;
        height: 70px;
        align-content: center
    }

    .add {
        text-align: right;
    }

    .add a:hover {
        background-color: rgb(208, 221, 28);
        color: black
    }

    .search {
        display: flex;
    }

    .search input {
        width: 300px;
        height: 38px;
        margin-right: 5px;
    }
</style>


<?php $__env->startSection('content'); ?>
    <div class="container mt-5">
        <h1 class="text-center">Danh Sách Phòng </h1>


        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Tên</th>
                    <th>Tổng số ghế</th>
                    <th>Khu vực</th>

                    <th>Thao tác</th>
                    <th>
                        <a href="<?php echo e(route('rooms.create')); ?>" class="btn btn-primary">Create New Room</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $rooms; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $room): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td><?php echo e($room->id); ?></td>
                        <td><?php echo e($room->room_name); ?></td>
                        <td><?php echo e($room->total_seat); ?></td>
                        <td><?php echo e($room->area ? $room->area->area_name : 'N/A'); ?></td>

                        <td class="button d-flex">
                            <a href="<?php echo e(route('rooms.edit', $room->id)); ?>" class="btn btn-warning">Sửa</a>
                            <form action="<?php echo e(route('rooms.destroy', $room->id)); ?>" method="post">
                                <?php echo csrf_field(); ?>
                                <?php echo method_field('DELETE'); ?>
                                <button type="submit" class="btn btn-danger"
                                    onclick="return confirm('Bạn có muốn xóa???')">Xóa</button>
                            </form>
                        </td>
                    </tr>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
        
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\du_an_victory\resources\views/admin/rooms/index.blade.php ENDPATH**/ ?>