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
                <form action="{{ route('seatType.store') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="showtime_date">Loại ghế</label>
                        <input type="text" id="seat_type_name" name="seat_type_name" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="">Giá</label>
                        <input type="text" name="seat_price" class="form-control" id="seat_price">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="{{ route('seatType.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
