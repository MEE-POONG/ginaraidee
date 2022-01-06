import Nav from "../components/nav";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Storelist } from "../components/storeList";
// import { data } from "autoprefixer";
// import { data } from "autoprefixer";

const initialState = {
  namestore: "",
  img: "",
};

const defaultStoreState = [];
export default function Addstore() {
  const [formStore, setFormStore] = useState(initialState);
  const [storeList, setStoreList] = useState(defaultStoreState);
  const { namestore } = formStore;
  const [imgFile, setImgFile] = useState();

  useEffect(() => {
    getStoreData();
    // setDataStore();
  }, []);

  const getStoreData = async () => {
    try {
      const { data } = await axios.get("/api/stores/");
      setStoreList(data?.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handelSubmitFile = async (event) => {
    const file = event.target.files[0];
    setImgFile(file);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const validationError = validationStore();
    if (validationError) return;

    const setDataImgError = await uploadImage(imgFile);
    if (setDataImgError) return;
    // console.log();

    setFormStore(initialState);

    await Swal.fire({
      icon: "success",
      title: "เพิ่มข้อมูลสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
    await getStoreData();
  };

  const validationStore = () => {
    if (!namestore) {
      return Swal.fire({
        icon: "error",
        title: "กรอกข้อมูลไม่ครบ",
      });
    }
  };

  const uploadImage = async (img) => {
    try {
      let storeData;
      storeData = { ...formStore };
      if (img) {
        let formData = new FormData();
        formData.append("file", img, img.namestore);
        const { data } = await axios.post(
          "http://upload-image.gin-a-rai-dee.daddybody.company/upload/",
          formData
        );
        console.log(data?.filename);
        storeData.img = data?.filename || formStore?.img;
      }
      setImgFile("");
      console.log(storeData);
      const setDataImgError = await setDataStore(storeData); //ส่งไปยัง setDataStore
      if (setDataImgError) return;
    } catch (error) {
      return true;
    }
  }; //ส่วนเพิ่มรูปภาพ
  const showImage = () =>
    !formStore.img
      ? imgFile
        ? URL.createObjectURL(imgFile)
        : "https://i.stack.imgur.com/y9DpT.jpg"
      : "uploads/" + formStore.img;

  const setDataStore = async (storeData) => {
    try {
      // console.log(storeData);
      await axios.post("/api/stores", storeData);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "เพิ่มข้อมูลไม่สำเร็จ",
      });
      return true;
    }
  }; //ตัวรับรูปภาพมาจาก uploadImage

  return (
    <div>
      <Nav />
      <div className="container mx-auto max-w-lg">
        <div className="px-4 flex-auto">
          <div className="text-center">
            <h1 className="text-2xl bg-shadow font-bold py-5">
              เพิ่มร้านอาหาร
            </h1>
          </div>
          <form className="w-full max-w-lg" onSubmit={handelSubmit}>
            <div className="flex space-x-2 p-1 bg-yellow-100 rounded-md">
              <input
                onChange={(e) =>
                  setFormStore({ ...formStore, namestore: e.target.value })
                }
                value={namestore}
                type="text"
                placeholder="ชื่อร้าน"
                className="border-2 border-yellow-400 rounded-md w-full h-11 outline-none px-5"
              />
            </div>
            <div className="flex items-center justify-center w-full py-5 ">
              <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div className="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                  </svg>
                  <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    <img className="has-mask h-36 object-center" src={showImage()} />
                  </div>
                  <p className="pointer-none text-gray-500 "><span className="text-sm">เลือกไฟล์</span></p>
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handelSubmitFile}
                  id="img"
                  name="img"
                />
              </label>
            </div>
            <div className="text-center py-4">
              <button className="bg-yellow-400 px-2 py-1 w-20 rounded-md text-white font-semibold">
                เพิ่ม
              </button>
            </div>
          </form>
          <div className="py-5">
            <Storelist data={storeList} />
          </div>
        </div>
      </div>
    </div>
  );
}
