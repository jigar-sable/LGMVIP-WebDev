let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.addEventListener('scroll', function(){
           const header = document.querySelector('header');
           header.classList.toggle("sticky", window.scrollY > 0); 
});


/* carousel life in zippy*/
var lifeimg = document.querySelectorAll('.lifeimg')
var len=lifeimg.length;

for(var i=0; i<len; i++){
    lifeimg[i].addEventListener('click' , function() {
        document.getElementById('curimg').src = this.src
    })
}

const slideLeft = document.getElementById('prev');
const slideRight = document.getElementById('next');

slideLeft.addEventListener('click', function(){
  document.getElementById('lifeimg-gallery').scrollLeft -= 150
})

slideRight.addEventListener('click', function(){
  document.getElementById('lifeimg-gallery').scrollLeft += 150
})





const swiper = new Swiper('.swiper-container', {
  spaceBetween: 20,
  loop: true,
  autoplay: {
      delay: 2000,
      disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      450: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      991: {
          slidesPerView: 4,
      },
      1200: {
          slidesPerView: 5,
      },
  }
});