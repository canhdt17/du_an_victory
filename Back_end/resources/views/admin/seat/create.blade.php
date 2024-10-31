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
                <form action="{{ route('seat.store') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="">Loại Ghế</label>
                        <select name="seat_type_id" id="seat_type_id" class="form-control">
                            @foreach ($seatType as $id=>$seat_type_name)
                                <option value="{{$id}}">{{$seat_type_name}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="showtime_date">Số ghế</label>
                        <input type="text" id="seat_number" name="seat_number" class="form-control">
                    </div>

                    <div class="form-group">
                        <label for="">Id Phòng</label>
                        <input type="text" name="room_id" class="form-control" id="room_id">
                    </div>
                    <div class="form-group">
                        <label for="">Trạng thái</label>
                        <input type="text" name="seat_status" class="form-control" id="seat_status">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="{{ route('seat.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
