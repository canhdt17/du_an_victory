@extends('admin.layout.index');
@section('content')

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
                <form action="{{ route('combofoods.store') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="showtime_date">Tên Combo</label>
                        <input type="text" id="combofood_name" name="combofood_name" class="form-control">
                    </div>
                    <div class="form-group">
                        <label for="showtime_date">Giá</label>
                        <input type="text" id="combofood_price" name="combofood_price" class="form-control">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="{{ route('combofoods.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
