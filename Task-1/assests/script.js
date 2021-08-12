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