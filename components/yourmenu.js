import Modaldrink from "./Modaldrink";
import Modalfood from "./modalfood";
import Modalstore from "./Modalstore";

export default function Yourmenu() {
  return (
    <div>
    <div className="container mx-auto max-w-lg py-5">
      <div className="px-4 flex-auto">
        <div className="text-center">
          <h1 className="text-4xl bg-shadow font-bold py-4 px-2 ">วันนี้กินอะไรดี</h1>
          <div className=" text-center pl-32">
            <p className="text-2xl italic text-yellow-400">By MeePoong</p>
          </div>
        </div>
      </div>
      
    </div>
    <div className="  text-center place-content-center">
    <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-12 ml-4 mr-4 mb-12">
    <div>
    <span><Modalfood /></span>
    <span className="text-2xl "> สุ่มอาหาร  </span>
    </div>
   
    <div>
    <span>    <Modaldrink /></span>
    <span className="text-2xl ">สุ่มเครื่องดื่ม  </span>

    </div>

  
      <div>
      <span>     <Modalstore /></span>
      <span className="text-2xl "> สุ่มร้านค้า  </span>
 
      </div>
   
    </div>
  </div>
  </div>
  );
}
