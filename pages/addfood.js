import Nav from "../components/nav";
import firebase from "../firebase";
import React from "react";
import { useRecoilState } from "recoil";
import { nameMenuState } from "./context/nameMenu";
import { addindState } from "./context/menu";
import { stepState } from "./context/step";
import router from "next/router";

const database = firebase.database();

export default function Addfood() {
  const [nameMenu, setNamemenu] = useRecoilState(nameMenuState);
  const [addind, setaddind] = useRecoilState(addindState);
  const [step, setstep] = useRecoilState(stepState);
  const dateRef = database.ref("/jametestbase123");

  console.log(nameMenu);
  console.log(addind);
  console.log(step);

  return (
    <div>
      <Nav />
      <div className="container mx-auto max-w-lg">
        <div className="px-4 flex-auto">
          <div className="text-center">
            <h1 className="text-2xl bg-shadow font-bold py-5">
              เพิ่มเมนูอาหาร
            </h1>
          </div>
          <form className="w-full max-w-lg">
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb-2"
                htmlFor="grid-first-name"
              >
                ชื่อเมนู
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                value={nameMenu.name}
                onChange={(e) => 
                  setNamemenu({ ...nameMenu, name: e.target.value })
                }
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb-2"
                htmlFor="grid-first-name"
              >
                วัดถุดิบ
              </label>
              <textarea
                className="appearance-none block h-80 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                value={addind.name}
                onChange={(e) => setaddind({ ...addind, name: e.target.value })}
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb-2"
                htmlFor="grid-first-name"
              >
                ขั้นตอนการทำ
              </label>
              <textarea
                className="appearance-none block h-80 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                value={step.name}
                onChange={(e) => setstep({ ...step, name: e.target.value })}
              />
            </div>
            <div className="w-full">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xl mb-2"
                htmlFor="grid-first-name"
              >
                ภาพอาหาร
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="file"
              />
            </div>
            <div className="text-center py-4">
              <button
                className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded"
                onClick={async (e) => {
                  const data = { nameMenu, addind, step };
                  console.log(data);
                  await dateRef.push(data);
                  router.push("/");
                }}
              >
                เพิ่มเมนูอาหาร
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
