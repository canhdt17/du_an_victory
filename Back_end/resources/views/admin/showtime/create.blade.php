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
                <form action="{{ route('showtimes.store') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="mb-3">
                        <label for="movies" class="form-label">movies</label>
                        <select class="form-select" id="movie_id" name="movie_id">
                            @foreach ($movies as $movie)
                            <option value="{{ $movie->id }}">{{ $movie->name_movie}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="rooms" class="form-label">room</label>
                        <select class="form-select" id="room_id" name="room_id">
                            @foreach ($rooms as $room)
                            <option value="{{ $room->id }}">{{ $room->room_name}}</option>
                            @endforeach
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="showtime_date">showtime date</label>
                        <input type="date" id="showtime_date" name="showtime_date">
                    </div>

                    <div class="form-group">
                        <label for="">start_time</label>
                        <input type="time" name="start_time" class="form-control" id="start_time">
                    </div>
                    <div class="form-group">
                        <label for="">end_time</label>
                        <input type="time" name="end_time" class="form-control" id="end_time">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="{{ route('showtimes.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
