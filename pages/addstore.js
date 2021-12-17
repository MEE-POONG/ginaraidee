import Nav from "../components/nav";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Storelist } from "../components/storeList";

const initialState = {
    namestore: '',
}

const defaultStoreState = []
export default function Addstore() {
    const [formStore, setFormStore] = useState(initialState)
    const [storeList, setStoreList] = useState(defaultStoreState)
    const { namestore, } = formStore

    useEffect(() => {
        getStoreData()
    }, [])

    const getStoreData = async () => {
        try {
            const { data } = await axios.get('/api/stores')
            setStoreList(data?.data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const handelSubmit = async (e) => {
        e.preventDefault()
        const validationError = validationStore()
        if (validationError) return
        const setDataError = await setDataStore()
        if (setDataError) return
        console.log();
        setFormStore(initialState)
        await Swal.fire({
            icon: 'success',
            title: 'เพิ่มข้อมูลสำเร็จ',
            showConfirmButton: false,
            timer: 2000
        })
        await getStoreData()
    }

    const setDataStore = async () => {
        try {
            await axios.post('/api/stores', formStore)
        } catch (error) {
            return Swal.fire({
                icon: 'error',
                title: 'เพิ่มข้อมูลไม่สำเร็จ'
            })
        }
    }

    const validationStore = () => {
        if (!namestore) {
            return Swal.fire({
                icon: 'error',
                title: 'กรอกข้อมูลไม่ครบ'
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
                            เพิ่มร้านอาหาร
                        </h1>
                    </div>
                    <form className="w-full max-w-lg" onSubmit={handelSubmit}>
                        <div className="flex space-x-2 p-1 bg-yellow-100 rounded-md">
                            <input
                                onChange={e => setFormStore({ ...formStore, namestore: e.target.value })}
                                value={namestore}
                                type="text"
                                placeholder="ชื่อร้าน"
                                className="border-2 border-yellow-400 rounded-md w-full h-11 outline-none px-5" />
                            <button className="bg-yellow-400 px-2 py-1 w-20 rounded-md text-white font-semibold">เพิ่ม</button>
                        </div>
                    </form>
                    <div className="py-5">
                        <Storelist data={storeList} />
                    </div>
                </div>
            </div>
        </div>
    );
}