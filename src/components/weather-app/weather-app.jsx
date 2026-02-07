import { createContext, useState } from "react";
import { WeatherDetails } from "./weather-details";

export let CityContext = createContext(null);

export function WeatherApp(){


    const [cityName, setCityName]= useState('');
    const [city, setCity] = useState('');
    const [toggleDetails, setToggleDetails] = useState('d-none');
    
    function handleCityChange(e){
        setCityName(e.target.value);
    }

    function handleSearchClick(){
        setCity(cityName);
        setToggleDetails('d-block');
    }

    return(
        <div className="container-fluid bg-secondary d-flex justify-content-center align-items-center" style={{height:'100vh'}}>
            <div className="p-4 bg-light w-50 rounded rounded-2" style={{height:'400px'}}>
                <div>
                    <h3 className="text-center bi bi-cloud-rain"> Weather App</h3>
                    <div className="input-group">
                        <input onChange={handleCityChange} type="text" className="form-control" placeholder="Your city name" />
                        <button onClick={handleSearchClick} className="btn btn-warning bi bi-search"></button>
                    </div>
                    <div className={`mt-4 ${toggleDetails}`}>
                        <CityContext value={city}>
                            <WeatherDetails />
                        </CityContext>
                    </div>
                </div>
            </div>
        </div>
    )
}