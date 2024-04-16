import React from "react";
import { motion, useAnimationControls } from 'framer-motion'
import { GiCancel } from "react-icons/gi";
import axios from 'axios'

const loginVariants = {
    rest:{
        opacity: 0,
        transition: {
            duration: 1
        }
    },
    animate:{
        opacity: 1,
        transition: {
            druation: 1
        }
    }
}

export default function Login() {
    const [username, setUsername] = React.useState(null)
    const [password, setPassword] = React.useState(null)

    const closeLogin = ()=>{
        document.getElementById("loginWidget").classList.add("hidden")
        setUsername("")
        setPassword("")
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        axios.post("https://chicos-backend-cmpu.onrender.com/api/login", {username: username, password: password}).then((res)=>{
            console.log(res.data)
            if(res.data === "exists") {
                localStorage.setItem('token', username)
                closeLogin()
                window.location.reload(true)
            }else{
                alert("Incorrect Username or Password")
            }
        })
        setUsername("")
        setPassword("")
        document.getElementById("email").value = ""
        document.getElementById("password").value = ""
    }

    return (
        <div id="loginWidget" className="hidden absolute backdrop-blur-sm flex items-center justify-center w-full h-full">
            <div className="absolute right-5 top-5 text-2xl transition-all duration-300 hover:text-red-300 text-white">
                <button onClick={()=> closeLogin()}>
                    <GiCancel />
                </button>
            </div>
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-zinc-100 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-zinc-200 dark:text-white">Username</label>
                        <input onChange={(e)=> setUsername(e.currentTarget.value)} name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="chico" required="" />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-zinc-200 dark:text-white">Password</label>
                        <input onChange={(e)=> setPassword(e.currentTarget.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                    </div>
                    <button onClick={(e)=> onSubmit(e)} class="hover:text-green-300 duration-300 transition-all w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-zinc-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                </form>
            </div>
        </div>
    )
}