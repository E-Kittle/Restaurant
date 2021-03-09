import {buildHome} from './modules/home'
import {buildMenu} from './modules/menu'
import {buildAbout} from './modules/contact'


// buildHome();

// buildMenu();

// buildAbout();

// document.onload = buildHome();

const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const aboutButton = document.querySelector('#aboutButton');
const content = document.querySelector('.content');

homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    buildHome();
});

menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    buildMenu();
});

aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    buildAbout();
});


