// import React from "react";
import { useRouter } from 'next/router'
import Navbar from '../components/Navbar';


export default function testrandom() {
  const _ = require("lodash");
  const array = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  const shuffled_array = _.shuffle(array);
  // console.log(shuffled_array);
  const num = Math.floor(Math.random() * 6);

  const router = useRouter()


  return (
    <>
    <Navbar />
    <div className="text-center">
    <div className="text-gray-800 text-7xl mx-5 my-24">{shuffled_array[num]}</div>
      <button type="button" onClick={() => router.reload() } className="border border-gray-600 py-3 px-3 shadow-lg rounded-xl hover:bg-gray-500">Click here to reload</button>

    </div>
    </>
  );
}
