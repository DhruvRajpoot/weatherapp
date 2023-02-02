import { createContext, useContext, useEffect, useState } from "react";

const WeatherContext = createContext()
export default WeatherContext;

export const WeatherProvider = ({ children }) => {
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [city, setCity] = useState('Bhopal')
    const [state, setState] = useState('Madhya Pradesh')
    const [weatherData, setWeatherData] = useState(
        {
            "cod": "200",
            "message": 0,
            "cnt": 40,
            "list": [
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
                    "dt": 1675382400,
                    "main": {
                        "temp": 286,
                        "feels_like": 284.31,
                        "temp_min": 285.01,
                        "temp_max": 286,
                        "pressure": 1017,
                        "sea_level": 1017,
                        "grnd_level": 956,
                        "humidity": 37,
                        "temp_kf": 0.99
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
                        "all": 64
                    },
                    "wind": {
                        "speed": 2,
                        "deg": 37,
                        "gust": 2.07
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-03 00:00:00"
                },
                {
                    "dt": 1675393200,
                    "main": {
                        "temp": 287.88,
                        "feels_like": 286.27,
                        "temp_min": 287.88,
                        "temp_max": 288.57,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 958,
                        "humidity": 33,
                        "temp_kf": -0.69
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 75
                    },
                    "wind": {
                        "speed": 1.71,
                        "deg": 50,
                        "gust": 2.26
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-03 03:00:00"
                },
                {
                    "dt": 1675404000,
                    "main": {
                        "temp": 296.76,
                        "feels_like": 295.65,
                        "temp_min": 296.76,
                        "temp_max": 296.76,
                        "pressure": 1018,
                        "sea_level": 1018,
                        "grnd_level": 959,
                        "humidity": 18,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 803,
                            "main": "Clouds",
                            "description": "broken clouds",
                            "icon": "04d"
                        }
                    ],
                    "clouds": {
                        "all": 67
                    },
                    "wind": {
                        "speed": 2.28,
                        "deg": 68,
                        "gust": 2.04
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-03 06:00:00"
                },
                {
                    "dt": 1675414800,
                    "main": {
                        "temp": 300.01,
                        "feels_like": 298.95,
                        "temp_min": 300.01,
                        "temp_max": 300.01,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 956,
                        "humidity": 12,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 49
                    },
                    "wind": {
                        "speed": 1.58,
                        "deg": 26,
                        "gust": 0.99
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-03 09:00:00"
                },
                {
                    "dt": 1675425600,
                    "main": {
                        "temp": 296.85,
                        "feels_like": 295.77,
                        "temp_min": 296.85,
                        "temp_max": 296.85,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 955,
                        "humidity": 19,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 802,
                            "main": "Clouds",
                            "description": "scattered clouds",
                            "icon": "03d"
                        }
                    ],
                    "clouds": {
                        "all": 27
                    },
                    "wind": {
                        "speed": 2.44,
                        "deg": 19,
                        "gust": 2.85
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-03 12:00:00"
                },
                {
                    "dt": 1675436400,
                    "main": {
                        "temp": 291.64,
                        "feels_like": 290.15,
                        "temp_min": 291.64,
                        "temp_max": 291.64,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 956,
                        "humidity": 23,
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
                        "speed": 2.11,
                        "deg": 33,
                        "gust": 2.21
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-03 15:00:00"
                },
                {
                    "dt": 1675447200,
                    "main": {
                        "temp": 289.37,
                        "feels_like": 287.73,
                        "temp_min": 289.37,
                        "temp_max": 289.37,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 955,
                        "humidity": 26,
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
                        "speed": 1.71,
                        "deg": 12,
                        "gust": 1.75
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-03 18:00:00"
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
                    "dt": 1675468800,
                    "main": {
                        "temp": 286.51,
                        "feels_like": 284.79,
                        "temp_min": 286.51,
                        "temp_max": 286.51,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 954,
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
                        "speed": 1.87,
                        "deg": 46,
                        "gust": 1.89
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-04 00:00:00"
                },
                {
                    "dt": 1675479600,
                    "main": {
                        "temp": 289.8,
                        "feels_like": 288.33,
                        "temp_min": 289.8,
                        "temp_max": 289.8,
                        "pressure": 1016,
                        "sea_level": 1016,
                        "grnd_level": 956,
                        "humidity": 31,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 3
                    },
                    "wind": {
                        "speed": 1.71,
                        "deg": 52,
                        "gust": 2.24
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-04 03:00:00"
                },
                {
                    "dt": 1675490400,
                    "main": {
                        "temp": 298.02,
                        "feels_like": 297.06,
                        "temp_min": 298.02,
                        "temp_max": 298.02,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 957,
                        "humidity": 19,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 1
                    },
                    "wind": {
                        "speed": 1.65,
                        "deg": 29,
                        "gust": 1.54
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-04 06:00:00"
                },
                {
                    "dt": 1675501200,
                    "main": {
                        "temp": 300.47,
                        "feels_like": 299.29,
                        "temp_min": 300.47,
                        "temp_max": 300.47,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 954,
                        "humidity": 13,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.41,
                        "deg": 341,
                        "gust": 2.4
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-04 09:00:00"
                },
                {
                    "dt": 1675512000,
                    "main": {
                        "temp": 297.57,
                        "feels_like": 296.54,
                        "temp_min": 297.57,
                        "temp_max": 297.57,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 953,
                        "humidity": 18,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.21,
                        "deg": 356,
                        "gust": 2.87
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-04 12:00:00"
                },
                {
                    "dt": 1675522800,
                    "main": {
                        "temp": 292.02,
                        "feels_like": 290.51,
                        "temp_min": 292.02,
                        "temp_max": 292.02,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 954,
                        "humidity": 21,
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
                        "all": 1
                    },
                    "wind": {
                        "speed": 1.97,
                        "deg": 346,
                        "gust": 2.02
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-04 15:00:00"
                },
                {
                    "dt": 1675533600,
                    "main": {
                        "temp": 289.94,
                        "feels_like": 288.35,
                        "temp_min": 289.94,
                        "temp_max": 289.94,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 953,
                        "humidity": 26,
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
                        "speed": 2.45,
                        "deg": 8,
                        "gust": 2.58
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-04 18:00:00"
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
                    "dt": 1675555200,
                    "main": {
                        "temp": 287.53,
                        "feels_like": 285.89,
                        "temp_min": 287.53,
                        "temp_max": 287.53,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 952,
                        "humidity": 33,
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
                        "speed": 1.65,
                        "deg": 38,
                        "gust": 1.65
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-05 00:00:00"
                },
                {
                    "dt": 1675566000,
                    "main": {
                        "temp": 291.07,
                        "feels_like": 289.7,
                        "temp_min": 291.07,
                        "temp_max": 291.07,
                        "pressure": 1015,
                        "sea_level": 1015,
                        "grnd_level": 955,
                        "humidity": 30,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 1.39,
                        "deg": 77,
                        "gust": 1.69
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-05 03:00:00"
                },
                {
                    "dt": 1675576800,
                    "main": {
                        "temp": 298.91,
                        "feels_like": 298.01,
                        "temp_min": 298.91,
                        "temp_max": 298.91,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 955,
                        "humidity": 18,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 1.57,
                        "deg": 48,
                        "gust": 1.34
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-05 06:00:00"
                },
                {
                    "dt": 1675587600,
                    "main": {
                        "temp": 301.26,
                        "feels_like": 299.88,
                        "temp_min": 301.26,
                        "temp_max": 301.26,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 953,
                        "humidity": 15,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.08,
                        "deg": 338,
                        "gust": 2.32
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-05 09:00:00"
                },
                {
                    "dt": 1675598400,
                    "main": {
                        "temp": 298.6,
                        "feels_like": 297.78,
                        "temp_min": 298.6,
                        "temp_max": 298.6,
                        "pressure": 1010,
                        "sea_level": 1010,
                        "grnd_level": 952,
                        "humidity": 22,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 1
                    },
                    "wind": {
                        "speed": 1.62,
                        "deg": 356,
                        "gust": 2.02
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-05 12:00:00"
                },
                {
                    "dt": 1675609200,
                    "main": {
                        "temp": 293.2,
                        "feels_like": 291.97,
                        "temp_min": 293.2,
                        "temp_max": 293.2,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 954,
                        "humidity": 27,
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
                        "speed": 1.79,
                        "deg": 7,
                        "gust": 1.84
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-05 15:00:00"
                },
                {
                    "dt": 1675620000,
                    "main": {
                        "temp": 291.54,
                        "feels_like": 290.22,
                        "temp_min": 291.54,
                        "temp_max": 291.54,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 953,
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
                        "speed": 1.92,
                        "deg": 30,
                        "gust": 2.04
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-05 18:00:00"
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
                    "dt": 1675641600,
                    "main": {
                        "temp": 288.89,
                        "feels_like": 287.46,
                        "temp_min": 288.89,
                        "temp_max": 288.89,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 952,
                        "humidity": 36,
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
                        "speed": 1.43,
                        "deg": 112,
                        "gust": 1.44
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-06 00:00:00"
                },
                {
                    "dt": 1675652400,
                    "main": {
                        "temp": 292.46,
                        "feels_like": 291.26,
                        "temp_min": 292.46,
                        "temp_max": 292.46,
                        "pressure": 1014,
                        "sea_level": 1014,
                        "grnd_level": 954,
                        "humidity": 31,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 1.32,
                        "deg": 138,
                        "gust": 1.67
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-06 03:00:00"
                },
                {
                    "dt": 1675663200,
                    "main": {
                        "temp": 300.13,
                        "feels_like": 299.2,
                        "temp_min": 300.13,
                        "temp_max": 300.13,
                        "pressure": 1013,
                        "sea_level": 1013,
                        "grnd_level": 955,
                        "humidity": 19,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.52,
                        "deg": 231,
                        "gust": 3.25
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-06 06:00:00"
                },
                {
                    "dt": 1675674000,
                    "main": {
                        "temp": 302.94,
                        "feels_like": 301.13,
                        "temp_min": 302.94,
                        "temp_max": 302.94,
                        "pressure": 1009,
                        "sea_level": 1009,
                        "grnd_level": 952,
                        "humidity": 15,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 4.09,
                        "deg": 269,
                        "gust": 5.45
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-06 09:00:00"
                },
                {
                    "dt": 1675684800,
                    "main": {
                        "temp": 299.84,
                        "feels_like": 299.05,
                        "temp_min": 299.84,
                        "temp_max": 299.84,
                        "pressure": 1009,
                        "sea_level": 1009,
                        "grnd_level": 951,
                        "humidity": 20,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.14,
                        "deg": 284,
                        "gust": 5.21
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-06 12:00:00"
                },
                {
                    "dt": 1675695600,
                    "main": {
                        "temp": 294.51,
                        "feels_like": 293.46,
                        "temp_min": 294.51,
                        "temp_max": 294.51,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 952,
                        "humidity": 29,
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
                        "speed": 2.84,
                        "deg": 277,
                        "gust": 3.52
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-06 15:00:00"
                },
                {
                    "dt": 1675706400,
                    "main": {
                        "temp": 292.18,
                        "feels_like": 291.1,
                        "temp_min": 292.18,
                        "temp_max": 292.18,
                        "pressure": 1011,
                        "sea_level": 1011,
                        "grnd_level": 951,
                        "humidity": 37,
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
                        "all": 1
                    },
                    "wind": {
                        "speed": 3.34,
                        "deg": 299,
                        "gust": 5.24
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-06 18:00:00"
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
                    "dt": 1675728000,
                    "main": {
                        "temp": 289.43,
                        "feels_like": 288.29,
                        "temp_min": 289.43,
                        "temp_max": 289.43,
                        "pressure": 1010,
                        "sea_level": 1010,
                        "grnd_level": 950,
                        "humidity": 45,
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
                        "speed": 2.18,
                        "deg": 296,
                        "gust": 2.44
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-07 00:00:00"
                },
                {
                    "dt": 1675738800,
                    "main": {
                        "temp": 292.27,
                        "feels_like": 291.28,
                        "temp_min": 292.27,
                        "temp_max": 292.27,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 953,
                        "humidity": 40,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 1.94,
                        "deg": 342,
                        "gust": 2.84
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-07 03:00:00"
                },
                {
                    "dt": 1675749600,
                    "main": {
                        "temp": 299.87,
                        "feels_like": 299.16,
                        "temp_min": 299.87,
                        "temp_max": 299.87,
                        "pressure": 1012,
                        "sea_level": 1012,
                        "grnd_level": 954,
                        "humidity": 23,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 2.67,
                        "deg": 359,
                        "gust": 2.74
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-07 06:00:00"
                },
                {
                    "dt": 1675760400,
                    "main": {
                        "temp": 302.32,
                        "feels_like": 300.69,
                        "temp_min": 302.32,
                        "temp_max": 302.32,
                        "pressure": 1009,
                        "sea_level": 1009,
                        "grnd_level": 951,
                        "humidity": 18,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.66,
                        "deg": 311,
                        "gust": 4.35
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-07 09:00:00"
                },
                {
                    "dt": 1675771200,
                    "main": {
                        "temp": 299.52,
                        "feels_like": 299.52,
                        "temp_min": 299.52,
                        "temp_max": 299.52,
                        "pressure": 1009,
                        "sea_level": 1009,
                        "grnd_level": 951,
                        "humidity": 23,
                        "temp_kf": 0
                    },
                    "weather": [
                        {
                            "id": 800,
                            "main": "Clear",
                            "description": "clear sky",
                            "icon": "01d"
                        }
                    ],
                    "clouds": {
                        "all": 0
                    },
                    "wind": {
                        "speed": 3.51,
                        "deg": 327,
                        "gust": 5.48
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "d"
                    },
                    "dt_txt": "2023-02-07 12:00:00"
                },
                {
                    "dt": 1675782000,
                    "main": {
                        "temp": 293.4,
                        "feels_like": 292.26,
                        "temp_min": 293.4,
                        "temp_max": 293.4,
                        "pressure": 1011,
                        "sea_level": 1011,
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
                        "all": 3
                    },
                    "wind": {
                        "speed": 3.43,
                        "deg": 349,
                        "gust": 5.14
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-07 15:00:00"
                },
                {
                    "dt": 1675792800,
                    "main": {
                        "temp": 291.87,
                        "feels_like": 290.69,
                        "temp_min": 291.87,
                        "temp_max": 291.87,
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
                        "all": 2
                    },
                    "wind": {
                        "speed": 2.4,
                        "deg": 8,
                        "gust": 2.6
                    },
                    "visibility": 10000,
                    "pop": 0,
                    "sys": {
                        "pod": "n"
                    },
                    "dt_txt": "2023-02-07 18:00:00"
                }
            ],
            "city": {
                "id": 1275841,
                "name": "Bhopal",
                "coord": {
                    "lat": 23.2585,
                    "lon": 77.402
                },
                "country": "IN",
                "population": 1599914,
                "timezone": 19800,
                "sunrise": 1675387794,
                "sunset": 1675427900
            }
        })

    const findLatLon = async (city) => {
        console.log('findlatlon')
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json()
        setLat(data[0].lat);
        setLon(data[0].lon);
        setCity(data[0].name)
        setState(data[0].state)
    }

    const findWeather = async () => {
        console.log('findweather');
        let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`
        const response = await fetch(url);
        const data = await response.json()
        console.log(data)
        setWeatherData(data)
    }

    // useEffect(()=>{
    //     findWeather()
    // },[lat])

    // useEffect(()=>{
    //     findLatLon(city)
    // },[])

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