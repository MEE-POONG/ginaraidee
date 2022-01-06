import Nav from "../../components/nav";
import Allmenu from "../../components/allmenu";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { HiOutlineSaveAs } from "react-icons/hi";

const defaultFormMenu = { name: "", price: "", img: "", storeId: "" };
export default function Addmenulist({ }) {
  const router = useRouter();
  // console.log(router.query.id);
  const [store, setStore] = useState();
  const [formMenu, setFormMenu] = useState(defaultFormMenu);
  const [isEdit, setIsEdit] = useState(false);
  const [menuList, setMenuList] = useState();
  const [imgFile, setImgFile] = useState();
  // console.log(menuList);
  useEffect(() => {
    getMenuData();
    getStoreData();
  }, []);

  const getMenuData = async () => {
    try {
      if (router.query.id) {
        const { data } = await axios.get("/api/menubystore/" + router.query.id);
        setMenuList(data?.data);
        console.log(data);
      }
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
    const validationError = validationMenu();
    if (validationError) return;
    const setDataError = await setDataMenus();
    if (setDataError) return;
    const setDataImgError = await uploadImage(imgFile);
    if (setDataImgError) return;
    setFormMenu(defaultFormMenu);
    await Swal.fire({
      icon: "success",
      title: "เพิ่มข้อมูลสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });
    await getMenuData();
  };

  const validationMenu = () => {
    if (!formMenu.name || !formMenu.price) {
      return Swal.fire({
        icon: "error",
        title: "กรอกข้อมูลไม่ครบ",
      });
    }
  };

  const setDataMenus = async () => {
    try {
      if (isEdit) {
        await axios.put("/api/food/" + formMenu._id, formMenu);
      } else {
        await axios.post("/api/food", { ...formMenu, storeId: router.query.id });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "เพิ่มข้อมูลไม่สำเร็จ",
      });
      return true;
    }
  };

  const getStoreData = async () => {
    try {
      if (router.query.id) {
        const { data } = await axios.get("/api/store/" + router.query.id);
        setStore(data?.data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getFoodsDataById = async (id) => {
    try {
      const { data } = await axios.get("/api/food/" + id);
      setIsEdit(true);
      setFormMenu({
        _id: data.data._id,
        name: data.data.name,
        price: data.data.price,
        storeId: data.data.storeId,
      });
    } catch (error) {
      console.log(error);
    }
  };


  const uploadImage = async (img) => {
    try {
      let menuByStoreData;
      menuByStoreData = { ...formMenu };
      if (img) {
        let formData = new FormData();
        formData.append("file", img, img.name);
        const { data } = await axios.post(
          "http://upload-image.gin-a-rai-dee.daddybody.company/upload/",
          formData
        );
        console.log(data?.filename);
        menuByStoreData.img = data?.filename || formMenu?.img;
      }
      setImgFile("");
      console.log(menuByStoreData);
      const setDataImgError = await setDataMenu(menuByStoreData); //ส่งไปยัง setDataStore
      if (setDataImgError) return;
    } catch (error) {
      return true;
    }
  }; //ส่วนเพิ่มรูปภาพ
  const setDataMenu = async (menuByStoreData) => {
    try {
      if (isEdit) {
        await axios.put("/api/food/" + formMenu._id, formMenu);
      } else {
        await axios.post("/api/food", { ...menuByStoreData, storeId: router.query.id });
      }
    } catch (error) {
      return Swal.fire({
        icon: "error",
        title: "เพิ่มข้อมูลไม่สำเร็จ",
      });
    }
  };

  const showImage = () =>
    !formMenu.img
      ? imgFile
        ? URL.createObjectURL(imgFile)
        : "https://i.stack.imgur.com/y9DpT.jpg"
      : "uploads/" + formMenu.img;

  const deleteFoodsById = async (id) => {
    try {
      await Swal.fire({
        icon: 'info',
        title: 'คุณต้องการลบข้อมูลนี้หรือไม่',
        confirmButtonText: 'ต้องการ',
        cancelButtonText: 'ไม่ต้องการ',
        showCancelButton: true,
      }).then(async e => {
        if (e.isConfirmed) {
          await axios.delete('/api/food/' + id)
          await Swal.fire({
            icon: 'success',
            title: 'ลบข้อมูลเรียบร้อยแล้ว',
            showConfirmButton: false,
            timer: 2000
          })
          getMenuData()
        }
      })
    } catch (error) {
      await Swal.fire({
        icon: 'error',
        title: 'ลบข้อมูลไม่สำเร็จ',
      })
    }
  }

  if (!store) return <div>loading...</div>;
  return (
    <div>
      <Nav />
      <div className="container mx-auto max-w-lg py-5">
        <div className="px-4 flex-auto">
          <div className="text-center">
            <h1 className="text-2xl bg-shadow font-bold py-5">
              ร้าน {store.namestore}{" "}
            </h1>
            <h1 className="text-2xl bg-shadow font-bold py-5">
              เพิ่มเมนูอาหาร
            </h1>
          </div>
          <form className="w-full max-w-lg py-5" onSubmit={handelSubmit}>
            <div className="py-1">
              <div className=" p-1 bg-yellow-100 rounded-md">
                <input
                  onChange={(e) =>
                    setFormMenu({ ...formMenu, name: e.target.value })
                  }
                  value={formMenu.name}
                  type="text"
                  placeholder="เมนู"
                  className="border-2 border-yellow-400 rounded-md w-full h-11 outline-none px-5"
                />
              </div>
            </div>
            <div className="py-1">
              <div className="p-1 bg-yellow-100 rounded-md">
                <input
                  onChange={(e) =>
                    setFormMenu({ ...formMenu, price: e.target.value })
                  }
                  value={formMenu.price}
                  type="text"
                  placeholder="ราคา"
                  className="border-2 border-yellow-400 rounded-md w-full h-11 outline-none px-5"
                />
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
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
            <div className="text-center py-3">
              <button
                className="h-10 bg-yellow-400 px-2 py-1 w-24 rounded-md text-white font-semibold"
                type="submit"
              >
                <div className="flex space-x-2 justify-center">
                  <HiOutlineSaveAs size={20} />
                  <div className="text-sm">เพิ่ม</div>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Allmenu menuList={menuList} getFoodsDataById={getFoodsDataById} deleteFoodsById={deleteFoodsById} />
    </div>
  );
}
