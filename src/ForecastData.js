import React from "react"; 
import WeatherAnimated from "./WeatherAnimated"; 

export default function ForecastData(props){

 function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
 }

 function temperature() {
    let temperature = Math.round(props.data.main.temp_max);

    return `${temperature}°C`;
  }



return(

<div className="forecast-data col-3">
<h5>{hours()}</h5>
<div class="icon">
<WeatherAnimated code={props.data.weather[0].icon}/></div>
<h6 class="card-text-forecast">{temperature()}</h6>
</div>


);
}