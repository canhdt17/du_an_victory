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
                <form action="<?php echo e(route('voucher.store')); ?>" method="post" enctype="multipart/form-data">
                    <?php echo csrf_field(); ?>
                    <div class="form-group">
                        <label for="showtime_date">Code</label>
                        <input type="text" id="code" name="code" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="">Discount Amount</label>
                        <input type="text" name="discount_amount" class="form-control" id="discount_amount">
                    </div>
                    <div class="form-group">
                        <label for="">Expiry Date</label>
                        <input type="date" name="expiry_date" class="form-control" id="expiry_date">
                    </div>
                    <div class="form-group">
                        <label for="">Is acitve</label>
                        
                        <select name="is_active" id="is_active" class="form-control">
                            <option value="1">1</option>
                            <option value="0">0</option>
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="<?php echo e(route('voucher.index')); ?>" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin.layout.index', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH D:\laragon\www\du_an_victory\Back_end\resources\views/admin/voucher/create.blade.php ENDPATH**/ ?>