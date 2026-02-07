import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { CityContext } from "./weather-app"; 

export function WeatherDetails(){

    const [weatherObj, setWeatherObj] = useState({weather:[{description:null}], main:{temp:0}, name:null});

    let context = useContext(CityContext);

    function LoadWeatherData(){
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${context}&appid=1318ca6725c69160d346c41fc0612596&units=metric`)
        .then(response=>{
            setWeatherObj(response.data);
        })
    }

    useEffect(()=>{
        LoadWeatherData();
    },[context])

    return(
        <div className="bg-light shadow shadow-lg p-3">
            <h3>{weatherObj.name}</h3>
            <div className="fs-1 fw-bold">
                {weatherObj.main.temp}&deg;C
            </div>
            <div>
                {weatherObj.weather[0].description}
            </div>
        </div>
    )
}