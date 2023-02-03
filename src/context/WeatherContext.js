import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext()
export default WeatherContext;

export const WeatherProvider = ({ children }) => {
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [city, setCity] = useState('Bhopal')
    const [state, setState] = useState('Madhya Pradesh')
    const [weatherData,setWeatherData]=useState({})

    const findLatLon = async (city) => {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json()
        setLat(data[0].lat);
        setLon(data[0].lon);
        setCity(data[0].name)
        setState(data[0].state)
    }

    const findWeather = async () => {
        let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        setWeatherData(data)
    }

    useEffect(()=>{
        findWeather()
    },[lat])

    useEffect(()=>{
        findLatLon(city)
    },[])

    const reverseGeoCode=async(latitude,longitude)=>{
        let url=`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        const response = await fetch(url);
        const data=await response.json()
        setCity(data.city)
        setState(data.principalSubdivision)
        setLat(latitude);
        setLon(longitude);
    }

    useEffect(() => {
        console.log(weatherData);
        navigator.geolocation.getCurrentPosition((success) => {
            let { latitude, longitude } = success.coords;
            reverseGeoCode(latitude,longitude)
        }, (err) => {
            // findLatLon(city)
        })
    }, [])

    return (
        <WeatherContext.Provider value={{ lat, lon, city, state, findLatLon, findWeather, weatherData }}>
            {children}
        </WeatherContext.Provider>
    )
}