import React from "react"
import { motion } from 'framer-motion'
import { GiCancel } from "react-icons/gi";
export default function () {


    const close = (e) => {
        e.preventDefault()
        document.getElementById('pricing').classList.add("hidden")
    }

    return (
        <div id="pricing" className="absolute hidden overflow-auto backdrop-blur-sm flex items-center justify-center w-full h-full">
            <div className="md:w-[55rem] md:h-[55rem] font-[pt] w-[95%] h-[95%] bg-white rounded-lg relative md:py-[100px] py-[50px]">
                <div className="absolute right-5 top-5 text-2xl transition-all duration-300 hover:text-red-600">
                    <button onClick={(e) => close(e)}>
                        <GiCancel />
                    </button>
                </div>
                <div className="w-full items-center justify-center flex flex-col">
                    <div className="font-bold md:text-4xl">Pricing</div>
                    <div className="md:text-lg md:mt-6 mt-1">$65 for 2</div>
                    <div className="md:text-lg md:mt-6 mt-1">$110 for 4</div>
                    <div className="md:text-lg md:mt-6 mt-1">$5 off per refferal ($40 max)</div>

                    <div className="md:text-lg md:mt-6 mt-1 md:px-10 text-sm px-4 font-bold border-b md:py-6 py-2">Your ids are in an imma try and get them to you as soon as possible, if you want it hand delievered to your front door it's 5 bucks but if you can pick up it's free. Lmk some times and places that could work for you and I'll see if they work for me. Totally find if you want to pick up someone else's as well.</div>
                    <div className="md:text-lg md:mt-6 mt-1 md:px-10 px-4 text-sm font-bold border-b md:py-6 underline decoration-2 py-2">ALL PAYMENTS THAT ARENT SUBMITTED ON TIME WILL NOT GO ON THE ORDER UNLESS SPECIFICALLY TOLD OTHERWISE</div>
                    <div className="mt-6 px-10 font-bold md:text-3xl md:py-6">Shipping</div>
                    <div className="text-sm w-full items-center justify-center flex flex-col">
                        <div>Shipping available for anywhere (House, PO Box, School)</div>
                        <div>Fastest Shipping (1-3 Business Days)</div>
                        <div>5$ per person</div>
                        <div>Discrete packaging is an additional $3</div>
                        <div>More than one ID can go in one shipment, but it is still-</div>
                        <div>$5 per person</div>
                    </div>



                </div>
            </div>
        </div>
    )
}