const giftcard = (parent) =>{
    const lineOne = document.createElement('p');
    const lineTwo = document.createElement('p');
    const lineThree = document.createElement('p');

    lineOne.setAttribute('id', 'lineOne');
    lineOne.classList.add('giftP');

    lineTwo.setAttribute('id', 'lineTwo');
    lineTwo.classList.add('giftP');

    lineThree.setAttribute('id', 'lineThree');
    lineThree.classList.add('giftP');

    lineOne.textContent = "get them something";
    lineTwo.textContent = "that gives them";
    lineThree.textContent = "a PEP in their step";
    
    parent.appendChild(lineOne);
    parent.appendChild(lineTwo);
    parent.appendChild(lineThree);
}

export { giftcard };