import './style.css';
import './reset.css';


import { getWeather, createCard } from './model/weather';

const searchBox = document.querySelector("#location");
const searchButton = document.querySelector("#search");

searchButton.addEventListener("click",function(event){
    console.log("button clicked");
    getWeather(searchBox.value).then(function(weather){
        console.log(weather);
        createCard(weather)
    });
});

console.log("test");