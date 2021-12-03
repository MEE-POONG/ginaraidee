import Pray from "./modalfood";

export default function Yourmenu() {
  return (
    <div className="container mx-auto max-w-lg py-5">
      <div className="px-4 flex-auto">
        <div className="text-center">
          <h1 className="text-3xl bg-shadow font-bold py-4">
          วันนี้กินอะไรดี
          </h1>
          <div className=" text-center pl-24">
            <p className="text-xl italic">By MeePoong</p>
          </div>
        </div>
        </div>
        <Pray/>
      </div>
   

  );
}
