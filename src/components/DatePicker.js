import React from "react"
import ReactDatePicker from "react-datepicker"
export default function(){
    const [date, setDate] = React.useState(new Date())

    return(
        <ReactDatePicker className="outline outline-1 mt-2 px-2 py-1 rounded focus:outline-blue-500 focus:outline-2" selected={date} onChange={(date)=>setDate(date)}></ReactDatePicker>
    )
}