import React, { useContext,useState } from 'react'
import '../App.css'
import search from '../images/search.png'
import location from '../images/location.png'
import WeatherContext from '../context/WeatherContext'
import Weather from '../views/Weather'

export default function Home() {
    const { lat, lon, city, state, findLatLon,currentLocation} = useContext(WeatherContext);
    const [searchQuery, setSearchQuery] = useState('');

    const handleOnChange = (e) => {
        setSearchQuery(e.target.value);
    }
    
    const handleSearch = async () => {
        findLatLon(searchQuery);
    }

    return (
        <>
            <div className={`${window.screen.availWidth > 576 ? 'container' : 'mx-4'}`} style={{ marginTop: 'calc(2rem + 1.5vw)' }}>
                <div className="row">
                    <div className="col-lg-9">
                        <p style={{ fontSize: "1.2rem", fontWeight: "700", color: 'rgba(29, 37, 64, 1)', marginBottom: ".2rem", marginTop: 'calc(1.5rem - 2vw)' }}><button className='locationbtn' style={{cursor:'pointer',outline:'none',border:'none',background:'transparent'}} onClick={()=>{currentLocation()}}><img src={location} style={{ width: '1.5rem' }} alt=''/></button><span> {city}    , {state}</span></p>
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

                <Weather/>
            </div>
        </>
    )
}