const requestURL = 'https://wnstar207.github.io/lesson14/script/templedata.json';
fetch(requestURL)
	.then(function (response) {
	return response.json();
	})
.then(function (jsonObject) {
console.table(jsonObject);  // temporary checking for valid response and data parsing
const temples = jsonObject['temples'];
for (let i = 0; i < temples.length; i++ ) {
let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
  h2.textContent = temples[i].name;
        p1.textContent = "Date of Birth: " + temples[i].address + '<br>' 
        p2.textContent = "Place of Birth: " + prophets[i].city;
  card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
document.querySelector('div.cards').appendChild(card);
}	
});