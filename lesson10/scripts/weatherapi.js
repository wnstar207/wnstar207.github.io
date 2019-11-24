const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c2c6096895d8079d84bd1faed8c49af5&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);


imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
document.getElementById('imagesrc5').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);
document.getElementById("forecastday1").textContent = jsObject.main[0].temp;
document.getElementById("forecastday2").textContent = jsObject.main.temp;

});