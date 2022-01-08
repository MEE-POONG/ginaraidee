import React from 'react'
import Navbar from "../components/Navbar";
import Listdrinkstore from '../components/Listdrinkstore';
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { listStoredrinkState } from '../contaxt/liststroedrink';
// import {listMenuState} from "../contaxt/listmenu"
// import { Menu } from '@headlessui/react';



const menuByStoredrinkState = {
    namestoredrink: '',
    nameDrink:"",
    price:"",
  
}

const defaultStoredrinkState = []
export default function Drinkstore() {
    const [storedrinkList, setStoredrinkList] = useState(defaultStoredrinkState)
    const [drinkByStoredrinkList, setDrinkByStoredrinkList] = useState()
    const listStoredrink = useRecoilValue(listStoredrinkState);
    // const listMenu = useRecoilValue(listMenuState);
// console.log(listStore);
    useEffect(() => {
        getStoredrinkData()
        getNameDrinkBystoredrink()
    },[])

    const getStoredrinkData = async () => {
        try {
            const { data } = await axios.get('/api/storesdrink/')
            setStoredrinkList(data?.data)
            // console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    const getNameDrinkBystoredrink = async() =>{
        try {
            const{data} = await axios.get('/api/drink')
            setDrinkByStoredrinkList(data?.data)//ในหน้าที่เราคลิกเลือกร้านค้า
            // console.log(data);
            
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div>
            <Navbar />
            <Listdrinkstore 
            data={storedrinkList} 
            listStoredrink={listStoredrink} 
            drinkByStoredrinkList={drinkByStoredrinkList}/>
            <Footer />
        </div>
    )
}
