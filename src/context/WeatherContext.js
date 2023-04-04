import axios from "axios";
import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext()
export default WeatherContext;

export const WeatherProvider = ({ children }) => {
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [city, setCity] = useState('Jhansi')
    const [state, setState] = useState('Uttar Pradesh')
    const [weatherData, setWeatherData] = useState({})

    const findLatLon = async (city) => {
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
        await axios.get(url).then((response) => {
            if (response.data.length !== 0) {
                setLat(response.data[0].lat);
                setLon(response.data[0].lon);
                setCity(response.data[0].name);
                setState(response.data[0].state);
            }
            else {
                alert('City not found, Try to search with correct name')
            }
        })
    }

    const currentLocation = () => {
        navigator.geolocation.getCurrentPosition((success) => {
            let { latitude, longitude } = success.coords;
            reverseGeoCode(latitude, longitude);
        }, (err) => {
            findLatLon(city);
        })
    }

    const findWeather = async () => {
        let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
        await axios.get(url).then((response) => {
            setWeatherData(response.data)
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const reverseGeoCode = async (latitude, longitude) => {
        let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        await axios.get(url).then((response) => {
            setCity(response.data.city)
            setState(response.data.principalSubdivision)
            setLat(response.data.latitude);
            setLon(response.data.longitude);
        }).catch((err) => {
            console.log(err.message)
        })
    }

    const [startDate, setStartDate] = useState('')

    // eslint-disable-next-line
    const historyData = async () => {
        // let url=`https://history.openweathermap.org/data/2.5/history/city?lat=${lat}&lon=${lon}&type=hour&start=${startDate}&cnt={cnt}&appid=${process.env.REACT_APP_API_KEY_2}`
        // await axios.get(url).then((response)=>{
        //     // setWeatherData(response)
        //     console.log(response)
        // }).catch((err)=>{
        //     console.log(err)
        // })
    }

    useEffect(() => {
        currentLocation();
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        findWeather()
        // eslint-disable-next-line
    }, [lat, lon])

    // useEffect(() => {
    //     historyData();
    // }, [startDate])

    return (
        <WeatherContext.Provider value={{ lat, lon, city, state, currentLocation, findLatLon, findWeather, weatherData, startDate, setStartDate }}>
            {children}
        </WeatherContext.Provider>
    )
}