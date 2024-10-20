<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <title>Document</title>
</head>
<body>
    
    <div class="container">
        <h1>Edit Type</h1>

        {{-- Display validation errors if there are any --}}
        @if ($errors->any())
            <div class="alert alert-danger">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form action="{{ route('types.update', $type->id) }}" method="POST">
            @csrf
            @method('PUT') {{-- This directive is necessary to send a PUT request for updating the resource --}}

            <div class="form-group">
                <label for="name">Type Name:</label>
                <input type="text" name="name" id="name" class="form-control" value="{{ old('name', $type->name) }}" required>
            </div>

            <button type="submit" class="btn btn-primary">Update Type</button>
            <a href="{{ route('types.index') }}" class="btn btn-secondary">Cancel</a>
        </form>
    </div>
          {{-- Bootstrap JS and dependencies --}}
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

</body>
</html>