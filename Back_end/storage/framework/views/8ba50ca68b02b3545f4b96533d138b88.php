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
                <h1 class="text-center">Edit New</h1>
            </div>
            <div class="card-body">
                <form action="<?php echo e(route('khuyenMai.update', $khuyenMai)); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <?php echo method_field('PUT'); ?>
                    <div class="form-group">
                        <label for="showtime_date">Title</label>
                        <input type="text" id="title" name="title" class="form-control" value="<?php echo e($khuyenMai->title); ?>">
                    </div>
                    <div class="form-group">
                        <label for="showtime_date">Content</label>
                        
                        <textarea name="content" id="content" cols="30" rows="10" class="form-control"><?php echo e($khuyenMai->content); ?></textarea>
                    </div>

                    <div class="form-group">
                        <label for="">Image</label>
                        <input type="file" name="image" class="form-control" id="image">
                        <?php if($khuyenMai->image && \Storage::exists($khuyenMai->image)): ?>
                            <img src="<?php echo e(\Storage::url($khuyenMai->image)); ?>" width="100px" alt="">
                            <?php endif; ?>
                    </div>
                    <div class="form-group">
                        <label for="">Time Date</label>
                        <input type="datetime-local" name="time_date" class="form-control" id="time_date" value="<?php echo e($khuyenMai->time_date ? \Carbon\Carbon::parse($khuyenMai->time_date)->format('Y-m-d\TH:i') : ''); ?>">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Update</button>
                        <a href="<?php echo e(route('khuyenMai.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\du_an_victory\Back_end\resources\views/admin/khuyenMai/edit.blade.php ENDPATH**/ ?>