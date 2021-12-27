import Nav from "../../components/nav";
import Allmenu from "../../components/allmenu";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const defaultFormMenu = { name: "", price: "", storeId: "" };
export default function Addmenulist({ }) {
  const router = useRouter();
  console.log(router.query.id);

  const [store, setStore] = useState();
  const [formMenu, setFormMenu] = useState(defaultFormMenu);
  const [isEdit, setIsEdit] = useState(false);
  const [menuList, setMenuList] = useState();
  console.log(menuList);


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

  const handelSubmit = async (e) => {
    e.preventDefault();
    const validationError = validationMenu();
    if (validationError) return;
    const setDataError = await setDataMenu();
    if (setDataError) return;
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

   const setDataMenu = async () => {
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
      <Allmenu menuList={menuList}  getFoodsDataById={getFoodsDataById} deleteFoodsById={deleteFoodsById}/>
    </div>
  );
}
