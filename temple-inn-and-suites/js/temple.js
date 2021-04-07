const requestURL = 'js/temples.json';

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  slideI = slideIndex - 1

  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject;

    let card = document.createElement('section');
    let h2 = document.querySelector('#temple-name');
    let info = document.querySelector('.temple-info');
    info.removeChild(info.childNodes[0])
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    let p5 = document.createElement('p');
    let p6 = document.createElement('p');
    let p7 = document.createElement('p');
    let h3 = document.createElement('h3')
    h3.textContent = "Temple Info"

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.innerHTML = "<br>Closures: ";
    ul.appendChild(li);

    h2.textContent = temples[slideI].name
    p1.textContent = "Address: " + temples[slideI].address1 + " " + temples[slideI].city + ", " + temples[slideI].state + " " + temples[slideI].zip
    p2.textContent = "Email: " + temples[slideI].email
    p3.textContent = "Phone: " + temples[slideI].phone
    p4.textContent = "Services: " + temples[slideI].services
    p5.textContent = "Ordinance Schedule: " + temples[slideI].ordinanceschedule
    p6.textContent = "Session Schedule: " + temples[slideI].sessionschedule
    for(let x = 0; x < temples[slideI].templeclosureschedule.length; x++) {
        let li = document.createElement('li');
        li.innerHTML = temples[slideI].templeclosureschedule[x];
        ul.appendChild(li);
    }

    let his = document.createElement('h3')
    his.textContent = "History"
    p7.textContent =  temples[slideI].history

    card.appendChild(h3)
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(p4);
    card.appendChild(p5);
    card.appendChild(p6);
    card.appendChild(ul)
    card.appendChild(his);
    card.appendChild(p7);

    info.appendChild(card)

    });
}

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); 
    const temples = jsonObject;

    let im1 = document.querySelector('#im1');
    let im2 = document.querySelector('#im2');
    let im3 = document.querySelector('#im3');
    let im4 = document.querySelector('#im4');
    im1.setAttribute('src', temples[0].imageurl);
    im2.setAttribute('src', temples[1].imageurl);
    im3.setAttribute('src', temples[2].imageurl);
    im4.setAttribute('src', temples[3].imageurl);
});