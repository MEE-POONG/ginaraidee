import React from 'react'
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Swal from 'sweetalert';
import { useRouter } from "next/router";





export default function Login() {
    const router = useRouter();

    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
  
    const handleAddProduct = async (e) => {
      e.preventDefault();
      if (username === 'admin' && password === '0000') {
        window.sessionStorage.setItem("login", "true");
        router.push("/addfood");
    }else 
      Swal.fire({
        title: "Username หรือ Password ไม่ถูกต้องค่ะ",
        width: 600,
        padding: "3em",
        // background: '#fff url(/images/trees.png)',
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
    };
    return (
        <>
        <div>
        <Navbar />
        <div className="container mx-auto max-w-lg py-5">
            <div className="px-4 flex-auto">

                <div className="py-5 block grid">
                    <div className="cursor-pointer mb-3 border-2 border-gray-300 rounded-lg px-3 bg-white">
                        <form className="w-full max-w-lg">
                            <div className="py-5 text-center">
                                <h1 className="text-2xl bg-shadow block uppercase tracking-wide font-bold">Signin admin</h1>
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                    Username
                                </label>
                                <input className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" 
                                 type="text"
                                 name="user-name"
                                 placeholder="Username"
                                 value={username}
                                 onChange={(e) => {
                                   setUsername(e.target.value);
                                 }}
                                />
                            </div>
                            <div className="w-full px-3">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs mb-2" htmlFor="grid-first-name">
                                    Password
                                </label>
                                <input className="appearance-none block w-full bg-gray-50 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" 
                                type="password"
                                name="user-password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => {
                                  setPassword(e.target.value);
                                }}/>
                            </div>
                            <div className="py-5 text-center my-4">
                                <button
                                    className="bg-yellow-400 uppercase tracking-wide hover:shadow-lg text-white font-bold py-2 px-4 rounded"
                                    type="submit"
                                    value="submit"
                                    name="submit"
                                    onClick={handleAddProduct}
                                >
                                    signin
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}
