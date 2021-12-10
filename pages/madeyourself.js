import { useEffect, useState } from "react";
import axios from "axios";
import Made from "../components/Made";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const initialState = {
    namemenu: '',
    staple: '',
    step: '',
}

const defaultUserState = []
export default function Addfood() {
    const [userList, setUserList] = useState(defaultUserState)

    useEffect(() => {
        getUserData()
    }, [])

    const getUserData = async () => {
        try {
            const { data } = await axios.get('/api/users/')
            setUserList(data?.data)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
           <Navbar/>
            <Made data={userList}/>
          <Footer/>
        </div>
    );
}
