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
        <h1 class="text-center">Danh sách loại ghế </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Loại ghế</th>
                    <th>Giá</th>
                    <th>Ngày thêm mới</th>
                    <th>Ngày Cập nhật</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('seatType.create')}}" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($seatTypes as $seatType)
                    <tr>
                        <td>{{ $seatType->id  }}</td>
                        <td>{{ $seatType->seat_type_name }}</td>
                        <td>
                            {{ $seatType->seat_price }}
                        </td>
                        <td>{{ $seatType->created_at }}</td>
                        <td>{{ $seatType->updated_at }}</td>
                        <td class="button d-flex">
                            <a href="{{route('seatType.edit', $seatType)}}" class="btn btn-warning">Sửa</a>
                            <form action="{{route('seatType.destroy', $seatType)}}" method="post">
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
        {{$seatTypes->links()}}
    </div>
@endsection
