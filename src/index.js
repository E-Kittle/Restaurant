//Imports the functions for each page from their corresponding file
import {buildHome} from './modules/home'
import {buildMenu} from './modules/menu'
import {buildAbout} from './modules/contact'


//Pre-loads the homepage
document.onload = buildHome();

//query selectors for each button and the content div.
const homeButton = document.querySelector('#homeButton');
const menuButton = document.querySelector('#menuButton');
const aboutButton = document.querySelector('#aboutButton');
const content = document.querySelector('#content');


//When the 'home' button is pressed, the page is cleared and the buildHome() function reconstructs the homepage
homeButton.addEventListener('click', () => {
    content.innerHTML = '';
    buildHome();
});

//When the 'menu' button is pressed, the page is cleared and the buildMenu() function reconstructs the menu page
menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    buildMenu();
});

//When the 'about' button is pressed, the page is cleared and the buildAbout() function reconstructs the about page
aboutButton.addEventListener('click', () => {
    content.innerHTML = '';
    buildAbout();
});


