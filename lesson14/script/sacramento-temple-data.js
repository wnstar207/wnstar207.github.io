const requestURL = 'https://wnstar207.github.io/lesson14/script/templedata.json';
fetch(requestURL)
	.then(function (response) {
	return response.json();
	})
.then(function (jsonObject) {
console.table(jsonObject);  // temporary checking for valid response and data parsing
const temples = jsonObject['temples'];
for (let i = 0; i < temples.length; i++ ) {  
  if (temples[i].name == "Sacramento California Temple") { //start Sacramento
    let card = document.createElement("section");
    let h2 = document.createElement("h3");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let p4 = document.createElement("p");
    let p5 = document.createElement("p");
    let p6 = document.createElement("p");
    let p7 = document.createElement("p");
    let p8 = document.createElement("p");
    let p9 = document.createElement("p");

    h2.textContent = "Upcoming Closures";
    p1.textContent = temples[i].closures[0];
    p2.textContent = temples[i].closures[1];
    p3.textContent = temples[i].closures[2];
    p4.textContent = temples[i].closures[3];
    p5.textContent = temples[i].closures[4];
    p6.textContent = temples[i].closures[5];
    p7.textContent = temples[i].closures[6];
    p8.textContent = temples[i].closures[7];
    p9.textContent = temples[i].closures[8];

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(p7);
    card.appendChild(p8);
    card.appendChild(p9);
    
document.querySelector('div.sacramentoCard').appendChild(card);
} //end Sacramento
}});