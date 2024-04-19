import axios from "axios"
import React from "react"
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { IoIosArrowRoundBack } from "react-icons/io";
import { GiCancel } from "react-icons/gi";


export default function ViewAccount() {

    const user = localStorage.getItem('token')

    const [accounts, setAccounts] = React.useState()
    const [form, setForm] = React.useState(null)

    React.useEffect(() => {
        axios.post("https://chico-backend-857ad46e3125.herokuapp.com/api/accounts").then((res) => {
            console.log(res.data)
            setAccounts(res.data)
        })
    }, [])

    const removeRefferal = (e, elem, event) => {
        event.preventDefault()
        axios.delete("https://chico-backend-857ad46e3125.herokuapp.com/api/deleteRefferal", {
            data: {
                user: elem._id,
                reffered: e
            }
        }).then((res) => {
            console.log(res)
        })
        window.location.reload(true)
    }

    const markAccount = (event, elem) => {
        event.preventDefault()
        //mark account
        if (elem.marked) {
            //unmark
            elem.marked = false
        } else {
            //mark
            elem.marked = true
        }
        axios.post("https://chico-backend-857ad46e3125.herokuapp.com/api/updateAccount", elem).then((res) => {
            console.log(res)
            window.location.reload(true)
        })

    }

    const showForm = (event, elem) => {
        event.preventDefault()
        document.getElementById("showForm").classList.remove("hidden")
        axios.post("https://chico-backend-857ad46e3125.herokuapp.com/api/findForm", { username: elem.username }).then((res) => {
            console.log(res)
            setForm(res.data)
        })
    }

    const closeForm = (e) =>{
        e.preventDefault()
        document.getElementById("showForm").classList.add("hidden")
        setForm(null)
    }

    const deleteAccount = (event, elem) => {
        event.preventDefault()
        axios.delete("https://chico-backend-857ad46e3125.herokuapp.com/api/deleteAccount", {
            data: {
                username: elem.username
            }
        }).then((res)=>{
            console.log(res)
            window.location.reload(true)
        })
    }

    if (user && user === "chico") {
        return (
            <div className="w-full flex flex-col font-[pt]">
                <a href="/" className="absolute left-1 top-1 text-5xl text-white"><IoIosArrowRoundBack></IoIosArrowRoundBack></a>
                <div id="showForm" className="fixed hidden rounded flex flex-col z-30 ml-[10%] mt-[10%] w-[80%] h-[80%] bg-white">
                    <div className="w-full relative">
                        <button onClick={(e)=> closeForm(e)} className="absolute right-1 top-1 transition-all duration-300 hover:text-red-500">
                            <GiCancel></GiCancel>
                        </button>
                    </div>
                    <div className="w-full h-full flex flex-col items-start justify-center px-4 py-4">
                        <div className="w-full flex flex-row gap-2">
                            <div>{form ? form.firstName : null}</div>
                            <div>{form ? form.lastName : null}</div>
                        </div>
                        <div>{form ? form.requests : null}</div>
                        <div className="w-full flex flex-row gap-2">
                            <div>{form ? new Date(form.dob).toLocaleDateString() : null}</div>
                            <div>Ft: {form ? form.heightFt : null}</div>
                            <div>In: {form ? form.heightIn : null}</div>
                        </div>
                        <div className="w-full flex flex-row gap-2">
                            <div>weight: {form ? form.weight : null}</div>
                            <div>gender: {form ? form.gender : null}</div>
                        </div>
                        <div className="w-full flex flex-row gap-2">
                            <div>city: {form ? form.city : null}</div>
                            <div>zip: {form ? form.zip : null}</div>
                            <div>state: {form ? form.state : null}</div>
                        </div>
                        <div className="w-full flex flex-row gap-2">
                            <div>eyes: {form ? form.eyes : null}</div>
                            <div>hair: {form ? form.hair : null}</div>
                        </div>
                        <div>payment: {form ? form.payment : null}</div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center text-white font-bold text-4xl mt-[3rem]">Accounts</div>
                <div className="w-full flex flex-col mt-[4rem] px-4">
                    {accounts ? accounts.map((elem) => {
                        return (

                            <div className="flex py-4 relative text-white flex-col w-full border-b border-1 border-zinc-900">
                                <h1 className="font-bold text-xl">{elem.username}</h1>
                                <button onClick={(event) => markAccount(event, elem)} className="absolute right-0 top-[50%]">{elem.marked ? <FaCheck color="green" /> : <ImCross color="red" />}</button>
                                {!(elem.username === "chico") ? <button onClick={(event)=> deleteAccount(event, elem)} className="text-red-500 mt-4">Delete Account</button>: null}
                                
                                <div className="w-full flex-row gap-2">
                                    <h1 className="flex flex-row gap-2">Refferals ({elem.reffered.length}):
                                        {elem.reffered.map((e) => {
                                            return (<button onClick={(event) => removeRefferal(e, elem, event)}>{e}</button>)
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