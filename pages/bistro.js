import React from 'react'
import Navbar from "../components/Navbar";
import Listbistro from '../components/listbistro';
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { listStoreState } from "../contaxt/liststore"


const initialState = {
    namestore: '',
  
}

const defaultStoreState = []
export default function Bistro() {
    const [storeList, setStoreList] = useState(defaultStoreState)
    const listStore = useRecoilValue(listStoreState);
console.log(listStore);
    useEffect(() => {
        getStoreData()
    }, [])

    const getStoreData = async () => {
        try {
            const { data } = await axios.get('/api/stores/')
            setStoreList(data?.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <Navbar />
            <Listbistro data={storeList} listStore={listStore}/>
            <Footer />
        </div>
    )
}
