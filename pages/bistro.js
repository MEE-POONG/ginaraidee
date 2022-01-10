import React from 'react'
import Navbar from "../components/Navbar";
import Listbistro from '../components/listbistro';
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { listStoreState } from "../contaxt/liststore"
// import {listMenuState} from "../contaxt/listmenu"
// import { Menu } from '@headlessui/react';



const menuByStoreState = {
    namestore: '',
    nameMenu:"",
    price:"",
    detail:"",
  
}

const defaultStoreState = []
export default function Bistro() {
    const [storeList, setStoreList] = useState(defaultStoreState)
    const [menuByStoreList, setMenuByStoreList] = useState()
    const listStore = useRecoilValue(listStoreState);
    // const listMenu = useRecoilValue(listMenuState);
// console.log(listStore);
    useEffect(() => {
        getStoreData()
        getNameMenuBystore()
    },[])

    const getStoreData = async () => {
        try {
            const { data } = await axios.get('/api/stores/')
            setStoreList(data?.data)
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const getNameMenuBystore = async() =>{
        try {
            const{data} = await axios.get('/api/food')
            setMenuByStoreList(data?.data)//ในหน้าที่เราคลิกเลือกร้านค้า
            // console.log(data);
            
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <Navbar />
            <Listbistro data={storeList} listStore={listStore} menuByStoreList={menuByStoreList}/>
            <Footer />
        </div>
    )
}
