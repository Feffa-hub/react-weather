import React from "react";
import WeatherAnimated from "./WeatherAnimated"; 
import CurrentTemperature from "./CurrentTemperature"; 
import Forecast from "./Forecast"; 
import FormattedDate from "./FormattedDate"; 
import { BsFillDropletFill} from "react-icons/bs";
import { FaWind } from "react-icons/fa"; 
import "./WeatherUpdates.css"; 


export default function WeatherUpdates(props){
return (
    <div>
      <div className="data-wrapper">
      <ul className="first-block">
       <li>
       <WeatherAnimated code={props.data.icon}/>
        </li>
      <li className="name">{props.data.name}</li>
      <li className="description">{props.data.description}</li>
      <li className="temp">
        <CurrentTemperature celsius={props.data.temperature}/>
        </li>
      
      </ul>
      </div>
      <div className="hum-wind row">
  <div className="col-6">
    <div className="divider-hum">
    <h5 className="hum-title">Humidity <BsFillDropletFill/></h5>
        <p className="hum-text">{Math.round(props.data.humidity)} %</p>
  </div>
  </div>
  <div className="col-6" >
  <div className="divider-wind">
        <h5 className="wind-title">Wind <FaWind/></h5>
        <p className="wind-text">{Math.round(props.data.wind)} km/h</p>
  </div>
  </div>
</div>
<div className="current-date">
  <FormattedDate date={props.data.date}/>
  </div>
<div class="forecast-temperature">
<Forecast city={props.data.name}/>
</div>
</div>

);
}