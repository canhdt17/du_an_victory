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
                    <th>User</th>
                    <th>Subject</th>
                    <th>Content</th>
                    {{-- <th>
                        <a href="{{ route('supports.create')}}" class="btn btn-primary">Create New ComboFood</a>
                    </th> --}}
                </tr>
            </thead>
            <tbody>
                @foreach ($supports as $support)
                    <tr>
                        <td>{{ $support->id }}</td>
                        <td>{{ $support->user_id}}</td>
                        <td>{{ $support->subject }}</td>
                        <td>{{ $support->content }}</td>

                        <td class="button d-flex">
                            {{-- <a href="{{route('supports.edit', $support)}}" class="btn btn-warning">Sửa</a> --}}
                            <form action="{{route('supports.destroy', $support)}}" method="post">
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
        {{-- {{$supports->links()}} --}}
    </div>
@endsection
