import Nav from "../components/nav";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import Foodlist from "../components/foodlist";

const initialState = {
    namemenu: '',
    staple: '',
    step: '',
}

const defaultMenuState = []
export default function Addfood() {
    const [formMenu, setFormMenu] = useState(initialState)
    const [menuList, setMenuList] = useState(defaultMenuState)
    const { namemenu, staple, step, } = formMenu

    useEffect(() => {
        getMenuData()
    }, [])

    const getMenuData = async () => {
        try {

            const { data } = await axios.get('/api/menus')
            setMenuList(data?.data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }


    const handelSubmit = async (e) => {
        e.preventDefault()

        await validationMenu()
        await setDataMenu()
        setFormMenu(initialState)
        getMenuData()
        Swal.fire({
            icon: 'success',
            title: 'เพิ่มข้อมูลสำเร็จ',
            showConfirmButton: false,
            timer: 1500
        })

    }

    const setDataMenu = async () => {
        try {
            await axios.post('/api/menus', formMenu)
        } catch (error) {
            return Swal.fire({
                icon: 'error',
                title: 'เพิ่มข้อมูลไม่สำเร็จ'
            })
        }
    }

    const validationMenu = () => {
        if ( !namemenu || !staple || !step ) {
            return Swal.fire({
                icon: 'error',
                title: 'กรอกข้อมูลไม่ครบไอ้เหี้ยเจมส์'
            })
        }
    }


    return (
        <div>
            <Nav />
            <div className="container mx-auto max-w-lg">
                <div className="px-4 flex-auto">
                    <div className="text-center">
                        <h1 className="text-2xl bg-shadow font-bold py-5">
                            เพิ่มเมนูอาหาร
                        </h1>
                    </div>
                    <form className="w-full max-w-lg" onSubmit={handelSubmit}>
                        <div className="w-full">
                            <label className="block uppercase tracking-wide text-gray-700 text-xl mb-2" htmlFor="grid-first-name">
                                ชื่อเมนู
                            </label>
                            <input
                                onChange={e => setFormMenu({ ...formMenu, namemenu: e.target.value })}
                                className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="namemenu"
                                type="text"
                                value={namemenu}
                            />
                        </div>
                        <div className="w-full">
                            <label className="block uppercase tracking-wide text-gray-700 text-xl mb-2" htmlFor="grid-first-name">
                                วัดถุดิบ
                            </label>
                            <textarea
                                onChange={e => setFormMenu({ ...formMenu, staple: e.target.value })}
                                value={staple}
                                className="appearance-none block h-80 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="staple"
                                type="text"

                            />
                        </div>
                        <div className="w-full">
                            <label className="block uppercase tracking-wide text-gray-700 text-xl mb-2" htmlFor="grid-first-name">
                                ขั้นตอนการทำ
                            </label>
                            <textarea
                                onChange={e => setFormMenu({ ...formMenu, step: e.target.value })}
                                value={step}
                                className="appearance-none block h-80 w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="step"
                                type="text"

                            />
                        </div>
                        {/* <div className="w-full">
                            <label className="block uppercase tracking-wide text-gray-700 text-xl mb-2" htmlFor="grid-first-name">
                                ภาพอาหาร
                            </label>
                            <input className="appearance-none block w-full bg-gray-50 text-gray-700 border border-yellow-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="file" />
                        </div> */}
                        <div className="text-center py-4">
                            <button
                                className="bg-yellow-300 hover:shadow-lg text-white font-bold py-2 px-4 rounded"

                            >

                                เพิ่มเมนูอาหาร
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Foodlist data={menuList}/>
          
        </div>
    );
}
