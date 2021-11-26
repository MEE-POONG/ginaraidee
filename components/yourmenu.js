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
        <Pray/>
      </div>
    </div>

  );
}
