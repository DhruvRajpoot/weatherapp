import {createContext, useContext } from "react";

const WeatherContext = createContext()
export default WeatherContext;
 
export const WeatherProvider=({children})=>{
    
    return(
        <WeatherContext.Provider value={{}}>
            {children}
        </WeatherContext.Provider>
    )
}