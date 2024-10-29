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
                <h1 class="text-center">Edit New</h1>
            </div>
            <div class="card-body">
                <form action="{{ route('khuyenMai.update', $khuyenMai) }}" method="post" enctype="multipart/form-data">
                    @csrf
                    @method('PUT')
                    <div class="form-group">
                        <label for="showtime_date">Title</label>
                        <input type="text" id="title" name="title" class="form-control" value="{{$khuyenMai->title}}">
                    </div>
                    <div class="form-group">
                        <label for="showtime_date">Content</label>
                        {{-- <input type="text" id="content" name="content" class="form-control"value="{{$khuyenMai->content}}"> --}}
                        <textarea name="content" id="content" cols="30" rows="10" class="form-control">{{$khuyenMai->content}}</textarea>
                    </div>

                    <div class="form-group">
                        <label for="">Image</label>
                        <input type="file" name="image" class="form-control" id="image">
                        @if($khuyenMai->image && \Storage::exists($khuyenMai->image))
                            <img src="{{ \Storage::url($khuyenMai->image)}}" width="100px" alt="">
                            @endif
                    </div>
                    <div class="form-group">
                        <label for="">Time Date</label>
                        <input type="datetime-local" name="time_date" class="form-control" id="time_date" value="{{ $khuyenMai->time_date ? \Carbon\Carbon::parse($khuyenMai->time_date)->format('Y-m-d\TH:i') : '' }}">
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Update</button>
                        <a href="{{ route('khuyenMai.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
