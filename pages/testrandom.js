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
    <div className="text-center my-5 ">
      <div className="text-gray-800 text-7xl my-4 ">
        <Image src={random.image || '/images/randomnow.png'} alt="" width={200} height={200} />
      </div>

      <div className="grid grid-cols-2 gap-2 m-2">
        <h1 className="text-xl font-bold py-3 text-right ">คือ </h1>
        <div className="text-xl font-bold py-3 text-left text-yellow-400"> {random.namemenu}</div>
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
