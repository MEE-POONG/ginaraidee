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
    const [isEdit, setIsEdit] = useState(false)
    const { namemenu, staple, step, } = formMenu

    useEffect(() => {
        getMenuData()
    }, [])

    const getMenuData = async () => {
        try {

            const { data } = await axios.get('/api/menu/')
            setMenuList(data?.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        const validationError = validationMenu()
        if (validationError) return

        const setDataError = await setDataMenu()
        if (setDataError) return

        setFormMenu(initialState)

        await Swal.fire({
            icon: 'success',
            title: 'เพิ่มข้อมูลสำเร็จ',
            showConfirmButton: false,
            timer: 2000
        })

        await getMenuData()
    }
    

    const validationMenu = () => {
        if ( !namemenu || !staple || !step ) {
            return Swal.fire({
                icon: 'error',
                title: 'กรอกข้อมูลไม่ครบไอ้เหี้ยเจมส์'
            })
        }
    }

    const getFoodsDataById = async (id) => {
        try {
            const { data } = await axios.get('/api/menu/' + id)
            setIsEdit(true)
            setFormMenu({
                _id: data.data._id,
                namemenu: data.data.namemenu,
                staple: data.data.staple,
                step: data.data.step,
               
            })
        } catch (error) {
            console.log(error);
        }
    }

    const setDataMenu = async () => {
        try {
            if (isEdit) {
                await axios.put('/api/menu/' + formMenu._id, formMenu)
            } else {
                await axios.post('/api/menu/', formMenu)
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'พังยับ',
                text: 'พังอะครับพรี่ ติดต่อแอดมินด่วนๆ!'
            })
            return true
        }
    }
    
    const deleteFoodsById = async (id) => {
        try {
            await Swal.fire({
                icon: 'info',
                title: 'คุณต้องการลบข้อมูลนี้หรือไม่',
                confirmButtonText: 'ต้องการ',
                cancelButtonText: 'ไม่ต้องการ',
                showCancelButton: true,
            }).then(async e => {
                if (e.isConfirmed) {
                    await axios.delete('/api/menu/' + id)
                    await Swal.fire({
                        icon: 'success',
                        title: 'ลบข้อมูลเรียบร้อยแล้ว',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    getMenuData()
                }
            })
        } catch (error) {
            await Swal.fire({
                icon: 'error',
                title: 'ลบข้อมูลไม่สำเร็จ',
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
            <Foodlist data={menuList} getFoodsDataById={getFoodsDataById} deleteFoodsById={deleteFoodsById}/>
          
        </div>
    );
}
