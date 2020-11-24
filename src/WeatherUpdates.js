import React from "react";
import WeatherAnimated from "./WeatherAnimated"; 
import CurrentTemperature from "./CurrentTemperature"; 
import Forecast from "./Forecast"; 
import FormattedDate from "./FormattedDate"; 
import "./WeatherUpdates.css"; 


export default function WeatherUpdates(props){
return (
    <div>
      <div className="data-wrapper">
      <ul className="first-block">
       <li>
       <WeatherAnimated code={props.data.icon}/>
        </li>
      <li><h4>{props.data.name}</h4></li>
      <li>{props.data.description}</li>
      <li className="temp">
        <CurrentTemperature celsius={props.data.temperature}/>
        </li>
      
      </ul>
      </div>
      <div className="row">

  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Humidity</h5>
        <p className="card-text">{props.data.humidity} %</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6" >
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Wind</h5>
        <p className="card-text">{props.data.wind} %</p>
      </div>
    </div>
  </div>
</div>
<div className="current-date">
  <h5>Last update:</h5>
  <FormattedDate date={props.data.date}/>
  </div>
<div class="forecast-temperature">
<Forecast city={props.data.name}/>
</div>
</div>

);
}