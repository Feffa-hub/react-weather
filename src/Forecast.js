import React, {useState} from "react"; 
import axios from "axios"; 
import "./Forecast.css";
import WeatherAnimated from "./WeatherAnimated"; 




export default function Forecast(props){
const[check,setCheck]= useState(false); 
const[forecast,setForecast]= useState(null); 

function displayForecast(response){
setForecast(response.data);
setCheck(true); 


}

if(check && props.city === forecast.city.name){

return (

    <div className="forecast-temperature row">
    
        <div className="col">
          {new Date(forecast.list[0].dt * 1000).getHours()}:00
          <WeatherAnimated code={forecast.list[0].weather[0].icon} />
          <p>{Math.round(forecast.list[0].main.temp)} °C</p>
        </div>
        <div className="col">
          {new Date(forecast.list[1].dt * 1000).getHours()}:00
          <WeatherAnimated code={forecast.list[1].weather[0].icon} />
          <p>{Math.round(forecast.list[1].main.temp)} °C</p>
        </div>
        <div className="col">
          {new Date(forecast.list[2].dt * 1000).getHours()}:00
          <WeatherAnimated code={forecast.list[2].weather[0].icon} />
          <p>{Math.round(forecast.list[2].main.temp)} °C</p>
        </div>
        <div className="col">
          {new Date(forecast.list[3].dt * 1000).getHours()}:00
          <WeatherAnimated code={forecast.list[3].weather[0].icon} />
          <p>{Math.round(forecast.list[3].main.temp)} °C</p>
          </div>
          <div className="col">
          {new Date(forecast.list[4].dt * 1000).getHours()}:00
          <WeatherAnimated code={forecast.list[4].weather[0].icon} />
          <p>{Math.round(forecast.list[4].main.temp)} °C</p>
          </div>
        </div>


);
}else{


let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=e6856ff2f5d9372cd1a6c88b5d4e00fa&units=metric`;
axios.get(url).then(displayForecast); 
return null; 
}
}

 