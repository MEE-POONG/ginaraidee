import { useRouter } from "next/router";
import Image from "next/image";

export default function Storedrinklist({ data }) {
    console.log(data);
    const router = useRouter();
    return (
        <div>
            <div className="text-center py-5">
                <h1 className="text-2xl bg-shadow font-bold ">ร้านอาหารทั้งหมด</h1>
            </div>
            {data.map((store) => (
                <form
                    key={store._id}
                    className="cursor-pointer flex justify-center px-5"
                    type="button"
                    onClick={() => {
                        router.push({
                            pathname: "/adddrinklist/" + store._id,
                        });
                    }}
                >
                    <div className="py-3 bg-yellow-30 border-2 border-gray-400  p-8 rounded-lg w-full outline-none cursor-pointer mb-3 px-3 hover:shadow-lg hover:border-yellow-400 transition delay-150 duration-300 ease-in-out">
                        <div className="text-center"></div>
                        <h1 className="text-2xl font-bold text-center ">
                            ร้าน {store.namestore}
                        </h1>
                        <div className="text-center py-6">
                            <Image
                                src={
                                    `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                                    store.img
                                }
                                alt=""
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </form>
            ))}
        </div>
    )
}
