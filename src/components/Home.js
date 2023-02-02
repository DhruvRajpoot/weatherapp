import React, { useContext, useEffect, useState } from 'react'
import '../App.css'
import WeatherCard from './WeatherCard'
import search from '../images/search.png'
import location from '../images/location.png'
import WeatherContext from '../context/WeatherContext'

export default function Home() {
    const { lat, lon, city, state, findLatLon, weatherData } = useContext(WeatherContext)
    const [searchQuery, setSearchQuery] = useState('')

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value)
    }

    const handleSearch = async () => {
        findLatLon(searchQuery);
    }

    useEffect(() => {
    }, [city])

    const [cardArray, setCardArray] = useState(
        [
            {
                "dt": 1675371600,
                "main": {
                    "temp": 286.49,
                    "feels_like": 284.79,
                    "temp_min": 286.49,
                    "temp_max": 286.49,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 956,
                    "humidity": 35,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 59
                },
                "wind": {
                    "speed": 2.13,
                    "deg": 22,
                    "gust": 2.19
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-02 21:00:00"
            },
            {
                "dt": 1675458000,
                "main": {
                    "temp": 287.86,
                    "feels_like": 286.17,
                    "temp_min": 287.86,
                    "temp_max": 287.86,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 954,
                    "humidity": 30,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.81,
                    "deg": 17,
                    "gust": 1.86
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-03 21:00:00"
            },
            {
                "dt": 1675544400,
                "main": {
                    "temp": 288.56,
                    "feels_like": 286.94,
                    "temp_min": 288.56,
                    "temp_max": 288.56,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 952,
                    "humidity": 30,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.08,
                    "deg": 25,
                    "gust": 2.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-04 21:00:00"
            },
            {
                "dt": 1675630800,
                "main": {
                    "temp": 290.02,
                    "feels_like": 288.65,
                    "temp_min": 290.02,
                    "temp_max": 290.02,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 952,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.63,
                    "deg": 69,
                    "gust": 1.67
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-05 21:00:00"
            },
            {
                "dt": 1675717200,
                "main": {
                    "temp": 290.57,
                    "feels_like": 289.44,
                    "temp_min": 290.57,
                    "temp_max": 290.57,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 950,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.02,
                    "deg": 316,
                    "gust": 3.92
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-06 21:00:00"
            },
            {
                "dt": 1675371600,
                "main": {
                    "temp": 286.49,
                    "feels_like": 284.79,
                    "temp_min": 286.49,
                    "temp_max": 286.49,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 956,
                    "humidity": 35,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 59
                },
                "wind": {
                    "speed": 2.13,
                    "deg": 22,
                    "gust": 2.19
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-02 21:00:00"
            },
            {
                "dt": 1675458000,
                "main": {
                    "temp": 287.86,
                    "feels_like": 286.17,
                    "temp_min": 287.86,
                    "temp_max": 287.86,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 954,
                    "humidity": 30,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.81,
                    "deg": 17,
                    "gust": 1.86
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-03 21:00:00"
            },
            {
                "dt": 1675544400,
                "main": {
                    "temp": 288.56,
                    "feels_like": 286.94,
                    "temp_min": 288.56,
                    "temp_max": 288.56,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 952,
                    "humidity": 30,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.08,
                    "deg": 25,
                    "gust": 2.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-04 21:00:00"
            },
            {
                "dt": 1675630800,
                "main": {
                    "temp": 290.02,
                    "feels_like": 288.65,
                    "temp_min": 290.02,
                    "temp_max": 290.02,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 952,
                    "humidity": 34,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.63,
                    "deg": 69,
                    "gust": 1.67
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-05 21:00:00"
            },
            {
                "dt": 1675717200,
                "main": {
                    "temp": 290.57,
                    "feels_like": 289.44,
                    "temp_min": 290.57,
                    "temp_max": 290.57,
                    "pressure": 1010,
                    "sea_level": 1010,
                    "grnd_level": 950,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.02,
                    "deg": 316,
                    "gust": 3.92
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-02-06 21:00:00"
            }
        ]
    )
    // const setCardArrayFunc=()=>{setCardArray([]);console.log('running')}
    // useEffect(()=>{
    //     setCardArrayFunc()
    //     for(let i=0;i<40;i=i+8){
    //         cardArray.push(weatherData.list[i])
    //     }
    // },[weatherData])

    // useEffect(()=>{
    //     setTimeout(()=>{
    //         console.log(weatherData.list)
    //         console.log(cardArray);
    //     },3000)
    // },[weatherData])

    return (
        <>
            <div className={`${window.screen.availWidth > 576 ? 'container' : 'mx-4'}`} style={{ marginTop: 'calc(2rem + 1.5vw)' }}>
                <div className="row">
                    <div className="col-lg-9">
                        <p style={{ fontSize: "1.2rem", fontWeight: "700", color: 'rgba(29, 37, 64, 1)', marginBottom: ".2rem", marginTop: 'calc(1.5rem - 2vw)' }}><img src={location} style={{ width: '1.5rem', marginRight: '.5rem' }} /><span> {city}    , {state}</span></p>
                        <p className='mb-0' style={{ color: 'rgba(96, 96, 96, 1)', fontSize: '.9rem' }}>{lat} N & {lon} E</p>
                    </div>
                    <div className="col-lg-3 order-first order-lg-last">
                        <div className="position-relative">
                            <input type="search" name="search" placeholder='Search your city here...' id='search' onChange={handleOnChange} onKeyUp={(e) => { if (e.key === 'Enter') { handleSearch() } }} />
                            <img src={search} alt="" style={{ width: 'calc(1.2rem - .2vw)', position: 'absolute', right: ".5rem", top: 'calc(1rem - .5vw)' }} className={`d-${searchQuery !== '' ? 'none' : 'block'}`} />
                        </div>
                    </div>
                </div>
                <hr style={{ border: '1px solid black', opacity: '.2' }} />

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
                        {/* {cardArray ? cardArray : '[1,1,1,1]'.map((ele, index) => {
                            return <div key={index} >
                                <WeatherCard data={ele} sunrise={weatherData.city.sunset} sunset={weatherData.city.sunset} />
                            </div>
                        })
                        } */}
                        {/* {cardArray} */}
                    </div>
                </div>
            </div>
        </>
    )
}