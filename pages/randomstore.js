import Modalstore from "../components/Modalstore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import _ from "lodash";
import axios from "axios";
import { listStoreState } from "../contaxt/liststore";

const defaultStoreState = [
  { id: "1", nameStore: "สุ่มอีกรอบ", imageStore: "/images/randomnow.png" },
];

export default function Randomstore() {
  const [storeList, setStoreList] = useState(defaultStoreState);
  const [random, setRandom] = useState(storeList[0]);

  useEffect(() => {
    getStoreData();
  }, []);

  const getStoreData = async () => {
    try {
      const { data } = await axios.get("/api/menu/");
      setStoreList(data?.data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };///เหลือทำ api อย่าลืมมม

  const setListStore = useSetRecoilState(listStoreState);
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
  });

  const router = useRouter();

  return (
    <div className="text-center my-5 ">
      <div className="text-gray-800 text-7xl my-4 ">
        <Image
          src={random.imageStore || "/images/randomnow.png"}
          alt=""
          width={200}
          height={200}
        />
      </div>

      <div className="m-2">
        <div>คือ :{random.nameStore}</div>
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
          setListStore(random);
          router.push({
            pathname: "/choose",
          });
        }}
      >
        {"ตกลง"}
      </button>
    </div>
  );
}
