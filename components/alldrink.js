import React from "react";
import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

export default function Alldrink({ drinkList, getDrinkDataById, deleteDrinkById }) {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl bg-shadow font-bold py-5">
                    เมนูทั้งหมด
                </h1>
            </div>
            {drinkList?.map((drink) => (
                <div className="flex items-center justify-center px-5 py-2" key={drink._id} >
                    <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full">
                        <div className="mt-2 p-3 float-right">
                            <div type="button">
                                <a
                                    onClick={() => deleteDrinkById(drink._id)}
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    <RiDeleteBin5Line size={20} color="#dc2626" className="ml-2 float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                                </a>
                            </div>
                            <div type="button">
                                <a
                                    onClick={() => getDrinkDataById(drink._id)}
                                    href="#"
                                    className="text-indigo-600 hover:text-indigo-900"
                                >
                                    <FiEdit size={20} color="#facc15" className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                                </a>
                            </div>
                        </div>
                        <div className="col-span-9 text-center mt-5">
                            <Image
                                src={
                                    `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                                    drink.img
                                }
                                alt=""
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="grid grid-cols-2 py-5">
                            <h1 className="mt-4 px-5 text-left text-lg col-span-1 text-gray-900 font-bold">{drink.name}</h1>
                            <h1 className="mt-4 px-5 text-left text-lg col-span-1 text-gray-900 font-bold">{drink.price} บาท</h1>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
