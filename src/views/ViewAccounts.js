import axios from "axios"
import React from "react"
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosArrowRoundBack } from "react-icons/io";

export default function ViewAccount() {

    const user = localStorage.getItem('token')

    const [accounts, setAccounts] = React.useState()

    React.useEffect(() => {
        axios.post("https://chicos-backend.netlify.app/api/accounts").then((res) => {
            console.log(res.data)
            setAccounts(res.data)
        })
    }, [])

    const removeRefferal = (e, elem, event)=>{
        event.preventDefault()
        axios.delete("https://chicos-backend.netlify.app/api/deleteRefferal", {
            data: {
                user: elem._id,
                reffered: e
            }
        }).then((res)=>{
            console.log(res)
        })
        window.location.reload(true)
    }

    if (user && user === "chico") {
        return (
            <div className="w-full flex flex-col font-[pt]">
                <a href="/" className="absolute left-1 top-1 text-5xl text-white"><IoIosArrowRoundBack></IoIosArrowRoundBack></a>
                <div className="w-full flex items-center justify-center text-white font-bold text-4xl mt-[3rem]">Accounts</div>
                <div className="w-full flex flex-col mt-[4rem] px-4">
                    {accounts ? accounts.map((elem)=>{
                        return(
                            <div className="flex py-4 relative text-white flex-col w-full border-b border-1 border-zinc-900">
                                <div className="font-bold text-xl">{elem.username}</div>
                                <button onClick={(e)=>{
                                    e.preventDefault()
                                    //mark account
                                    if(elem.marked){
                                        //unmark
                                        elem.marked = false
                                    }else{
                                        //mark
                                        elem.marked = true
                                    }
                                    axios.post("https://chicos-backend.netlify.app/api/updateAccount", elem)
                                    window.location.reload(true)
                                }} className="absolute right-0 top-[50%]">{elem.marked ? <FaCheck color="green"/> : <ImCross color="red"/> }</button>
                                <div className="w-full flex-row gap-2">
                                    <h1 className="flex flex-row gap-2">Refferals ({elem.reffered.length}): 
                                    {elem.reffered.map((e)=>{
                                        return(<button onClick={(event)=> removeRefferal(e, elem, event)}>{e}</button>)
                                    })}
                                    </h1>
                                    
                                </div>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        )
    }


}