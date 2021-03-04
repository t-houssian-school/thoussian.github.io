const requestURL = 'https://50wzgh.deta.dev/randomquote';

fetch(requestURL)
.then( response => { return response.json(); } )
.then(  jsonObject => { 
    console.table(jsonObject); 

    const quote = jsonObject

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');

    console.log(quote)
    h2.textContent = quote.author;
    p1.textContent = quote.text
    p2.textContent = "- " + quote.source

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);

    document.querySelector('div.cards').appendChild(card);
})