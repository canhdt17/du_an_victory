import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { ITinTuc } from "../../interface/tin_tuc";
import Joi, { date } from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import Logo from "../movie/logo";
import HeaderDashboard from "../movie/headerdashboard";
import MenuDashboard from "../movie/menudashboard";

type Props = {
  onAddTinTuc: (TinTucData: ITinTuc) => void;
};
const TinTucScheama = Joi.object({
  name_TinTuc: Joi.string().required().label("name_TinTuc"),
  sub_title: Joi.string().required().label("sub_title"),
  content: Joi.string().required().label("content"),

});



const CreateTinTuc: React.FC<Props> = ({ onAddTinTuc }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITinTuc>({
    resolver: joiResolver(TinTucScheama),
  });

  // useEffect(() => {
  //   const today = new Date();
  //   setCurrentDate(today.toISOString().slice(0, 10)); // Lưu ngày hiện tại vào state
  // }, []);
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");


  const cloudinaryUrl =
    "https://api.cloudinary.com/v1_1/dfcwk3b1b/image/upload";
  const onSubmit = async (TinTucDate: ITinTuc) => {
    try {
      console.log("imageUrl: ", imageUrl);
      const formattedShowData = {
        ...TinTucDate,
        // show: new Date(TinTucDate.show).toISOString().split("T")[0],
        imager: imageUrl
      };
      // formattedShowData.image = imageUrl;
      console.log("formattedShowData: ", formattedShowData);

      await onAddTinTuc(formattedShowData);
      alert("Thêm tin tuc thành công!");
    } catch (error: any) {
      alert(`Lỗi: ${error.message || "Không thể thêm phim"}`);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  

  const handleUpload = async () => {
    if (!file) return alert("Please select a file first.");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "upload"); // Thay 'your_upload_preset' bằng upload preset bạn đã tạo trong Cloudinary

    // Gửi yêu cầu POST tới Cloudinary
    fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Uploaded Image URL:", data.secure_url);
        setImageUrl(data.secure_url); // Lưu URL của ảnh đã upload
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
  };
  const today = new Date();
  return (
    <div>
      <div className="dashboards">
        <div>
          <Logo></Logo>
          <HeaderDashboard></HeaderDashboard>
          <div className="container-fluid">
            <div className="row">
              <div className="sidebar border border-right col-md-3 col-lg-2 p-0 ">
                <div
                  className="offcanvas-md offcanvas-end "
                  tabIndex={-1}
                  id="sidebarMenu"
                  aria-labelledby="sidebarMenuLabel"
                >
                  <MenuDashboard></MenuDashboard>
                </div>
              </div>
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Thêm Tin Tức</h1>
                  <div className="btn-toolbar mb-2 mb-md-0"></div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Tên chủ đề
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("name_TinTuc")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.name_TinTuc && (
                        <div className="text-danger ">
                          {errors.name_TinTuc.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Tiêu đề phụ
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("sub_title")}
                    />
                    <div id="emailHelp" className="form-text">
                      {errors.sub_title && (
                        <div className="text-danger ">
                          {errors.sub_title.message}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                  
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nội dung
                    </label>
                    <textarea                      
                      className="form-control"
                      id="exampleInputEmail1"
                      {...register("content")} >

                      </textarea>
                    <div id="emailHelp" className="form-text">
                      {errors.content && (
                        <div className="text-danger ">
                          {errors.content.message}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                      <label className="form-label text-white font-bold">Choose Image:</label>

                      <input className="text-white" type="file" onChange={handleFileChange} />
                      <button type='button' onClick={handleUpload}>Upload</button>
                      {imageUrl && (
                        <div>
                          <h2  className="text-white font-bold">Ảnh đã upload:</h2>
                          <img
                            src={imageUrl}
                            alt="Uploaded"
                            style={{ width: "200px", height: "auto" }}
                          />
                        </div>
                      )}
                      {errors.imager && (
                        <div className="text-danger">{errors.imager.message}</div>
                      )}
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Duyệt
                  </button>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CreateTinTuc;





