import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

let menuButton = document.querySelector('.header-mobail-menu');
let closeButton = document.querySelector('.close');
let menu = document.querySelector('.mobile-menu');
menuButton.addEventListener('click', function() {
    menu.classList.toggle('enabled');
});
closeButton.addEventListener('click', function() {
    menu.classList.toggle('enabled');
})