import React, { useState } from "react";
// import Image from "next/image";
import { useRouter } from "next/router";
import Testrandom from "../pages/testrandom";
import Randomstore from "../pages/randomstore";

export default function Modalstore() {
  const [showModalstore, setShowModal] = React.useState(false);

  const router = useRouter();

  return (
    <div className="container">
      <div className="text-center py-5">
        <button
          className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded ml-4 "
          onClick={() => setShowModal(true)}
        >
          สุ่มร้านอาหาร
        </button>
      </div>
      {showModalstore ? (
         <div>
         <div className="border-2 rounded-lg shadow-lg flex flex-col w-11/12  m-auto bg-no-repeat focus:outline-none">
           {/*body*/}

           <div className="py-5 mt-2 justify-center">
             <div className="text-center font-bold text-black text-2xl ">
               อาหารของคุณในวันนี้
             </div>
             <Randomstore/>
           </div>
         </div>
       </div>
      ) : null}{" "}
    </div>
  );
}
