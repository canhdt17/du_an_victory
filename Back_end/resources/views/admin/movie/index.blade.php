<style>
    .button a,
    .button button {
        margin: 0 3px;
        width: 77px;
        height: 70px;
        align-content: center
    }

    .add {
        text-align: right;
    }

    .add a:hover {
        background-color: rgb(208, 221, 28);
        color: black
    }

    .search {
        display: flex;
    }

    .search input {
        width: 300px;
        height: 38px;
        margin-right: 5px;
    }
</style>

@extends('admin.layout.index')
@section('content')
    <div class="container mt-5">
        <h1 class="text-center">Danh sách Phim </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>name</th>
                    <th>image</th>
                    <th>type_id</th>
                    <th>duration</th>
                    <th>nation</th>
                    <th>director</th>
                    <th>performer</th>
                    <th>show</th>
                    <th>content</th>
                    <th>link_trailler</th>
                    <th>category_id</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('movies.create') }}" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($movies as $movie)
                    <tr>
                        <td>{{ $movie->id }}</td>
                        <td>{{ $movie->name_movie }}</td>
                        <td><img src="{{ asset('/storage/'.$movie->image) }}" alt="{{$movie->image}}" width="50px" height="50px"></td>
                        <td>{{ $movie->name_type }}</td>
                        <td>{{ $movie->duration }}</td>
                        <td>{{ $movie->nation }}</td>
                        <td>{{ $movie->director }}</td>
                        <td>{{ $movie->performer }}</td>
                        <td>{{ $movie->show }}</td>
                        <td>{{ $movie->content }}</td>
                        <td>{{ $movie->link_trailler }}</td>
                        <td>{{ $movie->name_category }}</td>
                        <td class="button d-flex">
                            <a href="{{ route('movies.edit', $movie->id) }}" class="btn btn-warning">Sửa</a>
                            <form action="{{ route('movies.destroy', $movie->id) }}" method="post">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn btn-danger"
                                    onclick="return confirm('Bạn có muốn xóa???')">Xóa</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>
    </div>
@endsection
