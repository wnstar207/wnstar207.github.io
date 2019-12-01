const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];
        for (let i=0; i<towns.length; i++) {
            if (towns[i].name == "Fish Haven") {
                let card = document.createElement("section");
                let h3 = document.createElement("h2");
                let p1 = document.createElement("h4");
                let p2 = document.createElement("h4");
                let p3 = document.createElement("h4");
                let p4 = document.createElement("h4");

                h3.textContent = "Upcoming Events for Fish Haven";
                p1.textContent = towns[i].events[0];
                p2.textContent = towns[i].events[1];
                p3.textContent = towns[i].events[2];
                p4.textContent = towns[i].events[3];

                card.appendChild(h3);
                card.appendChild(p1);
                card.appendChild(p2);
                card.appendChild(p3);
                card.appendChild(p4);
                
                document.querySelector("div.events").appendChild(card);

            }
        }});