import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { IoStorefront } from "react-icons/io5";

export function Store({ data }) {
  console.log(data);
  const router = useRouter();
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl bg-shadow font-bold py-16">ร้านอาหารทั้งหมด</h1>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((store) => (
          <div key={store} className="flex justify-center items-center py-14 ml-6 mr-6">
            <div
              className="card w-full h-32 mx-auto bg-gray-100 shadow-xl hover:shadow rounded-lg"
              key={store}
              type="button"
              onClick={() => {
                router.push({
                  pathname: "/menuall/" + store._id,
                });
              }}
            >
              <div className="w-32 mx-auto -mt-16">
                <Image
                  className="rounded-full"
                  src={
                    `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                    store.img
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div className="text-center text-2xl font-bold">
                {" "}
                ร้าน {store.namestore}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
