
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { listStoredrinkState } from "../contaxt/liststroedrink";//
import Image from "next/image";
import _ from "lodash";
import axios from "axios";

const defaultSoredrinkState = [
  { id: "1", namestore: "สุ่มอีกรอบ", image: "/images/randomnow.png" },
];

export default function Testrandomdrink() {
  const [storedrinkList, setStoredrinkList] = useState(defaultSoredrinkState);
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
        <Image className="rounded-2xl" src={random.image ||`http://upload-image.gin-a-rai-dee.daddybody.company/` + random.img} alt="" width={200} height={200} />
      </div>
        <h1 className="text-2xl col-span-1 font-bold ">คือร้าน</h1>
        <h1 className="text-2xl px-5 font-bold py-1 text-center text-yellow-400 col-span-3">  {random.namestore}</h1>
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
            setListDrink(random)
          router.push({
            pathname: "/drinkstore"//ลิงค์ไปไหนสักที่
          });
        }}
      >
        {"ตกลง"}
      </button>

      </div>
  )
}
