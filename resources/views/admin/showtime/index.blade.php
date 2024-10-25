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
        <h1 class="text-center">Danh sách lịch xuất chiếu </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>movie_id</th>
                    <th>room_id</th>
                    <th>showtime_date</th>
                    <th>start_time</th>
                    <th>end_time</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('showtimes.create') }}" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($showtimes as $showtime)
                    <tr>
                        <td>{{ $showtime->id }}</td>
                        <td>{{ $showtime->movie_id }}</td>
                        <td>
                            {{ $showtime->movie_id }}
                        </td>
                        <td>{{ $showtime->showtime_date }}</td>
                        <td>{{ $showtime->start_time }}</td>
                        <td>{{ $showtime->end_time }}</td>
                        <td class="button d-flex">
                            <a href="{{ route('showtimes.edit', $showtime) }}" class="btn btn-warning">Sửa</a>
                            <form action="{{ route('showtimes.destroy', $showtime) }}" method="post">
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
