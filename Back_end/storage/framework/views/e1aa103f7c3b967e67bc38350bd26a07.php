<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
</head>

<body>

    <nav>


    <nav>
        <a href="<?php echo e(route('showtimes.index')); ?>" class="btn btn-primary">Lịch xuất chiếu</a>
        <a href="<?php echo e(route('banners.index')); ?>" class="btn btn-primary">Banner</a>
        <a href="<?php echo e(route('movies.index')); ?>" class="btn btn-primary">Phim</a>
        <a href="<?php echo e(route('seatType.index')); ?>" class="btn btn-primary">Loại Ghế</a>
        <a href="<?php echo e(route('seat.index')); ?>" class="btn btn-primary">Ghế</a>
        <a href="<?php echo e(route('rooms.index')); ?>" class="btn btn-primary">Phòng</a>
        <a href="<?php echo e(route('areas.index')); ?>" class="btn btn-primary">Khu Vực</a>
        <a href="<?php echo e(route('comments.index')); ?>" class="btn btn-primary">Bình Luận</a> 
        <a href="<?php echo e(route('combofoods.index')); ?>" class="btn btn-primary">ComboFood</a>
        <a href="<?php echo e(route('supports.index')); ?>" class="btn btn-primary">Support</a>
        <a href="<?php echo e(route('comments.index')); ?>" class="btn btn-primary">Bình Luận</a>
        <a href="<?php echo e(route('khuyenMai.index')); ?>" class="btn btn-primary">Khuyến Mãi</a>
        <a href="<?php echo e(route('voucher.index')); ?>" class="btn btn-primary">Voucher</a>



    

    <div>

        <?php echo $__env->yieldContent('content'); ?>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
</body>


</html>



</html>



</html>
<?php /**PATH C:\laragon\www\du_an_victory\Back_end\resources\views/admin/layout/index.blade.php ENDPATH**/ ?>