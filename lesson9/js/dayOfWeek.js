let d = new Date();
let weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[d.getDay()];

if (n != 'Jo') {
    document.querySelector('.scrolly').style.visibility = "hidden";
    document.querySelector('.hide').style.gridTemplateRows = "0";
}