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
        <h1 class="text-center">Danh sách Khuyến Mãi </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Image</th>
                    <th>Time Date</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="<?php echo e(route('khuyenMai.create')); ?>" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $khuyenMais; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $khuyenMai): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td><?php echo e($khuyenMai->id); ?></td>
                        <td><?php echo e($khuyenMai->title); ?></td>
                        <td>
                            <?php echo e($khuyenMai->content); ?>

                        </td>
                        <td>
                            <?php if($khuyenMai->image && \Storage::exists($khuyenMai->image)): ?>
                            <img src="<?php echo e(\Storage::url($khuyenMai->image)); ?>" width="100px" alt="">
                            <?php endif; ?>
                        </td>
                        
                        <td><?php echo e($khuyenMai->time_date); ?></td>
                        <td class="button d-flex">
                            <a href="<?php echo e(route('khuyenMai.edit', $khuyenMai)); ?>" class="btn btn-warning">Sửa</a>
                            <form action="<?php echo e(route('khuyenMai.destroy', $khuyenMai)); ?>" method="post">
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

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\du_an_victory\Back_end\resources\views/admin/khuyenMai/index.blade.php ENDPATH**/ ?>