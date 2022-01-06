import Nav from "../components/nav";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Foodlist from "../components/foodlist";
import { data } from "autoprefixer";
// import Image from "next/image";

const initialState = {
  name: "",
  staple: "",
  step: "",
  img: "",
};

const defaultMenuState = [];
export default function Addfood() {
  const [formMenu, setFormMenu] = useState(initialState);
  const [menuList, setMenuList] = useState(defaultMenuState);
  const [isEdit, setIsEdit] = useState(false);
  const { name, staple, step } = formMenu;
  const [imgFile, setImgFile] = useState();
  //  const [upImg, setUpImg] = useState(initialState)


  useEffect(() => {
    getMenuData();
  }, []);

  const getMenuData = async () => {
    try {
      const { data } = await axios.get("/api/menu/");
      setMenuList(data?.data);
      // setImgFile(data?.data)
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

    const setDataError = await uploadImage(imgFile);
    if (setDataError) return;

    setFormMenu(initialState);

    await Swal.fire({
      icon: "success",
      title: "เพิ่มข้อมูลสำเร็จ",
      showConfirmButton: false,
      timer: 2000,
    });

    await getMenuData();
  };

  const validationMenu = () => {
    if (!name || !staple || !step) {
      return Swal.fire({
        icon: "error",
        title: "กรุณากรอกข้อมูลไม่ครบ",
      });
    }
  };

  const getFoodsDataById = async (id) => {
    try {
      const { data } = await axios.get("/api/menu/" + id);
      setIsEdit(true);
      setFormMenu({
        _id: data.data._id,
        name: data.data.name,
        staple: data.data.staple,
        step: data.data.step,
        // img: data.data.img
      });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async (img) => {
    try {
      let menuData;
      menuData = { ...formMenu };

      if (img) {
        let formData = new FormData();
        formData.append("file", img, img.name);
        const { data } = await axios.post(
          "http://upload-image.gin-a-rai-dee.daddybody.company/upload/",
          formData
        );
        console.log(data?.filename);
        menuData.img = data?.filename || formMenu?.img;
      }

      setImgFile("");

      // console.log(menuData);

      const setDataError = await setDataMenu(menuData);
      if (setDataError) return;
    } catch (error) {
      return true;
    }
  }; //ส่วนเพิ่มรูปภาพ
  const setDataMenu = async (data) => {
    try {
      if (isEdit) {
        await axios.put("/api/menu/" + formMenu._id, data);
      } else {
        await axios.post("/api/menu/", data);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "พังยับ",
        text: "พังอะครับพรี่ ติดต่อแอดมินด่วนๆ!",
      });
      return true;
    }
  };

  const deleteFoodsById = async (id) => {
    try {
      await Swal.fire({
        icon: "info",
        title: "คุณต้องการลบข้อมูลนี้หรือไม่",
        confirmButtonText: "ต้องการ",
        cancelButtonText: "ไม่ต้องการ",
        showCancelButton: true,
      }).then(async (e) => {
        if (e.isConfirmed) {
          await axios.delete("/api/menu/" + id);
          await Swal.fire({
            icon: "success",
            title: "ลบข้อมูลเรียบร้อยแล้ว",
            showConfirmButton: false,
            timer: 2000,
          });
          getMenuData();
        }
      });
    } catch (error) {
      await Swal.fire({
        icon: "error",
        title: "ลบข้อมูลไม่สำเร็จ",
      });
    }
  };
  const showImage = () =>
    !formMenu.img
      ? imgFile
        ? URL.createObjectURL(imgFile)
        : "https://i.stack.imgur.com/y9DpT.jpg"
      : "uploads/" + formMenu.img;
  console.log(data);

  return (
    <div>
      <Nav />
      <div className="container mx-auto max-w-lg">
        <div className="px-4 flex-auto">
          <div className="text-center">
            <h1 className="text-2xl bg-shadow font-bold py-5">
              เพิ่มเมนูอาหาร
            </h1>
          </div>
          <form className="w-full max-w-lg" onSubmit={handelSubmit}>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb-2"
                htmlFor="grid-first-name"
              >
                ชื่อเมนู
              </label>
              <input
                onChange={(e) =>
                  setFormMenu({ ...formMenu, name: e.target.value })
                }
                value={name}
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="name"
                type="text"
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb-2"
                htmlFor="grid-first-name"
              >
                วัดถุดิบ
              </label>
              <textarea
                onChange={(e) =>
                  setFormMenu({ ...formMenu, staple: e.target.value })
                }
                value={staple}
                className="appearance-none block h-80 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="staple"
                type="text"
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb-2"
                htmlFor="grid-first-name"
              >
                ขั้นตอนการทำ
              </label>
              <textarea
                onChange={(e) =>
                  setFormMenu({ ...formMenu, step: e.target.value })
                }
                value={step}
                className="appearance-none block h-80 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="step"
                type="text"
              />
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

            <div className="text-center py-4">
              <button className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded">
                เพิ่มเมนูอาหาร
              </button>
            </div>
          </form>
        </div>
      </div>
      <Foodlist
        data={menuList}
        getFoodsDataById={getFoodsDataById}
        deleteFoodsById={deleteFoodsById}
      />
    </div>
  );
}
