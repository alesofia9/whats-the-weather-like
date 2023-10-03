const apiKey = "1a4a7f9d8410bd3f4f6847c3a2fcf049";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

//Begins to activate check weather function. // 
async function checkWeather(city){
const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
var data = await response.json();

console.log(data);
//City name.//
document.querySelector(".city").innerHTML = data.name;
//Math.round was not generating temp properly, added the red numbers to math out the degrees properly.//
document.querySelector(".temp").innerHTML = Math.round(data.main.temp_min - 220, -2) + "°F";
//HUmidty levels.//
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
//Wind speed.//
document.querySelector(".wind").innerHTML = data.wind.speed + " mph";

//Conditions to change the weather image on current city weather.//
if (data.weather[0].main =="Cloudy"){
    weatherIcon.src = "Images.cloudy.png";
} else if (data.weather [0].main == "Hail"){
    weatherIcon.src = "Images/hail.png";
}else if (data.weather [0].main == "Rain"){
    weatherIcon.src = "Images/rain.png";
 }else if (data.weather [0].main == "Sunny"){
    weatherIcon.src = "Images/sunny.png";
 }else if (data.weather [0].main == "Snow"){
    weatherIcon.src = "Images/snow.png";
 }else if (data.weather [0].main == "Thunderstorm"){
    weatherIcon.src = "Images/thunderstorm.png";
 }

}
// Activates search click icon to generate city temperature on screen.// 
searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);

});



