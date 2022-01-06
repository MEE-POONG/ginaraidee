import React, { useState } from "react";
// import Image from "next/image";
import Testrandom from "../pages/testrandom";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";

export default function Modaldrink() {
  const [showModalfood, setShowModal] = React.useState(false);

  return (
    <div className=" justify-center items-center flex  ">
        <div className="border-0 rounded-lg shadow-lg w-full h-auto cursor-pointer shover:shadow-2xl hover:scale-105 transform transition-all duration-500 ">
        <div
          className="py-10 w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md group-hover:opacity-75 lg:h-80 lg:aspect-none pb-5"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <Image 
            src="/images/drink.webp"
            alt=""
            width={200}
            height={180}
            type="button"
          />
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
                <h2 className="text-2xl font-bold ">เมนูอาหารสำหรับวันนี้</h2>
                <Testrandom />
              </div>
            </div>
          </div>
        </div>

        /* </div>
       <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg ">
         <div className="md:w-auto border-0 rounded-lg shadow-lg  flex flex-col w-11/12  bg-white m-5 focus:outline-none px-5 py-5">
           <div
             type="button"
             onClick={() => setShowModal(false)}
           >
             <MdOutlineCancel size={24} className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
           </div>
           <div className="relative mt-8 justify-center">
             <div className="text-center font-bold text-blue-800 text-2xl ">
               เมนูอาหารสำหรับวันนี้
             </div>
             <Testrandom />
           </div>
         </div>
       </div> */
      ) : null}{" "}
    </div>
  );
}
