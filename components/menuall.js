import Image from "next/image";

export default function Menuall({ menuList }) {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-2xl bg-shadow font-bold py-5">เมนูทั้งหมด</h1>
      </div>
      <div className="py-10 grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {menuList?.map((menu) => (
          <div
            className="flex items-center justify-center px-3 py-1"
            key={menu._id}
          >
            <div className="max-w-md bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500 w-full">
              <div className="text-center py-6">
                <Image
                  src={
                    `http://upload-image.gin-a-rai-dee.daddybody.company/` +
                    menu.img
                  }
                  alt=""
                  width={200}
                  height={200}
                />
              </div>
              <h1 className="text-center text-lg text-gray-900 font-bold py-5">
                {menu.name} {menu.price} บาท
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
