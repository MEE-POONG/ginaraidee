import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { listStoreState } from "../contaxt/liststore";
import { useSetRecoilState } from "recoil";
import _ from "lodash";
import axios from "axios";


const defaultStoreState = [
  { id: "1", namestore: "สุ่มอีกรอบ" },
];

export default function Randomstore() {
  const [storeList, setStoreList] = useState(defaultStoreState);
  const [random, setRandom] = useState(storeList[0]);

  useEffect(() => {
    getStoreData();
  }, []);

  const getStoreData = async () => {
    try {
      const { data } = await axios.get('/api/stores')
      setStoreList(data?.data)
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }


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
      <div className="m-2">
        <div className="text-xl font-bold">คือ ร้าน {random.namestore}</div>
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
