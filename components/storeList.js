import Image from "next/image";
import React from 'react'
import { useRouter } from "next/router";

export function Storelist({ data }) {
    console.log(data);
    const router = useRouter();
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="text-2xl bg-shadow font-bold ">
                    ร้านอาหารทั้งหมด
                </h1>
            </div>
            {data.map((store) => (
                <form key={store._id} className="cursor-pointer flex justify-center"
                    type="button"
                    onClick={() => {
                        router.push("/addmenulist");
                    }}
                >
                    <div className="py-3 bg-yellow-30 border-2 border-gray-400  p-8 rounded-lg w-full outline-none cursor-pointer mb-3 px-3 hover:shadow-lg hover:border-yellow-400 transition delay-150 duration-300 ease-in-out">
                        <div className="text-center">
                            <Image
                                src="/images/delivery.png"
                                alt=""
                                width={90}
                                height={80}
                                
                            />
                        </div>
                        <h1 className="text-2xl font-bold text-center ">ร้าน {store.namestore}</h1>
                    </div>
                </form>
            ))}
        </div>
    );
}
