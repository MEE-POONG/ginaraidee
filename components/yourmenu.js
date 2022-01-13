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
          </div>
        </div>

      </div>
      <div className="  text-center place-content-center">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-12 ml-4 mr-4 mb-12">
          <div>
            <span><Modalfood /></span>
          </div>
          <div>
            <span><Modaldrink /></span>
          </div>
          <div>
            <span><Modalstore /></span>
            
          </div>

        </div>
      </div>
    </div>
  );
}
