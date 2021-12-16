import Nav from "../components/nav";


export default function Addmenulist({ data }) {
    console.log(data);
    return (
        <div>
            <Nav />
                <div key={store._id} className="container mx-auto max-w-lg">
                    <div className="px-4 flex-auto">
                        <div className="text-center">
                            <h1 className="text-2xl bg-shadow font-bold py-5">ร้าน</h1>
                            <h1 className="text-2xl bg-shadow font-bold py-5">เพิ่มเมนูอาหาร</h1>
                        </div>
                        <form className="w-full max-w-lg" >
                            <div className="w-full">
                                <label className="block uppercase tracking-wide text-gray-700 text-xl mb-2" htmlFor="grid-first-name">
                                    ชื่อร้าน
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="namestore"
                                    type="text"
                                />
                            </div>
                            <div className="text-center py-4">
                                <button
                                    className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded"

                                >
                                    เพิ่มร้านอาหาร
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    );
}