import React from 'react';
import Image from 'next/image';

export function Channel() {
    return (
        <div className="container mx-auto max-w-lg py-20">
            <div className=" px-4 py-5 flex-auto">
                <div className="text-center">
                    <h1 className="text-2xl bg-shadow font-bold">เลือกช่องทางที่ต้องการ</h1>
                </div>
                <div className="py-5 block grid">
                    <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 py-10 bg-white  hover:shadow-lg hover:border-yellow-400">
                        <div className="grid grid-cols-2 gap-1 flex ">
                            <div className="col-span-4 rounded-lg place-content-center">
                                <div className="py-4 text-center">
                                    <Image
                                        src="/images/delivery.png"
                                        alt=""
                                        width={120}
                                        height={100}
                                    />
                                </div>
                                <div className="py-4 text-center">
                                    <div className="text-xl">สั่งอาหารจากร้านค้า</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 py-10 bg-white  hover:shadow-lg hover:border-yellow-400">
                        <div className="grid grid-cols-2 gap-1 flex ">
                            <div className="col-span-4 rounded-lg place-content-center">
                                <div className="py-4 text-center">
                                    <Image
                                        src="/images/kooking.png"
                                        alt=""
                                        width={120}
                                        height={100}
                                    />
                                </div>
                                <div className="py-4 text-center">
                                    <div className="text-xl">ทำกินเอง</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



