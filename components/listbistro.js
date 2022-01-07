import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Listbistro({ data, listStore }) {
  const [menuByStoreList, setMenuByStoreList] = useState();

  useEffect(() => {
    getNameMenuBystore();
  }, []);

  const getNameMenuBystore = async () => {
    try {
      const { data } = await axios.get("/api/menubystore/" + listStore._id);
      console.log(data?.data);
      setMenuByStoreList(data?.data); //ในหน้าที่เราคลิกเลือกร้านค้า
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);
  console.log("listStore", listStore._id);
  // console.log(listStore);

  return (
    <div>
      <div className="text-center py-5">
        <div className="">
              <Image
                src={
                  `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                  listStore.img
                }
                alt=""
                width={100}
                height={100}
              />
            </div>
        <h1 className="text-2xl bg-shadow font-bold py-5">
          ร้าน {listStore.namestore}
        </h1>
        <h1 className="text-2xl bg-shadow font-bold py-5">เมนูทั้งหมด</h1>
      </div>
      {menuByStoreList?.map(({ _id, name, price,img }) => (
        <div key={_id} className="flex items-center justify-center px-3 py-3">
          <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full">
            <div className="p-3 text-center">
            <Image
              src={
                `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                img
              }
              alt=""
              width={200}
              height={200}
            />
            </div>

            <h1 className="text-center text-lg text-gray-900 font-bold">
              {name}
            </h1>
            <h1 className="text-center text-lg text-gray-900 font-bold">
              {price}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
}
