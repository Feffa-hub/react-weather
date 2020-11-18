import React from "react";


export default function WeatherUpdates(props){
return (
    <div>
      <div className="data-wrapper">
      <ul className="first-block">
       <li>
          <img src={props.data.icon} alt="" />
        </li>
      <span><li><h3>{props.data.name}</h3></li>
      <li>{props.data.temperature} °C</li></span>
      <li>{props.data.description}</li>
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
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Wind</h5>
        <p className="card-text">{props.data.wind} %</p>
      </div>
    </div>
  </div>
</div>
</div>


);
}