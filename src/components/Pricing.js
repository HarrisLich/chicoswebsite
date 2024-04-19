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
            <div className="md:w-[55rem] md:h-[55rem] font-[pt] w-[95%] h-[95%] bg-white rounded-lg relative md:py-[100px] py-[20px]">
                <div className="absolute right-5 top-5 text-2xl transition-all duration-300 hover:text-red-600">
                    <button onClick={(e) => close(e)}>
                        <GiCancel />
                    </button>
                </div>
                <div className="w-full items-center justify-center flex flex-col overflow-auto">
                    <div className="font-bold text-sm md:text-4xl">Instructions</div>
                    <div className="mt-2 w-full items-center justify-start px-6 text-sm md:text-base font-bold border-t">Fill Out The Form</div>
                    <div className="px-2 text-center text-xs md:text-base">Default IDs are PA/NJ, anything else needs to specially requested</div>
                    <div className="px-2 text-center text-xs md:text-base">Make sure the city and the zip codes match (look up the city you picked)</div>
                    <div className="px-2 text-center text-xs md:text-base">ID PHOTO (White back ground, good lightening minimal shadows on face, you want the entirety of your shoulders showing but not too low)</div>
                    <div className="px-2 text-center text-xs md:text-base">SIGNATURE (White paper, use flash make sure there’s no glare, only one signature should be seen, BLACK PEN) Feel free to ask any questions</div>
                    <div className="mt-2 w-full items-center md:text-base justify-start px-6 text-sm font-bold border-t">Add Referrals</div>
                    <div className="px-2 text-center text-xs md:text-base">referral will be the name of their account on the website</div>
                    <div className='px-2 text-center text-xs md:text-base'>Each referral takes 5 dollars off your order</div>
                    <div className='px-2 text-center text-xs md:text-base'>Referrals will be verified by the website and by hand, if not put in through the website you will not get the discount</div>
                    <div className="mt-2 w-full items-center justify-start px-6 text-sm md:text-base font-bold border-t">Extra</div>
                    <div className="px-2 text-center text-xs md:text-base">If there is an error message please screenshot and send to me so I can to continue to fix it.</div>
                    <div className="w-full items-center text-xs justify-start px-6 text-sm md:text-base font-bold border-t">Shipping</div>
                    <div className="px-2 text-center text-xs md:text-base">Shipping available for all 50 States (House, P.O Box, School)</div>
                    <div className="px-2 text-center text-xs md:text-base">Priority Mail (fastest shipping, 1-3 business days)</div>
                    <div className="px-2 text-center text-xs md:text-base">$5 per person</div>
                    <div className="px-2 text-center text-xs md:text-base">Discrete packaging is $3 more dollars</div>
                    <div className="px-2 text-center text-xs md:text-base">More than one ID can go in one shipment, but it will still be 5 per person (eg. sisters need their id shipped to same address, both still pay 5)</div>
                    <div className="px-2 text-center text-xs md:text-base">IF YOU NEED SHIPPING, YOU HAVE TO PAY BEFORE THE ORDER.</div>
                    <div className="mt-2 w-full text-xs items-center justify-start px-6 text-sm md:text-base font-bold border-t">Pick up/Drop off</div>
                    <div className="px-2 text-center text-xs md:text-base">I will text you individually when IDs are done to coordinate time/place</div>
                    <div className="px-2 text-center text-xs md:text-base">25 minute or less for pick up/drop off from Olney, MD</div>
                    <div className="px-2 text-center text-xs md:text-base">Delivery is $5</div>
                </div>
            </div>
        </div>
    )
}