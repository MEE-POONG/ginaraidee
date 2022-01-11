import Image from "next/image";

export default function Menuall({ menuList }) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl bg-shadow font-bold py-5">เมนูทั้งหมด</h1>
      </div>
      <div className="ml-3 mr-3 grid gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {menuList?.map((menu) => (
          <div
            className="flex items-center justify-center px-3 py-1"
            key={menu._id}
          >
            <div className="max-w-md py-5 bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full">
              <div className="text-center">
                <Image
                  src={
                    `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                    menu.img
                  }
                  alt=""
                  width={150}
                  height={150}
                />
              </div>
              <h1 className="text-center text-lg text-gray-900 font-bold">
                { menu.name}
              </h1>
              <h1 className="text-center text-lg text-gray-900 font-bold ">
                ราคา { menu.price} บาท
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
