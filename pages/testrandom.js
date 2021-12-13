/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import {listMenuState} from "../contaxt/listmenu"
import Image from "next/image";
import _ from "lodash";

const array = [
  { id: "1", name: "สุ่มอีกรอบ", image: "/images/randomnow.png" },
  {
    id: "2",
    name: "แกงเขียวหวาน",
    image: "/images/kanggreensweet.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "3",
    name: "แกงจืด",
    image: "/images/kanggued.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "4",
    name: "แกงหน่อไม้",
    image: "/images/kangnormai.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "5",
    name: "ต้มเล้ง",
    image: "/images/tomrang2.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "6",
    name: "แกงเหลือง",
    image: "/images/kangreang.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "7",
    name: "แกงส้ม",
    image: "/images/kangsom.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "8",
    name: "แกงไตปลา",
    image: "/images/kangtaipra.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "9",
    name: "แกงจับฉ่าย",
    image: "/images/tomjubcai.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "10",
    name: "ต้มข่าไก่",
    image: "/images/tomkakai.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "11",
    name: "แกงพะโล้",
    image: "/images/tomparo.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "12",
    name: "ต้มยำกุ้ง",
    image: "/images/tomyamkung.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "13",
    name: "ต้มแซ่บ",
    image: "/images/tomz.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "14",
    name: "กระเพรา",
    image: "/images/krapao1.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  {
    id: "15",
    name: "กระเพราหมูกรอบ",
    image: "/images/kapaomoogrob.jpg",
    rawmaterial: "หมากรอบ",
    stepfood: "ทำๆไปเถอะ",
  },
  // "/images/randomnow.png",
  // "/images/kanggreensweet.jpg",
  // "/images/kanggued.jpg",
  // "/images/kangnormai.jpg",
  // "/images/tomrang2.jpg",
  // "/images/kangreang.jpg",
  // "/images/kangsom.jpg",
  // "/images/kangtaipra.jpg",
  // "/images/tomjubcai.jpg",
  // "/images/tomkakai.jpg",
  // "/images/tomparo.jpg",
  // "/images/tomyamkung.jpg",
  // "/images/tomz.jpg",
  // "/images/krapao1.jpg",
  // "/images/kapaomoogrob.jpg",
];

export default function Testrandom() {
  const [random, setRandom] = useState(array[0]);

  const setListMenu = useSetRecoilState(listMenuState);
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
        <Image src={random.image} alt="" width={200} height={200} />
      </div>

      <div className="m-2">
        <div>คือ : {random.name}</div>
      </div>

      <button
        type="button"
        onClick={() => randomImg()}
        className=" px-6 mx-2 text-center text-white h-12 duration-150 font-semibold bg-yellow-300 border border-gray-300 hover:shadow-lg hover:bg-yellow-400 rounded-lg focus:shadow-outline "
      >
        สุ่มอีกครั้ง
      </button>
      <button
        className="  px-8 mx-2 text-center text-white h-12 duration-150 font-semibold bg-yellow-300 border border-gray-300 hover:shadow-lg hover:bg-yellow-400 rounded-lg focus:shadow-outline "
        type="button"
        onClick={() => {
          setListMenu(random)
          router.push({
            pathname: "/choose"
          });
        }}
      >
        {"ตกลง"}
      </button>
    </div>
  );
}
