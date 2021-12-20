import Modalfood from "./modalfood";
import Modalstore from "./Modalstore";

export default function Yourmenu() {
  return (
    <div className="container mx-auto max-w-lg py-5">
      <div className="px-4 flex-auto">
        <div className="text-center">
          <h1 className="text-3xl bg-shadow font-bold py-4">วันนี้กินอะไรดี</h1>
          <div className=" text-center pl-24">
            <p className="text-xl italic">By MeePoong</p>
          </div>
        </div>
      </div>
      <div className="  text-center place-content-center">
        <div className="grid grid-cols-1">
          <div> <Modalfood /></div>
        </div>
        <div className="grid grid-cols-1">
          <div> <Modalstore /></div>
        </div>
      </div>
    </div>
  );
}
