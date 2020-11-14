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
      <form onSubmit={getInput}>
        <input
          type="search"
          placeholder="Type a city"
          autoFocus={true}
          onChange={updateQuery}
        />
        <input type="submit" value="Search" />
      </form>
      <div className="data-wrapper">
      <div className="row">
      <div className="col-6">
      <ul className="first-block">
      <h3>{data.name}</h3>
      <li>{data.temperature} °C</li>
      <li>{data.description}</li>
      </ul>
      </div>
        <div className="col-6">
        <ul className="second-block">
          <li>
          <img src={data.icon} alt="" />
        </li>
        <li>humidity: {data.humidity} %</li>
        <li>wind: {data.wind} km/h</li>
      </ul>
      </div>

      </div>
      </div>
      </div>
    
  );
}
