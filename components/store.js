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
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {data.map((store) => (
          <div class="flex justify-center items-center py-14 ml-10 mr-10">
            <div class="card w-full h-48 mx-auto bg-gray-100 shadow-xl hover:shadow rounded-lg"
              key={store}
              type="button"
              onClick={() => {
                router.push({
                  pathname: "/menuall/" + store._id
                });
              }}
            >

              <div class="w-32 mx-auto rounded-full -mt-16">
                <Image
                  src={
                    `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                    store.img
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <div class="text-center text-2xl font-bold py-7"> ร้าน {store.namestore}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}
