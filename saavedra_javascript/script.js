const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", ()=>{
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

// Javascript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) =>{
    btn.classList.remove("active");
  });

  slides.forEach((slide) =>{
    slide.classList.remove("active");
  });

  contents.forEach((content) =>{
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  })
});

const button = document.getElementById('button-img');
const btn_insta = document.getElementById('button-insta');
const btn_twi = document.getElementById('button-twi');

button.addEventListener('click', function() {
  const activeImage = document.querySelector('.active');
  if (activeImage.id == "national") {
    window.open("https://www.facebook.com/nationalmuseumofthephilippines/", "_blank")
  }
  if(activeImage.id = "ayala"){
    window.open("https://www.facebook.com/ayalamuseum/", "_blank")
  }
  if(activeImage.id = "mind"){
    window.open("https://www.facebook.com/themindmuseum/", "_blank")
  }
  if(activeImage.id = "pintoart"){
    window.open("https://www.facebook.com/themindmuseum/", "_blank")
  }
  if(activeImage.id == "artin"){
    window.open("https://www.facebook.com/artinisland/", "_blank")
  }
});

btn_insta.addEventListener('click', function() {
  const activeImage = document.querySelector('.active');
  if (activeImage.id == "national") {
    window.open("https://www.instagram.com/natmuseumph/", "_blank")
  }
  if(activeImage.id = "ayala"){
    window.open("https://www.instagram.com/ayalamuseum/", "_blank")
  }
  if(activeImage.id = "mind"){
    window.open("https://www.instagram.com/themindmuseum/", "_blank")
  }
  if(activeImage.id == "artin"){
    window.open("https://www.instagram.com/pinto.art/", "_blank")
  }
  if(activeImage.id == "pintoart"){
    window.open("https://www.instagram.com/artinisland/", "_blank")
  }
});

btn_twi.addEventListener('click', function() {
  const activeImage = document.querySelector('.active');
  if (activeImage.id == "national") {
    window.open("https://twitter.com/natmuseumph", "_blank")
  }
  if(activeImage.id = "ayala"){
    window.open("https://twitter.com/ayalamuseum", "_blank")
  }
  if(activeImage.id = "mind"){
    window.open("https://twitter.com/themindmuseum", "_blank")
  }
  if(activeImage.id =="artin"){
    window.open("https://twitter.com/pintoartmuseum", "_blank")
  }
  if(activeImage.id =="pinto"){
    window.open("https://twitter.com/artinisland", "_blank")
  }
});

function sendEmail() {

  console.log(document.getElementById('email').value);
  console.log(document.getElementById('message').value);
  
}

ScrollReveal({
  //reset: true,
  distance: '60px',
  duration: 2500,
  delay: 400
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('.main-title, .section-title', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.about .image, .info', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.ayala .image, .info', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.text-box', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.map', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.media-icons i', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.sec-02 .image, .sec-03 .image', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.media-info li', { delay: 500, origin: 'left', interval: 200 });