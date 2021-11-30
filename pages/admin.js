import Nav from "../components/nav";
// import { useState } from "react";
import firebase from "../firebase";
import React from "react";
import { useRecoilState } from "recoil";
import { nameMenuState } from "./context/nameMenu";
import { addindState } from "./context/menu";
import { stepState } from "./context/step";

const database = firebase.database();

export default function Admin() {
  const [addind, setAddind] = useRecoilState(addindState);
  const [nameMenu, setNamemenu] = useRecoilState(nameMenuState);
  const [step, setStep] = useRecoilState(stepState);
  const dataRef = database.ref("/mee-menu");

//   console.log(nameMenu);
//   console.log(step);

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
          <form class="w-full max-w-lg">
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-first-name"
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
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-first-name"
              >
                วัดถุดิบ
              </label>
              <textarea
                className="appearance-none block h-80 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                value={addind.name}
                onChange={(e) => setAddind({ ...addind, name: e.target.value })}
              />
            </div>
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-first-name"
              >
                ขั้นตอนการทำ
              </label>
              <textarea
                className="appearance-none block h-80 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                value={step.name}
                onChange={(e) => setStep({ ...step, name: e.target.value })}
              />
            </div>
            <div class="w-full">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2"
                for="grid-first-name"
              >
                ภาพอาหาร
              </label>
              <input
                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="file"
              />
            </div>
            <div className="text-center my-4">
              <button
                className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded"
                onClick={async (e) => {
                  const data = { nameMenu, addind, step };
                  console.log(data);
                  await dataRef.push(data);
                  router.push("/admin");
                }}
              >
                เพิ่มเมนูอาหาร
              </button>
            </div>
          </form>
          {/* <Editor
            id="detail"
            name="detail"
            placeholder="เนื้อหา"
            cellPlugins={cellPlugins}
            readOnly
          /> */}
        </div>
      </div>
    </div>
  );
}
