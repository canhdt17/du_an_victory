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
        <h1 class="text-center">Danh sách ghế </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Loại ghế</th>
                    <th>Số Ghế</th>
                    <th>Id Phòng</th>
                    <th>Trạng thái</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('seat.create')}}" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $seat)
                    <tr>
                        <td>{{ $seat->id  }}</td>
                        <td>{{ $seat->seat_type_id }}</td>
                        <td>
                            {{ $seat->seat_number }}
                        </td>
                        <td>{{ $seat->room_id }}</td>
                        <td>{{ $seat->seat_status }}</td>
                        <td class="button d-flex">
                            <a href="{{route('seat.edit', $seat)}}" class="btn btn-warning">Sửa</a>
                            <form action="{{route('seat.destroy', $seat)}}" method="post">
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
        {{$data->links()}}
    </div>
@endsection
