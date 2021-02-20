let wind_speed = document.getElementById("wind-speed").textContent;
let temp = document.getElementById("temp").textContent;
s = wind_speed ** 0.16

console.log(`temp ${temp}`)
console.log(`speed ${s}`)

let wind_chill = 0

if (wind_speed > 3 && temp <= 50){
    wind_chill = Math.round(35.74 + (0.6215*temp) - (35.75*s) + 0.4275*temp*s)
}


document.querySelector('#wind-chill').textContent = wind_chill;
