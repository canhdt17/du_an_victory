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
        <h1 class="text-center">Danh sách voucher </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Code</th>
                    <th>Discount Amount</th>
                    <th>Expiry Date</th>
                    <th>Active</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('voucher.create')}}" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($vouchers as $voucher)
                    <tr>
                        <td>{{ $voucher->id  }}</td>
                        <td>{{ $voucher->code }}</td>
                        <td>
                            {{ $voucher->discount_amount }}
                        </td>
                        <td>{{ $voucher->expiry_date }}</td>
                        <td>{{ $voucher->is_active }}</td>
                        <td class="button d-flex">
                            <a href="{{route('voucher.edit', $voucher)}}" class="btn btn-warning">Sửa</a>
                            <form action="{{route('voucher.destroy', $voucher)}}" method="post">
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
        {{-- {{$seatTypes->links()}} --}}
    </div>
@endsection
