const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=c2c6096895d8079d84bd1faed8c49af5&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

document.getElementById("current-temp").textContent = jsObject.main.temp;
document.getElementById("current-weather").textContent = jsObject.weather[0].description;
document.getElementById("humidity").textContent = jsObject.main.humidity;
document.getElementById("windSpeed").textContent = jsObject.wind.speed;
});