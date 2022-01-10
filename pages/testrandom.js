/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { listMenuState } from "../contaxt/listmenu"
import Image from "next/image";
import _ from "lodash";
import axios from "axios";

const defaultMenuState = [
  { id: "1", name: "สุ่มเลย", image: "/images/randomnow.png" }
]
export default function Testrandom() {
  const [menuList, setMenuList] = useState(defaultMenuState)
  const [random, setRandom] = useState(menuList[0]);

  
  const setListMenu = useSetRecoilState(listMenuState);
  
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


  function randomImg() {
    let ran = setInterval(() => {
      setRandom(_.shuffle(menuList)[0]);
    }, 50);
    setTimeout(() => {
      clearInterval(ran);
    }, 5000);
  }
  useEffect(() => {
    randomImg();
  },[]);

  const router = useRouter();
  console.log(menuList);
  return (
    <div className="">
    
      <div className="text-gray-800 text-7xl my-4 ">
        <Image className="rounded-2xl" src={random.image ||`http://upload-image.gin-a-rai-dee.daddybody.company/` + random.img} alt="" width={200} height={200} />
      </div>
        <h1 className="text-2xl col-span-1 font-bold ">คือ</h1>
        <h1 className="text-2xl px-5 font-bold text-center text-yellow-400 col-span-3">  {random.name}</h1>
      <button
        type="button"
        onClick={() => randomImg()}
        className="mb-2 mt-5 md:mb-0 bg-yellow-400 border border-yellow-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-300"
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
