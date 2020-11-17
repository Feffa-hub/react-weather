import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [data, setData] = useState({});

  function currentWeather(response) {
    setData({
      name:response.data.name,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function getInput(event) {
    event.preventDefault();

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ce32b21d52f4ecd35d6b654b98f2d394&units=metric`;
    axios.get(apiUrl).then(currentWeather);
  }

  function updateQuery(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <div>
      <form
      class="search-form"
      onSubmit={getInput}>
        <input
          class="input-bar"
          type="text"
          placeholder="Type a city"
          onChange={updateQuery}
        />
        <input type="submit" value="Go!" className="btn btn-primary" />
      </form>
    </div>
      <div className="data-wrapper">
      <ul className="first-block">
       <li>
          <img src={data.icon} alt="" />
        </li>
      <span><li><h3>{data.name}</h3></li>
      <li>{data.temperature} °C</li></span>
      <li>{data.description}</li>
      </ul>
      </div>
      <div className="row">

  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Humidity</h5>
        <p className="card-text">{data.humidity} %</p>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Wind</h5>
        <p className="card-text">{data.wind} %</p>
      </div>
    </div>
  </div>
</div> 
</div>   
  );
}
