import React from "react";
import Footer from "../components/footer";
// import Image from "next/image";

export default function Made({ data }) {
    console.log(data);
    return (
        <div>
            <div className="container mx-auto max-w-lg py-5">
                <div className=" px-4 py-5 flex-auto">
                    <div className="text-center">
                        <h1 className="text-2xl bg-shadow font-bold">ทำกินเอง</h1>
                    </div>
                    {data.map((user) => (
                        <div className="py-5">
                            <div className="border-2 border-gray-300 rounded-lg px-3 bg-white py-5">
                                <p className="font-bold text-center text-2xl">{user.namemenu}</p>
                                <p className=" text-center text-lg py-5">วัตถุดิบและวิธีการทำ</p>
                                <div className="grid grid-cols-2 gap-1 ">
                                    <div className="col-span-12 rounded-lg place-content-center">
                                        <div className="text-lg col-span-4">
                                            <p className="font-bold py-5">วัตถุดิบ</p>
                                            <div className="pl-2">
                                                <p className="">{user.staple}</p>
                                            </div>
                                            <div>
                                                <p className="font-bold py-5">ขั้นตอนการทำ</p>
                                                <div className=" pl-2">
                                                    <p className="">{user.step}</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}