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
        <h1 class="text-center">Danh Sách Banner </h1>


        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Image</th>
                    <th>Link</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="<?php echo e(route('banners.create')); ?>" class="btn btn-primary">Create New banner</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $banners; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $banner): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td><?php echo e($banner->banner_id); ?></td>
                        <td><img src="<?php echo e(asset('/storage/'.$banner->image)); ?>" alt="<?php echo e($banner->image); ?>" width="50px" height="50px"></td>
                        <td><?php echo e($banner->link); ?></td>

                        <td class="button d-flex">
                            <a href="<?php echo e(route('banners.edit', $banner)); ?>" class="btn btn-warning">Sửa</a>
                            <form action="<?php echo e(route('banners.destroy', $banner)); ?>" method="post">
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

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\laragon\www\du_an_victory\Back_end\resources\views/admin/banners/index.blade.php ENDPATH**/ ?>