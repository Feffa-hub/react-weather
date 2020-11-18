import React, { useState } from "react"; 
import WeatherUpdates from "./WeatherUpdates"; 
import axios from "axios";
import "./Search.css";
 

export default function Search() {
  
  const [data, setData] = useState({});
  const [city, setCity] = useState("");
  

  function currentWeather(response) {
    setData({
       
      name:response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      
      
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
      <form
      className="search-form"
      onSubmit={getInput}>
        <input
          className="input-bar"
          type="text"
          placeholder="Type a city"
          onChange={updateQuery}
        />
      <input type="submit" value="Go" className="button-search"/>
      </form>
      <WeatherUpdates data={data}/>
      </div>
  );

}
