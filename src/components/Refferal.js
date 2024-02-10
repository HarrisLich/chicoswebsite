import React from "react"
import { GiCancel } from "react-icons/gi";
import axios from "axios";

export default function () {

    const user = localStorage.getItem('token')
    const [refferal, setRefferal] = React.useState(null)
    
    


    const closeMenu = (e)=>{
        e.preventDefault()
        document.getElementById("refferal").classList.add("hidden")
        setRefferal(null)
    }

    const submitRefferal = (e)=>{
        e.preventDefault()
        axios.post("https://chicos-backend.onrender.com/api/submitRefferal", {user: user, refferal: refferal}).then((res)=>{
            console.log(res)
        })
        closeMenu(e)
        
    }

    return (
        <div id="refferal" className="absolute hidden overflow-auto backdrop-blur-sm flex items-center justify-center w-full h-full">
            <div className="md:w-[30rem] md:h-[10rem] w-full h-[30%] bg-white rounded-lg flex flex-col relative items-center justify-center">
                <button onClick={(e)=> closeMenu(e)} className="absolute right-2 top-2 hover:text-red-400 transition-all duration-300">
                    <GiCancel />
                </button>
                <div className="mt-2 font-bold">Add Refferal</div>
                <input onChange={(e)=> setRefferal(e.target.value)} className="focus:ring-0 focus:outline-2 focus:outline-blue-500 outline outline-1 rounded px-2 py-1 mt-2" placeholder="Username"></input>
                <button onClick={(e)=> submitRefferal(e)} className="px-6 py-2 mt-2 hover:bg-green-300/30 transition-all duration-300 text-green-500">Submit</button>
            </div>
        </div>
    )
}