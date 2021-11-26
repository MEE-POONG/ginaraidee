import React from 'react';
import Image from 'next/image';

export function Store() {
    return (
        <div className="container mx-auto max-w-lg py-5">
            <div className=" px-4 py-5 flex-auto">
                <div className="text-center">
                    <h1 className="text-2xl bg-shadow font-bold">สั่งอาหารจากร้านค้า</h1>
                </div>
                <div className="py-5 block grid">
                    <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white  hover:shadow-lg hover:border-yellow-400">
                        <div className="grid grid-cols-2 gap-1 flex ">
                            <div className="col-span-12 rounded-lg place-content-center">
                                <div className="grid grid-cols-6 gap-1 flex py-4 ">
                                    <div className="text-xl col-span-2 text-center">
                                        <Image
                                            src="/images/delivery.png"
                                            alt=""
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="text-xl col-span-4">
                                        <p className="font-bold">ร้านแม่ประนอม</p>
                                        <p className="text-sm">ราคา 45 บาท</p>
                                        <p className="text-xs">1.5 km.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white  hover:shadow-lg hover:border-yellow-400">
                        <div className="grid grid-cols-2 gap-1 flex ">
                            <div className="col-span-12 rounded-lg place-content-center">
                                <div className="grid grid-cols-6 gap-1 flex py-4 ">
                                    <div className="text-xl col-span-2 text-center">
                                        <Image
                                            src="/images/delivery.png"
                                            alt=""
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="text-xl col-span-4">
                                        <p className="font-bold">ร้านแม่ประณี</p>
                                        <p className="text-sm">ราคา 45 บาท</p>
                                        <p className="text-xs">1.5 km.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white  hover:shadow-lg hover:border-yellow-400">
                        <div className="grid grid-cols-2 gap-1 flex ">
                            <div className="col-span-12 rounded-lg place-content-center">
                                <div className="grid grid-cols-6 gap-1 flex py-4 ">
                                    <div className="text-xl col-span-2 text-center">
                                        <Image
                                            src="/images/delivery.png"
                                            alt=""
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="text-xl col-span-4">
                                        <p className="font-bold">ร้านแม่ประนอม</p>
                                        <p className="text-sm">ราคา 45 บาท</p>
                                        <p className="text-xs">1.5 km.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white  hover:shadow-lg hover:border-yellow-400">
                        <div className="grid grid-cols-2 gap-1 flex ">
                            <div className="col-span-12 rounded-lg place-content-center">
                                <div className="grid grid-cols-6 gap-1 flex py-4 ">
                                    <div className="text-xl col-span-2 text-center">
                                        <Image
                                            src="/images/delivery.png"
                                            alt=""
                                            width={70}
                                            height={70}
                                        />
                                    </div>
                                    <div className="text-xl col-span-4">
                                        <p className="font-bold">ร้านแม่ประณี</p>
                                        <p className="text-sm">ราคา 45 บาท</p>
                                        <p className="text-xs">1.5 km.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}



