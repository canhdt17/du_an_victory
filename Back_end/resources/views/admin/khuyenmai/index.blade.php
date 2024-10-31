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
        <h1 class="text-center">Danh sách Khuyến Mãi </h1>
        

        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Image</th>
                    <th>Time Date</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('khuyenMai.create')}}" class="btn btn-primary">Create New</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($khuyenMais as $khuyenMai)
                    <tr>
                        <td>{{ $khuyenMai->id  }}</td>
                        <td>{{ $khuyenMai->title }}</td>
                        <td>
                            {{ $khuyenMai->content }}
                        </td>
                        <td>
                            @if($khuyenMai->image && \Storage::exists($khuyenMai->image))
                            <img src="{{ \Storage::url($khuyenMai->image)}}" width="100px" alt="">
                            @endif
                        </td>
                        {{-- <td>{{ $khuyenMai->image }}</td> --}}
                        <td>{{ $khuyenMai->time_date }}</td>
                        <td class="button d-flex">
                            <a href="{{route('khuyenMai.edit', $khuyenMai)}}" class="btn btn-warning">Sửa</a>
                            <form action="{{route('khuyenMai.destroy', $khuyenMai)}}" method="post">
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
        {{-- {{$khuyenMais->links()}} --}}
    </div>
@endsection
