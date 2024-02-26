import './style.css';
import { getWeather, createCard } from './model/weather';


const apiKey = "";

const searchBox = document.querySelector("#location");
const searchButton = document.querySelector("#search");

searchButton.addEventListener("click",function(event){
    console.log("button clicked");
    let weather = getWeather(searchBox.value);
    console.log(weather);
    createCard(weather);


});

console.log("test");