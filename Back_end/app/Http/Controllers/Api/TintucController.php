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
    try {
        $tinTucs = TinTuc::all(); // Lấy tất cả các tin tức
        return response()->json($tinTucs, 200);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Đã xảy ra lỗi khi lấy danh sách tin tức',
            'error' => $e->getMessage()
        ], 500);
    }
   }

   // Lấy thông tin của một tin tức
   public function show($id)
   {
    try {
        $tinTuc = TinTuc::find($id); // Tìm tin tức theo ID
        if (!$tinTuc) {
            return response()->json(['message' => 'Tin tức không tồn tại'], 404);
        }

        return response()->json($tinTuc, 200);
    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Đã xảy ra lỗi khi lấy tin tức',
            'error' => $e->getMessage()
        ], 500);
    }

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
    //    $file = $request->file('imager');
    //    $path_image = $file->getClientOriginalName();

       $tinTuc = TinTuc::create([
           'name_TinTuc' => $request->name_TinTuc,
           'sub_title' => $request->sub_title,
           'content' => $request->content,
           'imager' => $request->imager,
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
        $image= $request->image;
        //neu cap nhap anh 
        if( $image == ""){
            $data['image'] = $tinTuc->image;
        }else{
            $data['image']=$image;
        }
       $tinTuc->name_TinTuc = $request->name_TinTuc;
       $tinTuc->sub_title = $request->sub_title;
       $tinTuc->content = $request->content;

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
