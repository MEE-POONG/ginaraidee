import React from "react";
import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

export default function Allmenu({ menuList, getFoodsDataById, deleteFoodsById }) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl bg-shadow font-bold py-5">
          เมนูทั้งหมด
        </h1>
      </div>
      <div className="grid gap-4 ml-5 mr-5 py-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {menuList?.map((menu) => (
          <div className="flex items-center justify-center px-5 py-2" key={menu._id} >
            <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full">
              <div className="col-span-9 text-center mt-5">
                <Image
                  src={
                    `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                    menu.img
                  }
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div className="">
                <h1 className="px-5 text-center text-lg text-gray-900 font-bold">{menu.name}</h1>
                <h1 className="px-5 text-center text-lg text-gray-900 font-bold">ราคา {menu.price} บาท</h1>
              </div>
              <div className=" p-3 float-right">
                <div type="button">
                  <a
                    onClick={() => deleteFoodsById(menu._id)}
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <RiDeleteBin5Line size={20} color="#dc2626" className="ml-2 float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                  </a>
                  <a
                    onClick={() => getFoodsDataById(menu._id)}
                    href="#"
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    <FiEdit size={20} color="#facc15" className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
