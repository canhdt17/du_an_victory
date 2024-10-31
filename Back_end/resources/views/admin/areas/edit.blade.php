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
                <form action="{{ route('areas.update',$area) }}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="showtime_date">Tên Khu Vực</label>
                        <input type="text" id="area_name" name="area_name" class="form-control" value="{{$area->area_name}}">
                    </div>

                    <div>
                        <button class="btn btn-primary" type="submit">Update</button>
                        <a href="{{ route('areas.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
