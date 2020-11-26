import React from "react"; 
import WeatherAnimated from "./WeatherAnimated"; 

export default function ForecastData(props){

 function hours() {
    let date = new Date(props.info.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
 }

 function temperature() {
    let temperature = Math.round(props.info.main.temp);

    return `${temperature} °C`;
  }



return(

<div className="forecast-data col-3">
<h5 className="card-hour-forecast">{hours()}</h5>
<div class="icon">
<WeatherAnimated code={props.info.weather[0].icon}/></div>
<h6 class="card-text-forecast">{temperature()}</h6>
</div>


);
}