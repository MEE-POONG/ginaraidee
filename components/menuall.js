
export default function Menuall({ menuList}) {
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
                        <h1 className="text-center mt-5 text-lg text-gray-900 font-bold">{menu.name}  {menu.price} บาท</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}
