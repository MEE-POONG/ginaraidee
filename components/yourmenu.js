import Pray from "./modalfood";

export default function Yourmenu() {
  return (
    <div className="container">
      <div className=" flex-auto mx-auto max-w-lg">
        <div className=" text-center my-5">
          <h1 className="text-2xl">วันนี้กินอะไรดี</h1>

          <div className=" text-center pl-24">
            <p className="text-xs italic">By MeePoong</p>
          </div>
        </div>
        {/* <div className=" text-center my-12">
          <button className=" bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded">
            สุ่มเมนูอาหาร
            
          </button>
        </div> */}
        <Pray/>

        {/* <div className="border-2 border-gray-300 rounded-lg px-3 py-2 bg-white  hover:shadow-lg hover:border-blue-700">
          <a href="#" className="">
            <h2>เมนูอาหารสำหรับคุณ คือ</h2>
          </a>
        </div> */}
      </div>
    </div>
  );
}
