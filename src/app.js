import './assets/scss/style.scss';

const navbarToggler = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.navbar');
const navbarNav = document.querySelector('.navbar-nav');
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');

navbarToggler.addEventListener('click' , () => {
    navbar.classList.toggle('active')
    navbarNav.classList.toggle('active')
    navbarToggler.classList.toggle('active')
})
dropdown.addEventListener('click' , () => {
    dropdown.classList.toggle('active')
    dropdownMenu.classList.toggle('active')
})

