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
                <form action="{{ route('movies.store') }}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="form-group">
                        <label for="">name</label>
                        <input type="text" name="name_movie" class="form-control" id="name_movie">
                    </div>
                    <div class="form-group">
                        <label for="">image</label>
                        <input type="file" name="image" class="form-control" id="image">
                    </div>
                    <div class="mb-3">
                        <label for="type" class="form-label">type</label>
                        <select class="form-select" id="type_id" name="type_id">
                            @foreach ($types as $type)
                            <option value="{{ $type->id }}">{{ $type->name_type}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="">duration</label>
                        <input type="text" name="duration" class="form-control" id="duration">
                    </div>
                    <div class="form-group">
                        <label for="">nation</label>
                        <input type="text" name="nation" class="form-control" id="nation">
                    </div>
                    <div class="form-group">
                        <label for="">director</label>
                        <input type="text" name="director" class="form-control" id="director">
                    </div>
                    <div class="form-group">
                        <label for="">performer</label>
                        <input type="text" name="performer" class="form-control" id="performer">
                    </div>

                    <div class="form-group">
                        <label for="">show</label>
                        <input type="text" name="show" class="form-control" id="show">
                    </div>

                    <div class="form-group">
                        <label for="">content</label>
                        <input type="text" name="content" class="form-control" id="content">
                    </div>
                    <div class="form-group">
                        <label for="">link_trailler</label>
                        <input type="text" name="link_trailler" class="form-control" id="link_trailler">
                    </div>
                    <div class="mb-3">
                        <label for="categories" class="form-label">categories</label>
                        <select class="form-select" id="category_id" name="category_id">
                            @foreach ($categories as $category)
                            <option value="{{ $category->id }}">{{ $category->name_category}}</option>
                            @endforeach
                        </select>
                    </div>
                    <div>
                        <button class="btn btn-primary" type="submit">Add</button>
                        <a href="{{ route('movies.index') }}" class="btn btn-warning">Danh sách</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection
