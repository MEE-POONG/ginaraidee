import React from "react";
import Navbar from "../components/Navbar";
// import Image from "next/image";

export default function Madeyourself() {
  return (
    <div>
      <Navbar />

      <div className="container mx-auto max-w-lg py-5">
        <div className=" px-4 py-5 flex-auto">
          <div className="text-center">
            <h1 className="text-2xl bg-shadow font-bold">ทำกินเอง</h1>
          </div>
          <div className="py-5">
            <div className="border-2 border-gray-300 rounded-lg px-3 bg-white">
              <p className="font-bold text-center text-lg">กระเพราหมูสับ</p>
              <p className=" text-center text-lg">วัตถุดิบและวิธีการทำ</p>
              <div className="grid grid-cols-2 gap-1 ">
                <div className="col-span-12 rounded-lg place-content-center">
                  <div className="grid grid-cols-6 gap-1 py-4 ">
                    <div className="text-lg col-span-4">
                      <p className="font-bold">วัตถุดิบ</p>
                      <div className="pl-2">
                        <p className="">1.หมูสับ</p>
                        <p className="">2.ใบกระเพรา</p>
                        <p className="">3.พริกแกง</p>
                      </div>
                      <div>
                        <p className="font-bold">ขั้นตอนการทำ</p>
                        <div className=" pl-2">
                          <p className="">1.หมูสับ</p>
                          <p className="">2.ใบกระเพรา</p>
                          <p className="">3.พริกแกง</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
