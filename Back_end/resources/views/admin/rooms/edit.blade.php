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
                <h1 class="text-center">Edit</h1>
            </div>
            <div class="card-body">
                <form action="{{ route('rooms.update', $room) }}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group">

                        <div class="form-group">
                            <label for="">Tên Phòng</label>
                            <input type="text" name="room_name" class="form-control"
                                id="room_id"value="{{ $room->room_name }}">
                        </div>
                        <label for="">Khu vực</label>
                        <select name="area_id" id="area_id" class="form-control">
                            @foreach ($areas as $area)
                                    <option value="{{ $area->area_id }}" @if ($area->area_id == $room->area_id) selected @endif>{{ $area->area_name }}</option>
                                @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="showtime_date"> Tổng Số Ghế</label>
                        <input type="text" id="total_seat" name="total_seat" class="form-control"
                            value="{{ $room->total_seat }}">
                    </div>


                    <div>
                        <button class="btn btn-primary" type="submit">Update</button>
                        <a href="{{ route('rooms.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
