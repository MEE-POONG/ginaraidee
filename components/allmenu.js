import React from 'react'
import Image from "next/image";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";

export default function Allmenu({ menuList, deleteFoodsById }) {
    const [showModalfood, setShowModal] = React.useState(false);
    return (
        <div>
            <div className="text-center">
                <h1 className="text-2xl bg-shadow font-bold py-5">
                    เมนูทั้งหมด
                </h1>
            </div>
            {menuList?.map((menu) => (
                <div className="flex items-center justify-center px-3 py-1" key={menu._id} >
                    <div
                        className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full h-16">
                        <div className="p-3 text-center">
                            <div
                                className=""
                                type="button"
                                onClick={() => deleteFoodsById(menu._id)}
                            >
                                <RiDeleteBin5Line size={20} color="#facc15" className="ml-2 float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                            </div>
                            <div type="button"
                                onClick={() => setShowModal(true)} >
                                <FiEdit size={20} color="#dc2626" className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                            </div>
                            {/* <Image
                                src="/images/delivery.png"
                                alt=""
                                width={100}
                                height={90}
                            /> */}
                        </div>
                        <h1 className="text-center text-lg text-gray-900 font-bold">{menu.name}  {menu.price} บาท</h1>
                    </div>
                </div>
            ))}
            {showModalfood ? (
                <div className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50  shadow-lg backdrop-filter backdrop-blur-md ">
                    <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                        <div className="">
                            <div
                                className=""
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                <MdOutlineCancel size={24} className="float-right cursor-pointer hover:shadow-2xl hover:scale-105 transform transition-all duration-500" />
                            </div>
                            <h1 className="text-2xl text-center bg-shadow font-bold py-2">
                                แก้ไขเมนูอาหาร
                            </h1>
                            <form className="w-full max-w-lg py-5">
                                <div className="py-1">
                                    <div className=" p-1 bg-yellow-100 rounded-md">
                                        <input
                                            // onChange={(e) =>
                                            //     setFormMenu({ ...formMenu, name: e.target.value })
                                            // }
                                            // value={formMenu.name}
                                            type="text"
                                            placeholder="เมนู"
                                            className="border-2 border-yellow-400 rounded-md w-full h-11 outline-none px-5"
                                        />
                                    </div>
                                </div>
                                <div className="py-1">
                                    <div className="p-1 bg-yellow-100 rounded-md">
                                        <input
                                            // onChange={(e) =>
                                            //     setFormMenu({ ...formMenu, price: e.target.value })
                                            // }
                                            // value={formMenu.price}
                                            type="text"
                                            placeholder="ราคา"
                                            className="border-2 border-yellow-400 rounded-md w-full h-11 outline-none px-5"
                                        />
                                    </div>
                                </div>
                                <div className="text-center py-3">
                                    <button
                                        className="h-10 bg-yellow-400 px-2 py-1 w-20 rounded-md text-white font-semibold"
                                        type="submit"
                                    >
                                        เพิ่ม
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            ) : null}{" "}
        </div>
    )
}
