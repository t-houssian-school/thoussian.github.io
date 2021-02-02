let year = new Date();

document.querySelector('#year').textContent = year.getFullYear();

let mod = document.lastModified;

document.querySelector('#instupdated').textContent = year.toLocaleDateString('en-US', {weekday: 'long'}) + ', ' + 
                                                    year.getDay() + ' ' + 
                                                    year.toLocaleDateString('en-US', {month: 'long'}) + ' ' +
                                                    year.getFullYear();