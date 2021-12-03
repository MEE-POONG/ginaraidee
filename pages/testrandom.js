/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import _ from "lodash";

const array = [
  "/images/randomnow.png",

  "/images/kanggreensweet.jpg",
  "/images/kanggued.jpg",
  "/images/kangnormai.jpg",
  "/images/tomrang2.jpg",
  "/images/kangreang.jpg",
  "/images/kangsom.jpg",
  "/images/kangtaipra.jpg",
  "/images/tomjubcai.jpg",
  "/images/tomkakai.jpg",
  "/images/tomparo.jpg",
  "/images/tomyamkung.jpg",
  "/images/tomz.jpg",
  "/images/krapao1.jpg",
  "/images/kapaomoogrob.jpg",
];

export default function Testrandom() {
  const [random, setRandom] = useState(array[0]);

  function randomImg() {
    let ran = setInterval(() => {
      setRandom(_.shuffle(array)[0]);
    }, 50);
    setTimeout(() => {
      clearInterval(ran);
    }, 2000);
  }
  useEffect(() => {
    randomImg();
  }, []);

  const router = useRouter();
  return (
    <div className="text-center my-5 ">
      <div className="text-gray-800 text-7xl my-4 ">
        <Image src={random} alt="" width={200} height={200} />
      </div>

      <div className="m-2">
        <p>คือ :</p>
      </div>

      <button
        type="button"
        onClick={() => randomImg()}
        className=" px-6 mx-2 text-center text-black h-12 duration-150 font-semibold bg-white border border-gray-300 hover:shadow-lg hover:bg-white rounded-lg focus:shadow-outline "
      >
        สุ่มอีกครั้ง
      </button>
      <button
        className="  px-8 mx-2 text-center text-black h-12 duration-150 font-semibold bg-white border border-gray-300 hover:shadow-lg hover:bg-white rounded-lg focus:shadow-outline "
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
