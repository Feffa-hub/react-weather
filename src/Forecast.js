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

    <ForecastData info={forecast.list[0]}/>
    <ForecastData info={forecast.list[1]}/>
    <ForecastData info={forecast.list[2]}/>
    <ForecastData info={forecast.list[3]}/>

    </div>
);
}else{


let url= `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=e6856ff2f5d9372cd1a6c88b5d4e00fa&units=metric`;
axios.get(url).then(displayForecast); 
return null; 
}
}

 