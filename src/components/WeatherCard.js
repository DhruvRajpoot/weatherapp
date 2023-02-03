import React, { useEffect, useState } from 'react'
import sunny from '../images/sun.png'
import cloudy from '../images/cloud.png'
import windy from '../images/wind.png'
import snowy from '../images/snow.png'
import rainy from '../images/rain.png'

export default function WeatherCard(props) {
    const data=props.data;
    const {main}=data?data.weather[0]:''
    const {temp_max,temp_min,humidity}=data?data.main:""
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const tempInF=(temp)=>{return  Math.ceil(((temp-273.15)*1.8)+32)}
    const tempInC=(temp)=>{return  Math.ceil(temp-273.15)}
    const date=new Date(data?data.dt*1000:'')
    const sunriseDate=new Date(props.sunrise*1000)
    const sunsetDate=new Date(props.sunset*1000)
    const risehours=sunriseDate.getHours()
    const risemins=sunriseDate.getMinutes()
    const sethours=sunsetDate.getHours()
    const setmins=sunsetDate.getMinutes()
    const [imageUrl,setImageUrl]=useState('')
    const [weather,setWeather]=useState('')

    useEffect(()=>{
        if(main==='Clear'){
            setImageUrl(sunny);
            setWeather('Sunny');
        }
        else if(main==='Clouds'){
            setImageUrl(cloudy);
            setWeather('Cloudy');
        }
        else if(main==='Rain'){
            setImageUrl(rainy);
            setWeather('Rainy');
        }
        else if(main==='Snow'){
            setImageUrl(snowy);
            setWeather('Snowy');
        }
        if((data?data.wind.speed:0)>11){
            setImageUrl(windy);
            setWeather('Windy');
        }
    },[data])

    return (
        <>
            <div style={{ display: "inline-block",minWidth:"calc(8rem + 1.5vw)"}}>
                <p style={{textAlign:"center",color:"#202020",fontWeight:'700',marginBottom:'5px',fontSize:"1.1rem"}}>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
                <div style={{ background: 'linear-gradient(180deg, rgba(70, 70, 70, 1) 10%, rgba(29, 37, 64, 1) 100%)', color: 'white', padding: ".6rem .8rem", borderRadius: "5px", letterSpacing: ".8px", textAlign: 'center', fontSize: ".9rem",boxShadow:'2px 2px 4px 0 rgba(0, 0, 0, 0.15)' }}>
                    <p className='mb-1 d-flex align-items-center justify-content-center'><img src={imageUrl} alt="" height={35} /><span style={{ fontWeight: '600', marginLeft: ".3rem", fontSize: '1rem'}}>{weather}</span></p>
                    <hr className='mt-3  mb-2' />
                    <p>{tempInC(temp_max)}°C / {tempInF(temp_max)}°F</p>
                    <p>{tempInC(temp_min)}°C / {tempInF(temp_min)}°F</p>
                    <p>{humidity}</p>
                    <p>{risehours%12>9?risehours%12:`0${risehours%12}`}:{risemins>9?risemins:`0${risemins}`} {risehours<12?'AM':'PM'}</p>
                    <p>{sethours%12>9?sethours%12:`0${sethours%12}`}:{setmins>9?setmins:`0${setmins}`} {sethours<12?'AM':'PM'}</p>
                </div>
            </div>
        </>
    )
}
