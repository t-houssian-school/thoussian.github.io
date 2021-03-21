const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const town = jsonObject;
    console.log(town.towns.length)
    for (let i = 0; i < town.towns.length; i++ ) {
        if (town.towns[i].name == 'Fish Haven' || town.towns[i].name == 'Preston' || town.towns[i].name == 'Soda Springs') {
            let card = document.createElement('section');
            let text = document.createElement('div');
            let h2 = document.createElement('h2');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let p4 = document.createElement('p');
            let image = document.createElement('img');

            h2.textContent = town.towns[i].name;
            p1.textContent = town.towns[i].motto;
            if (town.towns[i].name == 'Fish Haven') {
                image.setAttribute('src', "images/fish (1).jpg");
            }
            if (town.towns[i].name == 'Preston') {
                image.setAttribute('src', "images/preston (1).jpeg");
            }
            if (town.towns[i].name == 'Soda Springs') {
                image.setAttribute('src', "images/soda (1).jpg");
            }
            image.setAttribute('alt', town.towns[i].name + ' Image');
            p2.textContent = "Year Founded: " + town.towns[i].yearFounded;
            p3.textContent = "Population: " + town.towns[i].currentPopulation;
            p4.textContent = "Annual Rain Fall: " + town.towns[i].averageRainfall;

            card.appendChild(image);
            text.appendChild(h2);
            text.appendChild(p1);
            text.appendChild(p2);
            text.appendChild(p3);
            text.appendChild(p4);
            card.appendChild(text)

            document.querySelector('div.cards').appendChild(card);
        }
  }});