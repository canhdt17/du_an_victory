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
        <h1 class="text-center">Danh Sách Bình Luân </h1>


        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>User id</th>
                    <th>Movie id</th>
                    <th>content</th>
                    <th>Thao tác</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($comments as $comment)
                    <tr>
                        <td>{{ $comment->id  }}</td>
                        <td>{{ $comment->user_id }}</td>
                        <td>{{ $comment->movie_id }}</td>
                        <td>{{ $comment->content }}</td>
                        <td class="button d-flex">
                            <form action="{{route('comments.destroy', $comment)}}" method="post">
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
        {{-- {{$comments->links()}} --}}
    </div>
@endsection
