import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import RedFlagsGrid from './redFlagsGrid'

const RedFlags = () => {
    
    const [ startDate, setStartDate ] = useState(new Date())
    const [ endDate, setEndDate ] = useState(new Date())

    const [ red_flags_data, setData ] = useState([])

    const fetchData = () => {
        if(startDate<=endDate){
            var std = JSON.stringify(startDate)
            std = std.slice(1,11)
            console.log(std)
            var endd = JSON.stringify(endDate)
            endd = endd.slice(1,11)
            const data = {start:std, end:endd}
            axios.post("http://asean-hackathon2021.herokuapp.com/entry-details/",data)
            .then(res => setData(res.data))
            .catch(err => console.log(err) )
        }
        else{
            window.alert('Set valid Date range!!!')
        }
    }

    return (
        <div className='red-flags'>
            <div className='date-selectors'>
                <div className='date'>
                    <div className='date-label'>Start Date :</div>
                    <DatePicker selected={startDate} onChange={date => setStartDate(date)}/>
                </div>
                <div className='date'>
                    <div className='date-label'>End Date :</div>
                    <DatePicker selected={endDate} onChange={date => setEndDate(date)}/>
                </div>
            </div>
            <div className='fetch-data'>
                <div className='fetch-btn btn btn-dark' onClick={fetchData}>
                    Show Data
                </div>
            </div>
            <div className='grid'>
                <RedFlagsGrid red_flags_data={red_flags_data}/>
            </div>
        </div>
    )    
}

export default RedFlags