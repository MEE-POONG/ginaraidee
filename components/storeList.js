import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { RiDeleteBin5Line } from "react-icons/ri";

export function Storelist({ data, deleteStoreById }) {
  console.log(data);
  const router = useRouter();
  return (
    <div>
      <div className="text-center py-5">
        <h1 className="text-2xl bg-shadow font-bold ">ร้านอาหารทั้งหมด</h1>
      </div>
      <div className="grid gap-4 ml-5 mr-5 py-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {data.map((store) => (
          <form key={store._id} className="cursor-pointer flex justify-center">
            <div className="bg-yellow-30 border-2 border-gray-400 rounded-lg w-full outline-none cursor-pointer px-3 hover:shadow-lg hover:border-yellow-400 transition delay-150 duration-300 ease-in-out">
              <div className="text-center py-2" type="button"
                onClick={() => {
                  router.push({
                    pathname: "/addmenulist/" + store._id,
                  });
                }}>
                <h1 className="text-2xl font-bold text-center py-2">
                  ร้าน {store.namestore}
                </h1>
                <div className="text-center ">
                  <Image
                    src={
                      `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                      store.img
                    }
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <div type="button">
                <a
                  onClick={() => deleteStoreById(store._id)}
                  href="#"
                  className="text-indigo-600 hover:text-indigo-900 "
                >
                  <RiDeleteBin5Line size={35} color="#dc2626" className=" ml-2 py-2 float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                </a>
              </div>
            </div>
          </form>

        ))}
      </div>
    </div>
  );
}
