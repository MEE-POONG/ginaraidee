import Nav from "../components/Nav";
// import Footer from "../components/footer"

export default function Addstore() {
  return (
    <div>
    <Nav />
    <div className="container mx-auto max-w-lg">
          <div className="px-4 flex-auto">
              <div className="text-center">
                  <h1 className="text-2xl bg-shadow font-bold py-5">
                      เพิ่มร้านอาหาร   
                  </h1>
              </div>
              <form className="w-full max-w-lg">
                  <div className="w-full">
                      <label className="block uppercase tracking-wide text-gray-700 text-xl mb-2" htmlFor="grid-first-name">
                          ชื่อร้าน
                      </label>
                      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                  </div>
                  <div className="w-full">
                      <label className="block uppercase tracking-wide text-gray-700 text-xl mb-2" htmlFor="grid-first-name">
                          หมายเลขโทรศัพท์
                      </label>
                      <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                  </div>
                  <div className="w-full">
                      <label className="block uppercase tracking-wide text-gray-700 text-xl mb-2" htmlFor="grid-first-name">
                          ที่อยู่
                      </label>
                      <textarea className="appearance-none block h-24 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" />
                  </div>
                  <div className="text-center py-4">
                      <button
                      className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded">
                      เพิ่มร้านอาหาร
                      </button>
                  </div>
              </form>
          </div>
      </div>
   </div>
);
}