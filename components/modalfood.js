import React, { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/router";
import Testrandom from "../pages/testrandom";
import Randomstore from "../pages/randomstore";
import Modalstore from "./Modalstore";
import Image from "next/image";

export default function Modalfood() {
  const [showModalfood, setShowModal] = React.useState(false);

  const router = useRouter();

  return (
    <div className="container">
      <div className="text-center py-5">
        <Image className="text-center "
        src="/images/food.png"
        alt=""
        width={200}
        height={200}
        type="button"
        onClick={() => setShowModal(true)}
        />
        {/* <button
          className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded ml-4 "
          onClick={() => setShowModal(true)}
        >
          สุ่มเมนูอาหาร
        </button> */}
        {/* <Modalstore/> */}
      </div>
      {showModalfood ?(
        <div>
          <div className="border-2 rounded-lg shadow-lg flex flex-col w-11/12  m-auto bg-no-repeat focus:outline-none">
            {/*body*/}

            <div className="py-5 mt-2 justify-center">
              <div className="text-center font-bold text-black text-2xl ">
                อาหารของคุณในวันนี้
              </div>
              <Testrandom />
              {/* <Randomstore/> */}
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
