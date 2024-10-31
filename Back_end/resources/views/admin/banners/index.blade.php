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
        <h1 class="text-center">Danh Sách Banner </h1>


        <table border="1" class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>#ID</th>
                    <th>Image</th>
                    <th>Link</th>
                    <th>Thao tác</th>
                    <th>
                        <a href="{{ route('banners.create')}}" class="btn btn-primary">Create New banner</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($banners as $banner)
                    <tr>
                        <td>{{ $banner->banner_id  }}</td>
                        <td><img src="{{ asset('/storage/'.$banner->image) }}" alt="{{$banner->image}}" width="50px" height="50px"></td>
                        <td>{{ $banner->link }}</td>

                        <td class="button d-flex">
                            <a href="{{route('banners.edit', $banner)}}" class="btn btn-warning">Sửa</a>
                            <form action="{{route('banners.destroy', $banner)}}" method="post">
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
        {{-- {{$banners->links()}} --}}
    </div>
@endsection
