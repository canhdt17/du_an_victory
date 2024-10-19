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
                <h1 class="text-center">Create Update</h1>
            </div>
            @if ($errors->any())
                <div class="alert alert_danger mt-5">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
            <div class="card-body">
                <form action="{{ route('showtimes.update' , $showtime) }}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="">movie_id</label>
                        <input type="number" name="movie_id" class="form-control" id="movie_id" value="{{$showtime->movie_id}}" >
                    </div>

                    <div class="form-group">
                        <label for="">room_id</label>
                        <input type="number" name="room_id" class="form-control" id="room_id" value="{{$showtime->room_id}}" >
                    </div>

                    <div class="form-group">
                        <label for="showtime_date">showtime date</label> <br>
                        <input type="date" id="showtime_date" name="showtime_date" value="{{$showtime->showtime_date}}" >
                    </div>

                    <div class="form-group">
                        <label for="">start_time</label>
                        <input type="time" name="start_time" class="form-control" id="start_time" value="{{$showtime->start_time}}" >
                    </div>
                    <div class="form-group">
                        <label for="">end_time</label>
                        <input type="time" name="end_time" class="form-control" id="end_time" value="{{$showtime->end_time}}" >
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Update</button>
                        <a href="{{ route('showtimes.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
