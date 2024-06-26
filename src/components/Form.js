import React from 'react'
import { GiCancel } from "react-icons/gi";
import DatePicker from "react-datepicker"
import { Country, State, City } from 'country-state-city';
import axios from 'axios'

export default function Form() {
    const [date, setDate] = React.useState(new Date())
    const states = State.getStatesOfCountry('US')
    const [state, setState] = React.useState("AL")
    const [cities, setCities] = React.useState(City.getCitiesOfState("US", "PA"))
    const [idPhoto, setIdPhoto] = React.useState(null)
    const [signature, setSignature] = React.useState(null)
    const [requests, setRequests] = React.useState("")
    const [firstName, setFirstName] = React.useState(null)
    const [lastName, setLastname] = React.useState(null)
    const [heightFt, setHeightFt] = React.useState(1)
    const [heightIn, setHeightIn] = React.useState(1)
    const [gender, setGender] = React.useState("Male")
    const [zip, setZip] = React.useState(null)
    const [city, setCity] = React.useState("Abbottstown")
    const [eyes, setEyes] = React.useState("black")
    const [hair, setHair] = React.useState("bald")
    const [payment, setPayment] = React.useState("cash app")
    const [weight, setWeight] = React.useState(null)


    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    };

    const user = localStorage.getItem('token')


    const closeForm = () => {
        document.getElementById("form").classList.add("hidden")
        document.getElementById('firstName').value = ""
        document.getElementById('lastName').value = ""
        document.getElementById('requests').value = ""
        document.getElementById('heightFt').value = 1
        document.getElementById('heightIn').value = 1
        document.getElementById('weight').value = null
        document.getElementById('eyes').value = 'black'
        document.getElementById('gender').value = 'Male'
        document.getElementById('state').value = 'PA'
        document.getElementById('city').value = "Abbottstown"
        document.getElementById('zip').value = null
        document.getElementById('hair').value = 'bald'
        document.getElementById('payment').value = 'cash app'
        document.getElementById('signature').value = null
        document.getElementById('id').value = null
        setRequests("")
        setFirstName(null)
        setLastname(null)
        setHeightFt(1)
        setHeightIn(1)
        setWeight(null)
        setGender("Male")
        setCity("Abbottstown")
        setZip(null)
        setState("PA")
        setEyes("black")
        setHair("bald")
        setPayment("cash app")
        setIdPhoto(null)
        setSignature(null)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log("submitting form")
        axios.post("https://chicos-backend-production.up.railway.app/api/submitForm", {
            requests: requests,
            firstName: firstName,
            lastName: lastName,
            heightFt: heightFt,
            heightIn: heightIn,
            weight: weight,
            gender: gender,
            city: city,
            zip: zip,
            state: state,
            eyes: eyes,
            hair: hair,
            payment: payment,
            id: idPhoto,
            signature: signature,
            user: user,
            dob: date
        }).then((res)=>{
            console.log(res.data)
            closeForm()
            if(res.data.complete){
                alert('Successfully Submitted Form')
            }else{
                alert('Error Submitting Form')
            }
        })
    }




    return (
        <div id="form" className="absolute hidden backdrop-blur-sm flex items-center justify-center w-full h-full">
            <div className="md:w-[55rem] md:h-[55rem] w-full h-full bg-white rounded-lg relative">
                <label className="top-3 absolute left-3 font-bold">Chicos Form</label>
                <button onClick={() => closeForm()} className="absolute right-3 top-3 hover:text-red-500 transition-all duration-150">
                    <GiCancel />
                </button>
                <div className="w-full border-b border-zinc-200 h-10"></div>
                <form className="w-full h-full flex flex-col px-4 md:py-4">
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <label className='font-bold md:text-sm text-xs'>Any requests (Different state, Middle name, etc) NO GURANTEES <strong>*</strong></label>
                            <input onChange={(e) => setRequests(e.target.value)} for="requests" name="requests" id="requests" placeholder='Pennsylvania' className="rounded outline outline-1 focus:outline-blue-500 focus:outline-2 mt-2 px-2 md:py-1"></input>
                        </div>
                    </div>
                    <div className="flex flex-row md:mt-6 mt-1">
                        <div className="flex flex-col">
                            <label className='font-bold md:text-sm text-xs'>First Name <strong>*</strong></label>
                            <input onChange={(e) => setFirstName(e.target.value)} for="firstName" name="firstName" id="firstName" placeholder='Chico' className="rounded outline outline-1 focus:outline-blue-500 focus:outline-2 mt-2 px-2 md:py-1"></input>
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className='font-bold md:text-sm text-xs'>Last Name <strong>*</strong></label>
                            <input onChange={(e) => setLastname(e.target.value)} for="lastName" name="lastName" id="lastName" placeholder='Lopez' className="rounded w-full outline outline-1 focus:outline-blue-500 focus:outline-2 mt-2 px-2 md:py-1"></input>
                        </div>

                    </div>
                    <div className="flex flex-row md:mt-6 mt-1">
                        <div className="flex flex-col">
                            <label className='font-bold md:text-sm text-xs'>Date of Birth (DOB) <strong>*</strong></label>
                            <DatePicker id="dob" selected={date} onChange={(e) => setDate(e)} for="dob" name="dob" className="outline mt-2 outline-1 rounded px-2 md:py-1 focus:outline-2 focus:outline-blue-500" />
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className='font-bold md:text-sm text-xs truncate'>Height (ft) <strong>*</strong></label>
                            <select onChange={(e) => setHeightFt(e.target.value)} id="heightFt" for="heightFt" name="heightFt" className="mt-2 outline outline-1 rounded px-2 md:py-1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                            </select>
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className='font-bold md:text-sm text-xs truncate'>Height (in) <strong>*</strong></label>
                            <select onChange={(e) => setHeightIn(e.target.value)} id="heightIn" for="heightIn" name="heightIn" className="mt-2 outline outline-1 rounded px-2 md:py-1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row md:mt-6 mt-1">
                        <div className="flex flex-col">
                            <label className='font-bold md:text-sm text-xs'>Weight (lbs) <strong>*</strong></label>
                            <input onChange={(e) => setWeight(e.target.value)} id="weight" type='number' for="weight" name="weight" placeholder='150' className="rounded outline outline-1 focus:outline-blue-500 focus:outline-2 mt-2 px-2 md:py-1"></input>
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className='font-bold md:text-sm text-xs'>Gender <strong>*</strong></label>
                            <select onChange={(e) => setGender(e.target.value)} id="gender" name="gender" for="gender" className="mt-2 outline outline-1 rounded px-2 md:py-1">
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>


                    </div>
                    <div className="flex flex-row md:mt-6 mt-1">
                        <div className="flex flex-col">
                            <label className='font-bold md:text-sm text-xs'>Eyes <strong>*</strong></label>
                            <select onChange={(e) => setEyes(e.target.value)} id="eyes" name="eyes" for="eyes" className="mt-2 outline outline-1 rounded px-2 md:py-1">
                                <option>black</option>
                                <option>brown</option>
                                <option>blue</option>
                                <option>green</option>
                            </select>
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className='font-bold md:text-sm text-xs'>State <strong>*</strong></label>
                            <select id="state" name="state" for="state" onChange={(e) => {
                                setState(e.currentTarget.value)
                                setCities(City.getCitiesOfState("US", e.currentTarget.value))
                            }} className="mt-2 outline outline-1 rounded px-2 md:py-1">
                                <option>PA</option>
                                <option>NJ</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row md:mt-6 mt-1">
                        <div className="flex flex-col">
                            <label className='font-bold md:text-sm text-xs'>CITY/ZIP OF SELECTED STATE <strong>*</strong></label>
                            <select for="city" name="city" onChange={(e) => setCity(e.target.value)} id="city" className="mt-2 w-[15rem] outline outline-1 rounded px-2 md:py-1">
                                {cities ? cities.map((e) => {
                                    return (
                                        <option>{e.name}</option>
                                    )
                                }) : null}
                            </select>
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className='font-bold md:text-sm text-xs text-[#ffffff]'>akjsld;f</label>
                            <input for="zip" name="zip" onChange={(e) => setZip(e.target.value)} id="zip" placeholder='12601' className="rounded w-full outline outline-1 focus:outline-blue-500 focus:outline-2 mt-2 px-2 md:py-1"></input>
                        </div>


                    </div>
                    <div className="flex flex-row md:mt-6 mt-2">
                        <div className="flex flex-col">
                            <label className='font-bold md:text-sm text-xs'>Hair <strong>*</strong></label>
                            <select for="hair" name="hair" onChange={(e) => setHair(e.target.value)} id="hair" className="mt-2 outline outline-1 rounded px-2 md:py-1">
                                <option>bald</option>
                                <option>black</option>
                                <option>blonde</option>
                                <option>brown</option>
                                <option>red</option>
                                <option>white</option>
                            </select>
                        </div>
                        <div className="flex flex-col ml-4">
                            <label className='font-bold md:text-sm text-xs'>Payment Method <strong>*</strong></label>
                            <select for="payment" name="payment" onChange={(e) => setPayment(e.target.value)} id="payment" className="mt-2 outline outline-1 rounded px-2 md:py-1">
                                <option>cash app</option>
                                <option>venmo</option>
                                <option>zelle</option>
                                <option>cash</option>
                                <option>check</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-row md:mt-6 mt-1">
                        <div className="flex flex-col">
                            <label className='font-bold text-xs'>ID Photo (White back ground, good lighting minimal shadows on face, you want the entirety of your shoulders showing but not too low) <strong>*</strong></label>
                            <input for="id" name="id" onChange={async (e) => {
                                let file = e.target.files[0]
                                const base64 = await convertToBase64(file)
                                setIdPhoto(base64)
                            }}
                                class="mt-1 relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                id="id" />

                        </div>
                    </div>
                    <div className="flex flex-row md:mt-6 mt-1">
                        <div className="flex flex-col">
                            <label className='font-bold text-xs'>SIGNATURE (White paper, use flash make sure there’s no glare, only one signature should be seen, BLACK PEN) <strong>*</strong></label>
                            <input for="id" name="id" onChange={async (e) => {
                                let file = e.target.files[0]
                                const base64 = await convertToBase64(file)
                                setSignature(base64)
                            }}
                                class="mt-1 relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                type="file"
                                id="signature" />

                        </div>
                    </div>
                    <div className="w-full flex items-start justify-center">
                        <button onClick={(e)=> onSubmit(e)} className="px-6 py-2 hover:bg-green-300/30 transition-all duration-300 text-green-500">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}