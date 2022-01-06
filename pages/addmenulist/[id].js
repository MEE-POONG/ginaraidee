import Nav from "../../components/nav";
import Allmenu from "../../components/allmenu";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const defaultFormMenu = { name: "", price: "",img: "", storeId: "" };
export default function Addmenulist({ }) {
  const router = useRouter();
  // console.log(router.query.id);
  const [store, setStore] = useState();
  const [formMenu, setFormMenu] = useState(defaultFormMenu);
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

    // const setDataError = await setDataMenu();
    // if (setDataError) return;

    const setDataImgError = await uploadImage(imgFile);
    if (setDataImgError) return;

    // console.log();
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
      await axios.post("/api/food", { ...menuByStoreData, storeId: router.query.id });
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
          await axios.delete('/api/menu/' + id)
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
            <div className="m-2">
              เพิ่มรูปภาพอาหาร
              <div className="App-image">
                <img src={showImage()} width="500px"/>
              </div>
              <input
                className="py-1"
                type="file"
                onChange={handelSubmitFile}
                id="img"
                name="img"
              />
            </div>
            <div className="text-center py-3">
              <button
                className="h-10 bg-yellow-400 px-2 py-1 w-20 rounded-md text-white font-semibold"
                type="submit"
              >
                เพิ่ม
              </button>
            </div>
          </form>
        </div>
      </div>
      <Allmenu menuList={menuList} deleteFoodsById={deleteFoodsById} />
    </div>
  );
}
