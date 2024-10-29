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
        <h1 class="text-center">Danh Sách SP </h1>


        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Tên</th>
                    <th>Giá</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('combofoods.create')}}" class="btn btn-primary">Create New ComboFood</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($combofoods as $combofood)
                    <tr>
                        <td>{{ $combofood->combofood_id  }}</td>
                        <td>{{ $combofood->combofood_name }}</td>
                        <td>{{ $combofood->combofood_price }}</td>

                        <td class="button d-flex">
                            <a href="{{route('combofoods.edit', $combofood)}}" class="btn btn-warning">Sửa</a>
                            <form action="{{route('combofoods.destroy', $combofood)}}" method="post">
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
        {{-- {{$combofoods->links()}} --}}
    </div>
@endsection
