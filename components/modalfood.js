import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Testrandom from "../pages/testrandom";




export default function Pray() {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();

  //   const [panel, setPanel] = useState({ panel: false, name: "" });

  return (
    <div className="container">
      {/* <div className="text-center my-4 py-5">
        <button
          className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded "
          onClick={() => setShowModal(true)}
        >
          สุ่มเมนูอาหาร
        </button>
      </div> */}
      {showModal ? (
        <div>
          <div className="border-2 rounded-lg shadow-lg flex flex-col w-11/12  m-auto  bg-gray-100 focus:outline-none">
            {/*body*/}

            <div className=" mt-2 justify-center">
              <div className="text-center font-bold text-black text-2xl ">
                อาหารของคุณในวันนี้
              </div>
              <Testrandom />
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
