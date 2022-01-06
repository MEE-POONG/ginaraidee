
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { listStoredrinkState } from "../contaxt/liststroedrink";//
import Image from "next/image";
import _ from "lodash";
import axios from "axios";

const defaultMenuState = [
  { id: "1", namestore: "สุ่มอีกรอบ", image: "/images/randomnow.png" },
];

export default function Testrandomdrink() {
  const [storedrinkList, setStoredrinkList] = useState(defaultMenuState);
  const [random, setRandom] = useState(storedrinkList[0]);

  useEffect(() => {
    getDrinkData();
  }, []);

  const getDrinkData = async () => {
    try {
      const { data } = await axios.get("/api/storesdrink/");
      setStoredrinkList(data?.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const setListDrink = useSetRecoilState(listStoredrinkState);

  function randomImg() {
    let ran = setInterval(() => {
      setRandom(_.shuffle(storedrinkList)[0]);
    }, 50);
    setTimeout(() => {
      clearInterval(ran);
    }, 5000);
  }
  useEffect(() => {
    randomImg();
  }, []);

  const router = useRouter();
  console.log(storedrinkList);
  return (
      <div>
          
      <div className="text-gray-800 text-7xl my-4 ">
        <Image src={random.image ||`http://upload-image.gin-a-rai-dee.daddybody.company/` + random.img} alt="" width={200} height={200} />
      </div>
      
      <div className="grid grid-cols-4 gap-4 m-2">
        <h1 className="text-2xl col-span-1 font-bold py-3 ">คือ</h1>
        <h1 className="text-2xl px-5 font-bold py-3 text-left text-yellow-400 col-span-3">  {random.namestore}</h1>
      </div>
     
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
            setListDrink(random)
          router.push({
            pathname: "/"//ลิงค์ไปไหนสักที่
          });
        }}
      >
        {"ตกลง"}
      </button>

      </div>
  )
}
