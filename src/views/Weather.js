import React, { useContext, useEffect, useState } from 'react'
import moment from 'moment';
import WeatherContext from '../context/WeatherContext'
import WeatherCard from '../components/WeatherCard'

export default function Weather() {
    const {weatherData,startDate,setStartDate}=useContext(WeatherContext)

    const [array,setArray]=useState([])
    useEffect(()=>{
        setArray([])
        for(let i=0;i<40;i=i+8){
            setArray((prev)=>(
                [
                    ...prev,
                    (weatherData.list?weatherData.list[i]:null)
                ]
            ))
        }
    },[weatherData])

    return (
        <>
            <div className="row">
                <div className={`col-${window.screen.availWidth > 992 ? '2' : '6'} fw-bold d-flex align-items-center mt-3`}>
                    <div>
                        <label htmlFor="date" style={{ fontSize: ".8rem", fontWeight: "initial" }}>Select Date:</label>
                        <input type="date" name="date" id="" className='mb-2' style={{ background: "lightgrey", width: "8.5rem", borderRadius: '5px', padding: ".3rem .5rem" }} max={moment().format("YYYY-MM-DD")} onChange={(e)=>{setStartDate(e.target.value)}}/>
                        <p>High Temperature</p>
                        <p>Low Temperature</p>
                        <p>Humidity</p>
                        <p>Sunrise Time</p>
                        <p>Sunset Time</p>
                    </div>
                </div>
                <div className={`col-${window.screen.availWidth > 992 ? '10' : '6'} cards`}>
                    {
                    array.map((ele, index) => {
                        return <div key={index} >
                            <WeatherCard data={ele} sunrise={weatherData.city ? weatherData.city.sunrise : ''} sunset={weatherData.city ? weatherData.city.sunset : ''} />
                        </div>
                    })
                    }
                </div>
            </div>
        </>
    )
}
