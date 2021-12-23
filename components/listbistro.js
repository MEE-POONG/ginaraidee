import React from 'react'
import Image from "next/image";

export default function Listbistro({ listStore }) {
    return (
        <div>
             <div className="text-center py-5">
                <h1 className="text-2xl bg-shadow font-bold py-5">
                    ร้าน {listStore.namestore}
                </h1>
                <h1 className="text-2xl bg-shadow font-bold py-5">
                    เมนูทั้งหมด
                </h1>
            </div>
            <div className="flex items-center justify-center px-3 py-3">
                <div
                    className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full h-48">
                    <div className="p-3 text-center">
                        <Image
                            src="/images/delivery.png"
                            alt=""
                            width={100}
                            height={90}
                        />
                    </div>
                    <h1 className="text-center text-lg text-gray-900 font-bold">{listStore.namemenu}</h1>
                    <h1 className="text-center text-lg text-gray-900 font-bold">{listStore.price}</h1>
                </div>
            </div>
        </div>
    )
}
