import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Listdrinkstore({ data, listStoredrink }) {
  const [drinkByStoredrinkList, setDrinkByStoredrinkList] = useState();

  useEffect(() => {
    getNameDrinkBystore();
  }, []);

  const getNameDrinkBystore = async () => {
    try {
      const { data } = await axios.get("/api/drinkbystore/" + listStoredrink._id);
      console.log(data?.data);
      setDrinkByStoredrinkList(data?.data); //ในหน้าที่เราคลิกเลือกร้านค้า
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);
  console.log("listStoredrink", listStoredrink._id);
  // console.log(listStore);

  return (
    <div>
      <div className="text-center py-5">
        <div className="">
          <Image
            className="rounded-2xl"
            src={
              `http://upload-image.gin-a-rai-dee.daddybody.company/` +
              listStoredrink.img
            }
            alt=""
            width={200}
            height={200}
          />
        </div>
        <h1 className="text-2xl bg-shadow font-bold py-5">
          ร้าน {listStoredrink.namestoredrink}
        </h1>
        <h1 className="text-2xl bg-shadow py-2 text-center">
          {listStoredrink.detail}
        </h1>
        <h1 className="text-2xl bg-shadow font-bold py-5">เมนูทั้งหมด</h1>
      </div>
      <div className="ml-3 mr-3 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {drinkByStoredrinkList?.map(({ _id, name, price, img }) => (
          <div key={_id} className="flex items-center justify-center px-3 py-3">
            <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full">
              <div className="p-3 text-center">
                <Image
                 className="rounded-2xl"
                  src={
                    `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                    img
                  }
                  alt=""
                  width={150}
                  height={150}
                />
              </div>

              <h1 className="text-center text-lg text-gray-900 font-bold">
                {name}
              </h1>
              <h1 className="text-center text-lg text-gray-900 font-bold mb-5">
                ราคา {price} บาท
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
