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
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let p5 = document.createElement('p');
        let p6 = document.createElement('p');
  h2.textContent = temples[i].name;
        p1.textContent = temples[i].address
        p2.textContent = temples[i].city; 
        p3.textContent = "Phone: " + temples[i].phone;
        p4.textContent = "Temple Services";
        p5.textContent = temples[i].templeservices;
  card.appendChild(h2);
        card.appendChild(p1);
        card.appendChild(p2);
        card.appendChild(p3);
        card.appendChild(p4);
        card.appendChild(p5);
document.querySelector('div.cards').appendChild(card);
}	
});