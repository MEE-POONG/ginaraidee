/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { listStoreState } from "../contaxt/liststore";
import _ from "lodash";
import axios from "axios";
import Image from "next/image";

const defaultStoreState = [
  { id: "1", name: "สุ่มอีกรอบ", image: "/images/randomnow.png" }
]
export default function Testrandom() {
  const [storeList, setStoreList] = useState(defaultStoreState)
  const [random, setRandom] = useState(storeList[0]);
  
  const setListStore = useSetRecoilState(listStoreState);
  useEffect(() => {
    getStoreData()
    getNameMenuBystore()

  }, [])

  const getStoreData = async () => {
    try {

      const { data } = await axios.get('/api/stores/')
      setStoreList(data?.data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  const getNameMenuBystore = async () => {
    try {
      const { data } = await axios.get('/api/menubystore')
      setMenuByStoreList(data?.data)//ในหน้าที่เราคลิกเลือกร้านค้า
    } catch (error) {
      console.log(error);
    }

  }


  function randomImg() {
    let ran = setInterval(() => {
      setRandom(_.shuffle(storeList)[0]);
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

      <div className="text-gray-800 text-7xl my-4 ">
        <Image className="rounded-2xl" src={random.image || `http://upload-image.gin-a-rai-dee.daddybody.company/` + random.img} alt="" width={200} height={200} />
      </div>
        <h1 className="text-2xl col-span-1 font-bold ">ร้าน</h1>
        <h1 className="text-2xl col-span-3 px-5 font-bold text-center text-yellow-400 col-span-2"> {random.namestore}</h1>

      <button
        type="button"
        onClick={() => randomImg()}
        className="bg-yellow-400 mt-5 border border-yellow-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-300"
      >
        สุ่มอีกครั้ง
      </button>
      <button
        className="mx-2 mb-2 md:mb-0 bg-yellow-400 border border-yellow-400 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-yellow-300"
        type="button"
        onClick={() => {
          setListStore(random)
          router.push({
            pathname: "/bistro"
          });
        }}
      >
        {"ตกลง"}
      </button>
    </div>
  );
}
