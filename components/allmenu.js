import React from 'react'
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

export default function Allmenu({ menuList, getFoodsDataById, deleteFoodsById }) {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl bg-shadow font-bold py-5">
                    เมนูทั้งหมด
                </h1>
            </div>
            {menuList?.map((menu) => (
                <div className="flex items-center justify-center px-3 py-1" key={menu._id} >
                    <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full h-16">
                        <div class="grid grid-cols-12">
                            <h1 className="mt-4 px-5 text-yellow-400 text-left text-lg col-span-5 text-gray-900 font-bold">{menu.name}</h1>
                            <h1 className="mt-4 px-5 text-yellow-400 text-right text-lg col-span-4 text-gray-900 font-bold">{menu.price} บาท</h1>
                            <div className="col-span-3 mt-2 p-3 text-center">
                                <div type="button">
                                    <a
                                        onClick={() => deleteFoodsById(menu._id)}
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        <RiDeleteBin5Line size={20} color="#dc2626" className="ml-2 float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                                    </a>
                                </div>
                                <div type="button">
                                    <a
                                        onClick={() => getFoodsDataById(menu._id)}
                                        href="#"
                                        className="text-indigo-600 hover:text-indigo-900"
                                    >
                                        <FiEdit size={20} color="#facc15" className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
