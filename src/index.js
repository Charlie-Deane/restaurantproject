import './style.css';
import { menu } from './menu.js';
import { giftcard } from './giftcard.js';
import { about } from './about.js';

const content = document.getElementById('content');
const menu_button = document.getElementById('menu_button');
const giftcard_button = document.getElementById('giftcard_button');
const about_button = document.getElementById('about_button');

function emptyContent(){
    content.removeAttribute('class');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

const menuPicture = document.createElement('img');


menu_button.addEventListener('click', (e) =>{
    emptyContent();
    content.setAttribute('class', 'menu');
    menu(content);
});

giftcard_button.addEventListener('click', (e) =>{
    emptyContent();
    content.setAttribute('class', 'giftCard');
    giftcard(content);
});

about_button.addEventListener('click', (e) =>{
    emptyContent();
    content.setAttribute('class', 'about');
    about(content);
});