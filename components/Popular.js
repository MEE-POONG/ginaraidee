import Image from "next/image";

export default function Popular() {
    return (
        <div className="py-20">
            <h1 className="text-3xl bg-shadow font-bold py-10 text-center">
                เมนูยอดนิยม
            </h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-8 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                    <Image
                    src="/images/delivery.png"
                    width={100}
                    height={90}
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-900 dark:text-gray-300 font-semibold">กระเพราหมูกรอบ</p>
                    </div>
                </div>
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-8 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                    <Image
                    src="/images/delivery.png"
                    width={100}
                    height={90}
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-900 dark:text-gray-300 font-semibold">กระเพราหมูกรอบ</p>
                    </div>
                </div>
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-8 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                    <Image
                    src="/images/delivery.png"
                    width={100}
                    height={90}
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-900 dark:text-gray-300 font-semibold">กระเพราหมูกรอบ</p>
                    </div>
                </div>
                <div className="bg-gray-100 border-indigo-600 dark:bg-gray-800 bg-opacity-95 border-opacity-60 | p-8 border-solid rounded-3xl border-2 | flex justify-around cursor-pointer | hover:bg-indigo-400 dark:hover:bg-indigo-600 hover:border-transparent | transition-colors duration-500">
                    <Image
                    src="/images/delivery.png"
                    width={100}
                    height={90}
                    />
                    <div className="flex flex-col justify-center">
                        <p className="text-gray-900 dark:text-gray-300 font-semibold">กระเพราหมูกรอบ</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
