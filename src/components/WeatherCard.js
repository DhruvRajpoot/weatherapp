import React from 'react'
import sun from '../images/sun.png'

export default function WeatherCard() {
    return (
        <>
            <div style={{ display: "inline-block",minWidth:"10rem"}}>
                <p style={{textAlign:"center",color:"#202020",fontWeight:'bold',marginBottom:'5px',fontSize:"1.1rem"}}>20 Jan 2023</p>
                <div style={{ background: 'linear-gradient(180deg, rgba(77,83,89,1) 37%, rgba(21,25,43,1) 100%)', color: 'white', padding: ".6rem 1.7rem", borderRadius: "5px", letterSpacing: ".8px", textAlign: 'center', fontSize: ".9rem" }}>
                    <p className='mb-2'><img src={sun} alt="" width={30} /><span style={{ fontWeight: '600', marginLeft: ".8rem", fontSize: '1rem' }}>Sunny</span></p>
                    <hr className='mt-0 mb-2' />
                    <p>23°C/63°F</p>
                    <p>23°C/63°F</p>
                    <p>76%</p>
                    <p>06:21 AM</p>
                    <p>05:93 PM</p>
                </div>
            </div>
        </>
    )
}
