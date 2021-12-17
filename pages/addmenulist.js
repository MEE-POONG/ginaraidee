import Nav from "../components/nav";
import Allmenu from "../components/allmenu";

export default function Addmenulist({}) {
    return (
        <div>
            <Nav />
            <div className="container mx-auto max-w-lg py-5">
                <div className="px-4 flex-auto">
                    <div className="text-center">
                        <h1 className="text-2xl bg-shadow font-bold py-5">ร้าน ...</h1>
                        <h1 className="text-2xl bg-shadow font-bold py-5">เพิ่มเมนูอาหาร</h1>
                    </div>
                    <form className="w-full max-w-lg py-5" >
                        <div className="py-1">
                            <div className=" p-1 bg-yellow-100 rounded-md">
                                <input
                                    // onChange={e => setFormStore({ ...formStore, namestore: e.target.value })}
                                    // value={namestore}
                                    type="text"
                                    placeholder="เมนู"
                                    className="border-2 border-yellow-400 rounded-md w-full h-11 outline-none px-5" />
                            </div>
                        </div>
                        <div className="py-1">
                            <div className="p-1 bg-yellow-100 rounded-md">
                                <input
                                    // onChange={e => setFormStore({ ...formStore, namestore: e.target.value })}
                                    // value={namestore}
                                    type="text"
                                    placeholder="ราคา"
                                    className="border-2 border-yellow-400 rounded-md w-full h-11 outline-none px-5" />
                            </div>
                        </div>
                        <div className="text-center py-3">
                            <button className="h-10 bg-yellow-400 px-2 py-1 w-20 rounded-md text-white font-semibold">เพิ่ม</button>
                        </div>
                    </form>
                </div>
            </div>
            <Allmenu/>
        </div>
    );
}

