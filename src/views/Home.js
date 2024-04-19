import { motion, useAnimationControls } from 'framer-motion'
import React from 'react'
import SVGPath from '../components/SVGPath'
import Login from '../components/Login'
import Register from '../components/Register'
import Form from '../components/Form'
import Refferal from '../components/Refferal'
import Pricing from '../components/Pricing'

export default function Home() {

    const user = localStorage.getItem('token')

    console.log(user)

    const logout = () => {
        localStorage.removeItem('token')
        window.location.reload(false)
    }


    const openLogin = () => {
        document.getElementById("loginWidget").classList.remove("hidden")
    }

    const openRegister = () => {
        document.getElementById("registerWidget").classList.remove("hidden")
    }
    const openForm = ()=>{
        document.getElementById("form").classList.remove("hidden")
    }
    const openRefferal = ()=>{
        document.getElementById("refferal").classList.remove("hidden")
    }
    const openPricing = ()=>{
        document.getElementById("pricing").classList.remove("hidden")
    }

    if (user && user === "chico") {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center" style={{height: "calc(100vh)"}}>
                <div className="left-5 absolute text-xs md:text-base text-white top-5 font-[pt]">
                    Logged in as: {user}
                </div>
                <div className="left-[35%] font-[pt] md:left-[40%] absolute justify-between flex text-xs md:text-base text-white top-5 md:gap-4 gap-2">
                    <a href="/accounts">Manage Accounts</a>
                    <a href="/orders">Manage Orders</a>
                </div>
                <div className="absolute text-xs md:text-base text-white md:right-5 right-1 top-5">
                    <button className="font-[pt]" onClick={() => logout()}>Logout</button>
                </div>
                <Login />
                <Register />
                <Form/>
                <Refferal></Refferal>
                <Pricing></Pricing>
                <svg width="695.001" height="66.6" className="w-[80%]" viewBox="0 0 695.001 66.6" xmlns="http://www.w3.org/2000/svg">
                    <SVGPath />
                </svg>
                <div className="mt-[4rem] md:gap-[4rem] gap-[20px] w-full flex items-center justify-center flex-row text-white font-[pt]">
                    <button onClick={() => openForm()} className="md:px-6 px-4 py-2 border border-white rounded transition-all duration-300 hover:bg-white hover:text-black">Open Form</button>
                    <button onClick={() => openRefferal()} className="md:px-6 px-4 py-2 border border-white rounded transition-all duration-300 hover:bg-white hover:text-black">Add Refferal</button>
                    <button onClick={() => openPricing()} className="md:px-6 px-4 py-2 border border-white rounded transition-all duration-300 hover:bg-white hover:text-black">Pricing</button>
                </div>
            </div>
        )
    } else if (user) {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center font-[pt]" style={{ height: "calc(100vh)" }}>
                <div className="left-5 absolute text-white top-5">
                    Logged in as: {user}
                </div>
                <div className="absolute rounded-full flex items-center justify-center text-center px-8 py-2 bg-white text-lg -translate-x-[50%] top-5 left-[50%] text-black">
                    Pricing: $65 for 2 | $110 for 4 | 1 is NOT an option
                </div>
                <div className="absolute text-white right-5 top-5">
                    <button onClick={() => logout()}>Logout</button>
                </div>
                <Login />
                <Register />
                <Form/>
                <Refferal></Refferal>
                <Pricing></Pricing>
                <svg width="695.001" height="66.6" className="w-[80%]" viewBox="0 0 695.001 66.6" xmlns="http://www.w3.org/2000/svg">
                    <SVGPath />
                </svg>
                <div className="mt-[4rem] md:gap-[4rem] gap-[20px] w-full flex items-center justify-center flex-row text-white font-[pt]">
                    <button onClick={() => openForm()} className="md:px-6 px-4 py-2 border border-white rounded transition-all duration-300 hover:bg-white hover:text-black">Open Form</button>
                    <button onClick={() => openRefferal()} className="md:px-6 px-4 py-2 border border-white rounded transition-all duration-300 hover:bg-white hover:text-black">Add Refferal</button>
                    <button onClick={() => openPricing()} className="md:px-6 px-4 py-2 border border-white rounded transition-all duration-300 hover:bg-white hover:text-black">Instructions</button>
                </div>
            </div>
        )

    } else {
        return (
            <div className="w-full h-full flex flex-col items-center justify-center font-[pt]" style={{ height: "calc(100vh)" }}>
                <Login />
                <Register />
                <svg width="695.001" height="66.6" className="w-[80%]" viewBox="0 0 695.001 66.6" xmlns="http://www.w3.org/2000/svg">
                    <SVGPath />
                </svg>
                <div className="mt-[4rem] gap-[4rem] w-full flex items-center justify-center flex-row text-white">
                    <button onClick={() => openLogin()} className="px-6 py-2 border border-white rounded transition-all duration-300 hover:bg-white hover:text-black">Log In</button>
                    <button onClick={() => openRegister()} className="px-6 py-2 border border-white rounded transition-all duration-300 hover:bg-white hover:text-black">Register</button>
                </div>
            </div>
        )
    }


}