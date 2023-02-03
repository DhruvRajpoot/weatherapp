import React from 'react'
import imgBaseUrl from '../images/ImgBaseUrl'

export default function WeatherCard(props) {
    const data=props.data;
    const {main,icon}=data?data.weather[0]:''
    const {temp_max,temp_min,humidity}=data?data.main:""
    const date=new Date(data?data.dt*1000:'')
    const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const tempInF=(temp)=>{return  Math.ceil(((temp-273.15)*1.8)+32)}
    const tempInC=(temp)=>{return  Math.ceil(temp-273.15)}
    const sunriseDate=new Date(props.sunrise*1000)
    const sunsetDate=new Date(props.sunset*1000)
    const imageUrl=`${imgBaseUrl+icon}.png`;

    return (
        <>
            <div style={{ display: "inline-block",minWidth:"calc(8rem + 1.5vw)"}}>
                <p style={{textAlign:"center",color:"#202020",fontWeight:'700',marginBottom:'5px',fontSize:"1.1rem"}}>{date.getDate()} {months[date.getMonth()]} {date.getFullYear()}</p>
                <div style={{ background: 'linear-gradient(180deg, rgba(70, 70, 70, 1) 10%, rgba(29, 37, 64, 1) 100%)', color: 'white', padding: ".6rem .8rem", borderRadius: "5px", letterSpacing: ".8px", textAlign: 'center', fontSize: ".9rem",boxShadow:'2px 2px 4px 0 rgba(0, 0, 0, 0.15)' }}>
                    <p className='mb-1 d-flex align-items-center justify-content-center'><img src={imageUrl} alt="" height={45} /><span style={{ fontWeight: '600', marginLeft: ".1rem", fontSize: '1rem'}}>{main}</span></p>
                    <hr className='mt-0 mb-2' />
                    <p>{tempInC(temp_max)}°C / {tempInF(temp_max)}°F</p>
                    <p>{tempInC(temp_min)}°C / {tempInF(temp_min)}°F</p>
                    <p>{humidity}</p>
                    <p>0{sunriseDate.getHours()}:{sunriseDate.getMinutes()>9?'':'0'}{sunriseDate.getMinutes()} AM</p>
                    <p>0{sunsetDate.getHours()-12}:{sunsetDate.getMinutes()>9?'':'0'}{sunsetDate.getMinutes()} PM</p>
                </div>
            </div>
        </>
    )
}
