const url ="https://www.ahfx.com/events.php";
fetch(url)
    .then((response) => response.json())
    .then((jsObject) => {
        console.table(jsObject);

        for (let i = 0; i < jsObject.length; i++) {
            var stringStart = jsObject[i].properties.start;
            var stringEnd = jsObject[i].properties.end;

            string = stringStart.substr(stringStart.indexOf(' ') + 1);
            string1 = stringEnd.substr(stringEnd.indexOf(' ') + 1);

            date = new Date(stringStart);
            month = new Date(stringStart).toLocaleString('en-us', {month: 'short'});
            console.log(date);
            document.getElementById('year').innerHTLM = date.getYear();
            document.getElementById('day').innerHTML = date.getDate();
            document.getElementById('month').innerHTML = month.getMonth();
            document.getElementById('tag').innerHTML = jsObject[i].tags[i];
            document.getElementById('time').innerHTML = string + " - " + string1;
            document.getElementById('summary').innerHTML = jsObject[i].properties.summary;
            document.getElementById('location').innerHTML = jsObject[i].properties.location;
            document.getElementById('type').innerHTML = "Event Type: " + jsObject[i].type;
        }
    });