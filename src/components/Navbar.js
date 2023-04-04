import React from 'react'
import logo from '../images/logo.png'
import refresh from '../images/refresh.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark py-1" style={{background:'rgba(0, 0, 0, 0.49)'}}>
                <div className="container-fluid">
                    <img src={logo} alt="" height={30} style={{marginLeft:"calc(-1rem + 6vw)"}}/>
                    <Link className="navbar-brand me-auto ms-2" to="/" style={{fontSize:'1.4rem'}}><b>Weather 99</b></Link>
                    <button className={`d-flex ${window.screen.availWidth<576?'flex-column':''}`} style={{background:'none',color:"white",border:"none",marginRight:`${window.screen.width>768?'15vw':'0'}`}} onClick={()=>{window.location.reload()}}><img src={refresh} alt="" width={22} className='mx-auto'/>&nbsp; <span style={{fontSize:"calc(.8rem + .2vw)",marginTop:`${window.screen.availWidth<576?'-1.6rem':''}`,fontFamily:"Quicksand"}}>Refresh</span></button>
                </div>
            </nav>
        </>
    )
}
