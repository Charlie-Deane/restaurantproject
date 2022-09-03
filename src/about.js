import myChef from './img/headchef_large.jpg';

const about = (parent) => {
    const thisChef = new Image();
    thisChef.src = myChef;
    thisChef.setAttribute('id','littleChef');
    const pOne = document.createElement('p');
    const pTwo = document.createElement('p');
    const pThree = document.createElement('p');
    const pFour = document.createElement('p');
    pOne.classList.add('bio');
    pTwo.classList.add('bio');
    pThree.classList.add('bio');
    pFour.classList.add('bio');
    pOne.textContent = "When Franco Pepes grandfather Ciccio opened a bakery in the small city of Caiazzo, Caserta in 1931, no one would have guessed it would turn into the most famous pizzeria in the world. Nearby Naples is the traditional home of pizza, but with a dedication to the kilometro zero movement, sourcing almost every ingredient from the immediate area, Franco has turned this rural area into a destination for diners worldwide.";
    pTwo.textContent = "Franco learnt everything he could from his father, Stefano, who used to spend days in the local countryside picking fresh ingredients like oregano and mushrooms to put on top of pizza. Every time the dough was made there were no scales, recipes, machinery or ready-made ingredients involved; but because Franco watched his father create it from scratch thousands of times over, he didnt even need to write anything down to learn how the dough should feel when its ready.";
    pThree.textContent = "Franco opened his restaurant Pepe in Grani in 2005, just round the corner from his grandfathers bakery. At the time, Caiazzo was not particularly known for its food, but thanks to the popularity of the pizzeria and Francos work with agronomist Vincenzo Coppola, the surrounding area has become famous for its artisanal producers, particularly its olive oil. The ingredients used to make the pizzas come almost exclusively from these local suppliers, particularly the oil, mozzarella, chickpeas and pork.";
    pFour.textContent = "While the ingredients Franco uses are the freshest he can find and of the very best quality, it is the dough that makes his pizzas so special. Continuing on the work of his father, he follows no recipe, changing the quantities and ingredients every day to account for how humid the weather is, the gluten content of the flour and the temperature in the kitchen. Franco can tell all of this by simply using his hands, adding a little extra flour or water as he kneads enough dough for 400 pizzas at a time. The resulting texture is light, fluffy and perfectly chewy, lightly charred on top from the ferocious wood-fired oven (which can cook each pizza in under two minutes).";
    parent.appendChild(thisChef);
    parent.appendChild(pOne);
    parent.appendChild(pTwo);
    parent.appendChild(pThree);
    parent.appendChild(pFour);
}

export { about };