<?php

namespace App\Http\Controllers\Api;

use App\Models\TinTuc;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TinTucController extends Controller
{
   // Lấy danh sách tất cả tin tức
   public function index()
   {
       $tinTuc = TinTuc::paginate(6);
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
       try {
           // Xác thực các trường đầu vào
           $validated = $request->validate([
               'title' => 'required|string|max:255',
               'sub_title' => 'nullable|string|max:255',
               'content' => 'nullable|string',
               'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // xác thực trường ảnh
           ]);
   
           // Xử lý lưu trữ ảnh nếu có
           $imagePath = null;
           if ($request->hasFile('image')) {
               $image = $request->file('image');
               $imageName = time() . '_' . $image->getClientOriginalName();
               $imagePath = $image->storeAs('products', $imageName, 'public');
           }
   
           // Tạo mới bản ghi tin tức
           $tinTuc = TinTuc::create([
               'title' => $validated['title'],
               'sub_title' => $validated['sub_title'] ?? null,
               'content' => $validated['content'] ?? null,
               'image' => $imagePath, // Lưu đường dẫn ảnh vào trường 'image'
           ]);
   
           return response()->json($tinTuc, 201);
   
       } catch (\Exception $e) {
           return response()->json([
               'message' => 'Đã xảy ra lỗi khi tạo tin tức',
               'error' => $e->getMessage()
           ], 500);
       }
   }
   

   // Cập nhật tin tức
   public function update(Request $request, $id)
{
    try {
        // Tìm bản ghi tin tức theo ID
        $tinTuc = TinTuc::find($id);
        if (!$tinTuc) {
            return response()->json(['message' => 'Tin tức không tồn tại'], 404);
        }

        // Xác thực dữ liệu
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'sub_title' => 'nullable|string|max:255',
            'content' => 'nullable|string',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Xử lý cập nhật ảnh nếu có
        if ($request->hasFile('image')) {
            // Xóa ảnh cũ nếu tồn tại
            if ($tinTuc->imager) {
                \Storage::disk('public')->delete($tinTuc->imager);
            }

            // Lưu ảnh mới
            $image = $request->file('image');
            $imageName = time() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('products', $imageName, 'public');
            $tinTuc->imager = $imagePath;
        }

        // Cập nhật các trường khác
        $tinTuc->title = $validated['title'];
        $tinTuc->sub_title = $validated['sub_title'] ?? $tinTuc->sub_title;
        $tinTuc->content = $validated['content'] ?? $tinTuc->content;

        // Cập nhật slug nếu title thay đổi
        if ($tinTuc->isDirty('title')) {
            $tinTuc->slug = \Illuminate\Support\Str::slug($validated['title']);
        }

        // Lưu bản ghi
        $tinTuc->save();

        return response()->json($tinTuc, 200);

    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Đã xảy ra lỗi khi cập nhật tin tức',
            'error' => $e->getMessage()
        ], 500);
    }
}


   // Xóa tin tức
   public function destroy($id)
{
    try {
        // Tìm bản ghi tin tức theo ID
        $tinTuc = TinTuc::find($id);
        if (!$tinTuc) {
            return response()->json(['message' => 'Tin tức không tồn tại'], 404);
        }

        // Xóa ảnh nếu tồn tại
        if ($tinTuc->imager) {
            \Storage::disk('public')->delete($tinTuc->imager);
        }

        // Xóa bản ghi tin tức
        $tinTuc->delete();

        return response()->json(['message' => 'Xóa thành công'], 200);

    } catch (\Exception $e) {
        return response()->json([
            'message' => 'Đã xảy ra lỗi khi xóa tin tức',
            'error' => $e->getMessage()
        ], 500);
    }
}

}
