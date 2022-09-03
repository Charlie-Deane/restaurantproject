import myMenu from './img/menu.jpg';

const menu = (parent) => {
    const thisMenu = new Image();
    thisMenu.src = myMenu;
    thisMenu.setAttribute('id', 'menuPicture');
    console.log(thisMenu);
    parent.appendChild(thisMenu);
}

export { menu };