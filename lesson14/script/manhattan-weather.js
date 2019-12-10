const apiURL = "https://api.openweathermap.org/data/2.5/weather?zip=10023&APPID=c2c6096895d8079d84bd1faed8c49af5&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

document.getElementById("current-temp-man").textContent = jsObject.main.temp.toFixed(0);
document.getElementById("current-weather-man").textContent = jsObject.weather[0].description;
document.getElementById("humidity-man").textContent = jsObject.main.humidity;
document.getElementById("windSpeed-man").textContent = jsObject.wind.speed;
});