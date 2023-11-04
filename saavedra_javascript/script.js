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
});

btn_insta.addEventListener('click', function() {
  const activeImage = document.querySelector('.active');
  if (activeImage.id == "national") {
    window.open("https://www.instagram.com/natmuseumph/", "_blank")
  }