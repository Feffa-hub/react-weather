import React, {useState} from "react"; 
import ForecastData from "./ForecastData";
import axios from "axios"; 
import "./Forecast.css";




export default function Forecast(props){
const[check,setCheck]= useState(false); 
const[forecast,setForecast]= useState(null); 

function displayForecast(response){
setForecast(response.data);
setCheck(true); 


}

if(check){

return (

    <div className="forecast-temperature row">

    <ForecastData data={forecast.list[0]}/>
    <ForecastData data={forecast.list[1]}/>
    <ForecastData data={forecast.list[2]}/>
    <ForecastData data={forecast.list[3]}/>
    <ForecastData data={forecast.list[4]}/>
    <ForecastData data={forecast.list[5]}/>
    </div>
);
}else{


let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=e6856ff2f5d9372cd1a6c88b5d4e00fa&units=metric`;
axios.get(url).then(displayForecast); 
return null; 
}
}

 