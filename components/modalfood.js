import React, { useState } from "react";
import Image from "next/image";
// import { useRecoilState } from 'recoil';

export default function Pray() {
  const [showModal, setShowModal] = React.useState(false);

  const [panel, setPanel] = useState({ panel: false, name: "" });

  return (
    <div className="container">
      <div className="text-center my-4">
        <button
          className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded"
          onClick={() => setShowModal(true)}
        >
          สุ่มเมนูอาหาร
        </button>
      </div>
      {showModal ? (
        <div>
          <div className="border-0 rounded-lg shadow-lg  flex flex-col w-11/12  m-auto  bg-gray-100 focus:outline-none">
            {/*body*/}

            <div className="relative mt-5 justify-center mr-4">
              <div className="text-center font-bold text-black text-2xl ">
                อาหารของคุณในวันนี้
              </div>
              {/* <div className=" px-10 py-2 mb-4"></div> */}
              <div className=" container m-2 ">
                <div className="text-center ">
                  <div className="">
                    <div className="grid grid-cols-2 gap-1 ">
                      <div className="col-span-4 rounded-lg place-content-center">
                        <div className="">
                          <Image
                            src="/images/tomrang2.jpg"
                            alt=""
                            width={200}
                            height={200}
                          />
                        </div>
                        <div className="py-4 text-center">
                          <div className="text-xl">ต้มเล้งแซ่บๆจ้า</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" text-center mt-5 p-2">
                  <button
                    className="w-fill px-8 text-center text-black h-12 duration-150 font-semibold bg-white border border-gray-300 hover:shadow-lg hover:bg-white rounded-lg focus:shadow-outline "
                    type="button"
                  >
                    {"ตกลง"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
}
