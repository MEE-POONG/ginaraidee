/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { listMenuState } from "../contaxt/listmenu"
import Image from "next/image";
import _ from "lodash";
import axios from "axios";

const defaultMenuState = [
  { id: "1", name: "สุ่มอีกรอบ", image: "/images/randomnow.png" }
]
export default function Testrandom() {
  const [menuList, setMenuList] = useState(defaultMenuState)
  const [random, setRandom] = useState(menuList[0]);

  useEffect(() => {
    getMenuData()
  }, [])

  const getMenuData = async () => {
    try {

      const { data } = await axios.get('/api/menu/')
      setMenuList(data?.data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const setListMenu = useSetRecoilState(listMenuState);

  function randomImg() {
    let ran = setInterval(() => {
      setRandom(_.shuffle(menuList)[0]);
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
    <div className="">
      <h2 className="text-xl font-bold py-3">คือ</h2>
      <div className="text-gray-800 text-7xl my-4 ">
        <Image src={random.image || '/images/randomnow.png'} alt="" width={200} height={200} />
      </div>
      <div className="text-center p-5 flex-auto justify-center">

        <h2 className="text-2xl font-bold py-3 text-yellow-400 "> {random.namemenu}</h2>
      </div>
      {/* <div className="">
        <h1 className="text-xl font-bold py-3 self-center">คือ</h1>
        <div className="text-2xl font-bold py-3 text-yellow-400"> {random.namemenu}</div>
      </div>
      */}
      <button
        type="button"
        onClick={() => randomImg()}
        className="mb-2 md:mb-0 bg-yellow-400 border border-yellow-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-300"
      >
        สุ่มอีกครั้ง
      </button>
      <button
        className="mx-2 mb-2 md:mb-0 bg-yellow-400 border border-yellow-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-300"
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
