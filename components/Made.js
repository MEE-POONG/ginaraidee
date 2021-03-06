import React from "react";

import Image from "next/image";

export default function Made({ data, listMenu }) {
  console.log(data);
  return (
    <div>
      <div className="container mx-auto max-w-lg py-5">
        <div className=" px-4 py-5 flex-auto">
          <div className="text-center">
            <h1 className="text-2xl bg-shadow font-bold ">ทำกินเอง</h1>
          </div>
          <>
            <div className="py-5 ">
              <div className="border-2 border-gray-300 rounded-lg px-3 bg-white py-5 ">
                <div className="font-bold text-center text-2xl">
                  {listMenu.name}
                </div>
                <div className="text-center py-6 ">
                  <Image
                    src={
                      `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                      listMenu.img
                    }
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-3xl"
                  />
                </div>

                <p className=" text-center text-lg m-2">วัตถุดิบและวิธีการทำ</p>
                <div className="grid grid-cols-2 gap-1 ">
                  <div className="col-span-12 rounded-lg place-content-center">
                    <div className="text-lg col-span-4">
                      <p className="font-bold py-2">วัตถุดิบ</p>
                      <div className="pl-2">
                        <p className="">{listMenu.staple}</p>
                      </div>
                      <div>
                        <p className="font-bold py-2">ขั้นตอนการทำ</p>
                        <div className=" pl-2">
                          <p className="">{listMenu.step}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>
      </div>
    </div>
  );
}
