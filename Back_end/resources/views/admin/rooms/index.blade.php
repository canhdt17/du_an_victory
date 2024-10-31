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
        <h1 class="text-center">Danh Sách Phòng </h1>


        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Tên</th>
                    <th>Tổng số ghế</th>
                    <th>Khu vực</th>

                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('rooms.create')}}" class="btn btn-primary">Create New Room</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($rooms as $room)
                    <tr>
                        <td>{{ $room->id  }}</td>
                        <td>{{ $room->room_name }}</td>
                        <td>{{ $room->total_seat }}</td>
                        <td>{{ $room->area ? $room->area->area_name : 'N/A' }}</td>

                        <td class="button d-flex">
                            <a href="{{ route('rooms.edit', $room->id) }}" class="btn btn-warning">Sửa</a>
                            <form action="{{route('rooms.destroy', $room->id)}}" method="post">
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
        {{-- {{$rooms->links()}} --}}
    </div>
@endsection
