<?php

namespace App\Http\Controllers\Api;

use App\Models\TinTuc;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TintucController extends Controller
{
   // Lấy danh sách tất cả tin tức
   public function index()
   {
       $tinTuc = TinTuc::all();
       return response()->json($tinTuc, 200);
   }

   // Lấy thông tin của một tin tức
   public function show($id)
   {
       $tinTuc = TinTuc::find($id);
       if (!$tinTuc) {
           return response()->json(['message' => 'Tin tức không tồn tại'], 404);
       }
       return response()->json($tinTuc, 200);
   }

   // Tạo mới tin tức
   public function store(Request $request)
   {
       $request->validate([
           'name_TinTuc' => 'required',
           'sub_title' => 'required',
           'content' => 'required',
           'imager' => 'required'
       ]);
       $file = $request->file('imager');
       $path_image = $file->getClientOriginalName();
       $tinTuc = TinTuc::create([
           'name_TinTuc' => $request->name_TinTuc,
           'sub_title' => $request->sub_title,
           'content' => $request->content,
           'imager' => $path_image,
           'slug' => Str::slug($request->name_TinTuc),
       ]);

       return response()->json($tinTuc, 201);
   }

   // Cập nhật tin tức
   public function update(Request $request, $id)
   {
       $request->validate([
           'name_TinTuc' => 'required',
           'sub_title' => 'required',
           'content' => 'required',
           'imager' => 'required'
       ]);

       $tinTuc = TinTuc::find($id);
       if (!$tinTuc) {
           return response()->json(['message' => 'Tin tức không tồn tại'], 404);
       }

        //neu cap nhap anh 
        if($request->hasFile('imager')){
            $file = $request->file('imager');
            $path_image = $file->getClientOriginalName();
            $tinTuc->imager=$path_image;
        }else{
            $tinTuc->imager= $tinTuc->imager;
        }
       $tinTuc->name_TinTuc = $request->name_TinTuc;
       $tinTuc->sub_title = $request->sub_title;
       $tinTuc->content = $request->content;

       if ($tinTuc->isDirty('name_TinTuc')) {
           $tinTuc->slug = Str::slug($request->name_TinTuc);
       }

       $tinTuc->save();

       return response()->json($tinTuc, 200);
   }

   // Xóa tin tức
   public function destroy($id)
   {
       $tinTuc = TinTuc::find($id);
       if (!$tinTuc) {
           return response()->json(['message' => 'Tin tức không tồn tại'], 404);
       }

       $tinTuc->delete();
       return response()->json(['message' => 'Xóa thành công'], 200);
   }
   public function LastestTinTuc(){
    $LastTinTucs = TinTuc::orderByDesc('id')->take(4)->get();
    return response()->json($LastTinTucs);
   }
}
