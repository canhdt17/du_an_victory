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
        <h1 class="text-center">Danh sách lịch xuất chiếu </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>name</th>
                    <th>image</th>
                    <th>type_id</th>
                    <th>duration</th>
                    <th>nation</th>
                    <th>director</th>
                    <th>performer</th>
                    <th>show</th>
                    <th>content</th>
                    <th>link_trailler</th>
                    <th>category_id</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="<?php echo e(route('movies.create')); ?>" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                <?php $__currentLoopData = $movies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $movie): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <tr>
                        <td><?php echo e($movie->id); ?></td>
                        <td><?php echo e($movie->name_movie); ?></td>
                        <td><img src="<?php echo e(asset('/storage/'.$movie->image)); ?>" alt="<?php echo e($movie->image); ?>" width="50px" height="50px"></td>
                        <td><?php echo e($movie->name_type); ?></td>
                        <td><?php echo e($movie->duration); ?></td>
                        <td><?php echo e($movie->nation); ?></td>
                        <td><?php echo e($movie->director); ?></td>
                        <td><?php echo e($movie->performer); ?></td>
                        <td><?php echo e($movie->show); ?></td>
                        <td><?php echo e($movie->content); ?></td>
                        <td><?php echo e($movie->link_trailler); ?></td>
                        <td><?php echo e($movie->name_category); ?></td>
                        <td class="button d-flex">
                            <a href="<?php echo e(route('movies.edit', $movie->id)); ?>" class="btn btn-warning">Sửa</a>
                            <form action="<?php echo e(route('movies.destroy', $movie->id)); ?>" method="post">
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

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\xampp\htdocs\DATN_VICTORY\du_an_victory\resources\views/admin/movie/index.blade.php ENDPATH**/ ?>