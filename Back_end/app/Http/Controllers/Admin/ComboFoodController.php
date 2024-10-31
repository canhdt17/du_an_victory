<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ComboFood;
use Illuminate\Http\Request;

class ComboFoodController extends Controller
{
    //
    public function index()
    {
        //
        $combofoods = ComboFood::all();
        return view('admin.combofoods.index', compact('combofoods'));
    }
    public function create()
    {
        return view('admin.combofoods.create');
    }

    public function store(Request $request)
    {
        //
        $request->validate([
            'combofood_name' => 'required|string|max:255',
        ]);

        ComboFood::create($request->all());

        return redirect()->route('combofoods.index')->with('success', 'Thêm mới thành công');
    }
    public function show(ComboFood $combofood)
    {
        //
        return view('admin.combofoods.show', compact('combofood'));
    }

    public function edit(ComboFood $combofood)
    {
        //
        return view('admin.combofoods.edit', compact('combofood'));
    }
    public function update(Request $request, ComboFood $combofood)
    {
        //
        $request->validate([
            'combofood_name' => 'required|string|max:255',
        ]);

        // $combofood = ComboFood::findOrFail($combofood);
        $combofood->update($request->all());

        return redirect()->route('combofoods.edit',$combofood)->with('success', 'Cập nhật thành công');
    }
    public function destroy(ComboFood $combofood)
    {
        //
        $combofood->delete();

        return redirect()->route('combofoods.index')->with('success', 'Xoá thành công');
    }

}
