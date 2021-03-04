const requestURL="https://www.ahfx.com/person.php"

fetch(requestURL)
    .then( response => { return response.json(); } )
    .then(  jsonObject => { 
        console.table(jsonObject); 

        const person = jsonObject['person']

        let card = document.createElement('section');
        let image = document.createElement('img');
        let h2 = document.createElement('h2');
        let pass = document.createElement('p');
        let email_address = document.createElement('p');
        let eye_color = document.createElement('p');
        let city_country = document.createElement('p');
        let children = document.createElement('p');
        let ip = document.createElement('p');

        image.setAttribute('src', "//thispersondoesnotexist.com/image");
        h2.textContent = "Full Name: " + person.personal.name + ' ' + person.personal.last_name;
        pass.textContent = "Password: " + person.online_info.password;
        email_address.textContent = "Email Address: " + person.online_info.email;
        eye_color.textContent = "Eye Color: " + person.personal.eye_color;
        city_country.textContent = "City/Country: " + person.personal.city + ", " + person.personal.country;
        children.textContent = "Number Of Children: " + person.marriage.children;
        if (person.marriage.children > 0 || person.marriage.children === undefined) {
            children.textContent = "Number Of Children: Not Married";
          }
        ip.textContent = "IP: " + person.online_info.ip_address;

        card.appendChild(image);
        card.appendChild(h2);
        card.appendChild(pass);
        card.appendChild(email_address);
        card.appendChild(eye_color);
        card.appendChild(city_country);
        card.appendChild(children);
        card.appendChild(ip);


        document.querySelector('main.card').appendChild(card);
    })