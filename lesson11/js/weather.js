const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=479fe9277fff4b68adc83def2d8c2a98';
const requestURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=479fe9277fff4b68adc83def2d8c2a98';

fetch(requestURL)
    .then( response => { return response.json(); } )
    .then(  jsonObject => { 
        console.table(jsonObject); 
        table = jsonObject;

        document.getElementById("description").innerHTML = table.weather[0].description;
        document.getElementById("temp-high").innerHTML = table.main.temp_max;
        document.getElementById("temp-low").innerHTML = table.main.temp_min;
        document.getElementById("wind-speed").innerHTML = table.wind.speed;
        let wind_chill = 0
        s = table.wind.speed ** 0.16
        if (table.wind.speed > 3 && table.main.temp <= 50){
            wind_chill = Math.round(35.74 + (0.6215*table.main.temp) - (35.75*s) + 0.4275*table.main.temp*s)
        }
        document.getElementById("wind-chill").innerHTML = wind_chill;
        document.getElementById("humidity").innerHTML = table.main.humidity;
        // table.list[0].weather[0].icon+".png";
        // table.list[0].weather[0].description;
})

fetch(requestURL2)
    .then( response => { return response.json(); } )
    .then(  jsonObject => { 
        console.table(jsonObject); 
        const cast = jsonObject['list'];

        count = 1;

        for (let i = 0; i < cast.length; i++ ) {
            var str = cast[i].dt_txt;
            str1 = str.substr(str.indexOf(' ')+1);
            date = str.substr(0,str.indexOf(' '))
            date = new Date(date).toLocaleString('en-us', {weekday:'short'});

            if (str1 == "18:00:00") {
                console.log(str1);
                console.log(cast[i]);
                console.log(date)
                document.getElementById("day-" + count).innerHTML = date;
                document.getElementById("day-" + count + "-temp").innerHTML = cast[i].main.temp;

                var iconcode = cast[i].weather[0].icon;
                var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
                document.getElementById("day-" + count + "-img").setAttribute('src', iconurl);
                document.getElementById("day-" + count + "-img").setAttribute('alt', cast[i].weather[0].description);

                count ++;
            }
        }
})