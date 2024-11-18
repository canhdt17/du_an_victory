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
        <h1 class="text-center">Danh sách loại ghế </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Loại ghế</th>
                    <th>Giá</th>
                    <th>Ngày thêm mới</th>
                    <th>Ngày Cập nhật</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="<?php echo e(route('seatType.create')); ?>" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $seatTypes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $seatType): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td><?php echo e($seatType->id); ?></td>
                        <td><?php echo e($seatType->seat_type_name); ?></td>
                        <td>
                            <?php echo e($seatType->seat_price); ?>

                        </td>
                        <td><?php echo e($seatType->created_at); ?></td>
                        <td><?php echo e($seatType->updated_at); ?></td>
                        <td class="button d-flex">
                            <a href="<?php echo e(route('seatType.edit', $seatType)); ?>" class="btn btn-warning">Sửa</a>
                            <form action="<?php echo e(route('seatType.destroy', $seatType)); ?>" method="post">
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
        <?php echo e($seatTypes->links()); ?>

    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\xampp\htdocs\DATN_VICTORY\du_an_victory\Back_end\resources\views/admin/seat_type/index.blade.php ENDPATH**/ ?>