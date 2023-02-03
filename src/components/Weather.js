import React, { useContext } from 'react'
import WeatherContext from '../context/WeatherContext'
import WeatherCard from './WeatherCard'

export default function Weather() {
    const {weatherData}=useContext(WeatherContext)
    return (
        <>
            <div className="row">
                <div className={`col-${window.screen.availWidth > 992 ? '2' : '6'} fw-bold d-flex align-items-center mt-3`}>
                    <div>
                        <label htmlFor="date" style={{ fontSize: ".8rem", fontWeight: "initial" }}>Select Date:</label>
                        <input type="date" name="date" id="" className='mb-2' style={{ background: "lightgrey", width: "8.5rem", borderRadius: '5px', padding: ".3rem .5rem" }} />
                        <p>High Temperature</p>
                        <p>Low Temperature</p>
                        <p>Humidity</p>
                        <p>Sunrise Time</p>
                        <p>Sunset Time</p>
                    </div>
                </div>
                <div className={`col-${window.screen.availWidth > 992 ? '10' : '6'} cards`}>
                    {(weatherData.list ? weatherData.list: []).map((ele, index) => {
                        return <div key={index} >
                            <WeatherCard data={ele} sunrise={weatherData ? weatherData.city.sunrise : ''} sunset={weatherData ? weatherData.city.sunset : ''} />
                        </div>
                    })
                    }
                </div>
            </div>
        </>
    )
}
