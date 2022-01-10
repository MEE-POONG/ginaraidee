import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";
import { RiDeleteBin5Line } from "react-icons/ri";


export default function Storedrinklist({ data, deleteStoredrinkById }) {
    console.log(data);
    const router = useRouter();
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="text-2xl bg-shadow font-bold ">ร้านอาหารทั้งหมด</h1>
            </div>
            <div className="grid gap-4 ml-5 mr-5 py-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {data.map((storedrink) => (
                    <form key={storedrink._id} className="cursor-pointer flex justify-center">
                        <div className="bg-yellow-30 border-2 border-gray-400 rounded-lg w-full outline-none cursor-pointer px-3 hover:shadow-lg hover:border-yellow-400 transition delay-150 duration-300 ease-in-out">
                            <div className="text-center" type="button"
                                onClick={() => {
                                    router.push({
                                        pathname: "/adddrinklist/" + storedrink._id,
                                    });
                                }}>
                                <h1 className="text-2xl font-bold text-center py-3">
                                    ร้าน {storedrink.namestoredrink}
                                </h1>
                                    <Image
                                        className="rounded-2xl"
                                        src={
                                            `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                                            storedrink.img
                                        }
                                        alt=""
                                        width={120}
                                        height={120}
                                    />
                            </div>
                            <div type="button">
                                <a
                                    onClick={() => deleteStoredrinkById(storedrink._id)}
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-900 "
                                >
                                    <RiDeleteBin5Line size={35} color="#dc2626" className="py-2 float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                                </a>
                            </div>
                        </div>
                    </form>
                ))}
            </div>
        </div>
    )
}
