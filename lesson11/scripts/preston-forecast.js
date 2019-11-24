fetch("https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=c2c6096895d8079d84bd1faed8c49af5&units=imperial")
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        let forecast = [];
        let icon = [];
        let days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        let day = 1;
        let ico = 1;
        let d = 1;
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        
        for (let i = 1; i <= 5; i++) {
        jsObject.list.forEach(x => {
            if (x.dt_txt.includes('18:00:00')) {
                forecast[day] = x.main.temp.toFixed(0);
                day++;
                icon[ico] = x.weather[0].icon;
                ico++;

                days[d] = new Date(x.dt_txt);
                n = weekday[days[i].getDay ()];
                d++;
            }
        let imagesrc = '//openweathermap.org/img/w/' +  icon[i] + '.png';
        document.getElementById("weatherimage" + i).setAttribute('src', imagesrc);
        document.getElementById('forecastday' + i ).innerHTML = forecast[i];
        document.getElementById('day' + i ).innerHTML =  n ;
    })};
});