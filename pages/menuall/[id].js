import Navbar from "../../components/Navbar";
import Allmenu from "../../components/allmenu";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Menuall({}) {
  const router = useRouter();
  console.log(router.query.id);

  const [store, setStore] = useState();
  const [menuList, setMenuList] = useState();
  console.log(menuList);


  useEffect(() => {
    getMenuData();
    getStoreData();
  }, []);

  const getMenuData = async () => {
    try {
        if (router.query.id){
      const { data } = await axios.get("/api/menubystore/" + router.query.id);
      setMenuList(data?.data);
      console.log(data);
        }
    } catch (error) {
      console.log(error);
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
  if (!store) return <div>loading...</div>;
  return (
    <div>
      <Navbar />
      <div className="container mx-auto max-w-lg py-5">
        <div className="px-4 flex-auto">
          <div className="text-center">
            <h1 className="text-2xl bg-shadow font-bold py-5">
              ร้าน {store.namestore}{" "}
            </h1>
          </div>
        </div>
      </div>
      <Allmenu menuList={menuList}/>
    </div>
  );
}
