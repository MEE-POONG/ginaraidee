/* eslint-disable react/jsx-key */
import React from "react";
import { useRouter } from "next/router";

import Image from "next/image";

export default function Testrandom() {
  const _ = require("lodash");

  const array = [
    <Image src="/images/delivery.png" alt="" width={200} height={200} />,
    <Image src="/images/kooking.png" alt="" width={200} height={200} />,
    <Image src="/images/tomrang.jpg" alt="" width={200} height={200} />,
    <Image src="/images/tomrang2.jpg" alt="" width={200} height={200} />,
    <Image src="/images/pp1.webp" alt="" width={200} height={200} />,
    <Image src="/images/pp2.webp" alt="" width={200} height={200} />,
    <Image src="/images/pp3.webp" alt="" width={200} height={200} />,
    <Image src="/images/pp4.webp" alt="" width={200} height={200} />, 
    <Image src="/images/pp5.webp" alt="" width={200} height={200} />,
    <Image src="/images/pp6.webp" alt="" width={200} height={200} />,
  ];

  const shuffled_array = _.shuffle(array);
  // console.log(shuffled_array);
  const router = useRouter();

  const num = Math.floor(Math.random(array) * array.length);

  return (
    <div className="text-center my-5 ">
      <div className="text-gray-800 text-7xl my-8">{shuffled_array[num]}</div>
      <button
        type="button"
        onClick={() => router.push("/")}
        className="px-6 mx-2 text-center text-black h-12 duration-150 font-semibold bg-white border border-gray-300 hover:shadow-lg hover:bg-white rounded-lg focus:shadow-outline "
      >
        สุ่มอีกครั้ง
      </button>
      <button
        className="px-8 mx-2 text-center text-black h-12 duration-150 font-semibold bg-white border border-gray-300 hover:shadow-lg hover:bg-white rounded-lg focus:shadow-outline "
        type="button"
        onClick={() => {
          router.push("/choose");
        }}
      >
        {"ตกลง"}
      </button>
    </div>
  );
}
