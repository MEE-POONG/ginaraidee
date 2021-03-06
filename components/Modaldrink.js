import React, { useState } from "react";
// import Image from "next/image";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import Testrandomdrink from "../pages/testrandomdrink";

export default function Modaldrink() {
  const [showModalfood, setShowModal] = React.useState(false);

  return (
    <div className=" justify-center items-center flex px-10 mt-10">
        <div className="border-0 rounded-lg shadow-lg w-full h-auto cursor-pointer shover:shadow-2xl hover:scale-105 transform transition-all duration-500 ">
        <div
          className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:h-80 lg:aspect-none pb-5 bg-yellow-50"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <Image 
            src="/images/ชง-01.png"
            alt=""
            width={250}
            height={250}
            type="button"
          />
          <div>
              <span className="text-2xl mt-10 font-bold">สุ่มร้านเครื่องดื่ม  </span>
            </div>
        </div>
      </div>
      {showModalfood ? (
        <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
          <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div className="">
              <div
                className=""
                type="button"
                onClick={() => setShowModal(false)}
              >
                <MdOutlineCancel size={24} className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
              </div>
              <div className="text-center p-5 flex-auto justify-center">
                <h2 className="text-2xl font-bold ">ร้านเครื่องดื่มสำหรับวันนี้</h2>
                <Testrandomdrink />
              </div>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
