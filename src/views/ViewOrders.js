import { type } from "@testing-library/user-event/dist/type"
import axios from "axios"
import React from "react"
import { IoMdDownload } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";


export default function ViewOrders() {

    const [orders, setOrders] = React.useState(null)

    function downloadBase64File(base64Data, fileName) {
        const linkSource = base64Data;
        const downloadLink = document.createElement("a");
        downloadLink.href = linkSource;
        downloadLink.download = fileName;
        downloadLink.click();
    }

    const user = localStorage.getItem('token')




    React.useEffect(() => {
        axios.post("http://localhost:5001/api/orders").then((res) => {
            setOrders(res.data)
        })
    }, [])
    if (user && user === "chico") {
        return (
            <div className="w-full h-full flex flex-col font-[pt]">
                <a href="/" className="absolute left-1 top-1 text-5xl text-white"><IoIosArrowRoundBack></IoIosArrowRoundBack></a>
                <div className="w-full flex items-center justify-center text-white font-bold text-4xl mt-[3rem]">Orders</div>
                <div className="w-full flex flex-col mt-[4rem] px-4">
                    {orders ? orders.map((element) => {
                        return (
                            <div className="flex py-4 relative text-white flex-col w-full border-b border-1 border-zinc-900">
                                <div className="flex font-bold flex-row">User:
                                    <div className="font-normal ml-2">{element.user}</div>
                                </div>
                                <div className='w-full flex flex-row gap-2'>
                                    <div className="flex font-bold flex-row">Requests:
                                        <div className="font-normal ml-2">{element.requests}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">First Name:
                                        <div className="font-normal ml-2">{element.firstName}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">Last Name:
                                        <div className="font-normal ml-2">{element.lastName}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">DOB:
                                        <div className="font-normal ml-2">{new Date(element.dob).toLocaleDateString()}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">Height (ft):
                                        <div className="font-normal ml-2">{element.heightFt}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">Height (in):
                                        <div className="font-normal ml-2">{element.heightIn}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">Gender:
                                        <div className="font-normal ml-2">{element.gender}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">Zip code:
                                        <div className="font-normal ml-2">{element.zip}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">City:
                                        <div className="font-normal ml-2">{element.city}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">State:
                                        <div className="font-normal ml-2">{element.state}</div>
                                    </div>
                                    <div className="flex font-bold flex-row">Eyes:
                                        <div className="font-normal ml-2">{element.eyes}</div>
                                    </div>
                                </div>
                                <div className="w-full flex flex-row">
                                    <div className="flex font-bold flex-row">Hair:
                                        <div className="font-normal ml-2">{element.hair}</div>
                                    </div>
                                    <div className="flex font-bold flex-row ml-4">Payment:
                                        <div className="font-normal ml-2">{element.payment}</div>
                                    </div>
                                    <div className="flex font-bold flex-row ml-4">ID:
                                        <a className="ml-2 h-full items-center flex hover:text-green-300 duration-300 transition-all" href={element.id} download={element.user + "ID"}>
                                            <IoMdDownload size={20} />
                                        </a>
                                    </div>
                                    <div className="flex font-bold flex-row ml-4">Signature:
                                        <a className="ml-2 h-full items-center flex hover:text-green-300 duration-300 transition-all" href={element.id} download={element.user + "Signature"}>
                                            <IoMdDownload size={20} />
                                        </a>
                                    </div>
                                </div>
                                <div className="absolute right-1 bottom-1">
                                    <button onClick={(e) => {
                                        e.preventDefault()
                                        axios.delete("http://localhost:5001/api/deleteForm", {
                                            data: {
                                                val: element._id
                                            }
                                        }).then(res => window.location.reload(true))
                                    }} className="px-6 py-2 hover:bg-red-400/30 transition-all duration-300 text-red-500 font-bold">Delete</button>
                                </div>
                            </div>
                        )
                    }) : null}
                </div>


            </div>
        )
    }
}