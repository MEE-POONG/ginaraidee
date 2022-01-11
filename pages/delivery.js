import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { Store } from "../components/store"
const initialState = {
    namestore: '',
}

const defaultStoreState = []
export default function Delivery() {
    const [formStore, setFormStore] = useState(initialState)
    const [storeList, setStoreList] = useState(defaultStoreState)
    const { name, } = formStore

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

    return (
        <div>
            <Navbar />
            <div className="">
                <Store data={storeList} />
            </div>
        </div>
    );
}