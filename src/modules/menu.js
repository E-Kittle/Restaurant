
const buildMenu = () => {
    //Selects the content container
    const content = document.querySelector('#content');

    //div elements to hold the menu
    const menuHolder = document.createElement('div');
    const foodHolder = document.createElement('div');

    //Header for the menu
    const headerOne = document.createElement('h1');
    headerOne.textContent = 'Menu';

    //Adds classes to the containers
    menuHolder.classList.add('menu-holder');
    menuHolder.classList.add('container');
    foodHolder.classList.add('food-holder');

    //Variables to hold the item names and description. Since the page is being populated with dummy data, I have used a loop to efficiently add in the items; however, if we were customizing the table I would call the newItem function each time supplying the correct food title and description.
    let title = "Food Item";
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tortor augue, ut suscipit tortor tempor sit amet. Sed laoreet enim id mauris faucibus, tincidunt blandit lacus faucibus";
    //Each loop uses the newItem function to create a new menu item, which is returned to the itemHolder variable. Then, the itemHolder is appended to foodHolder.
    for (let i = 0; i < 6; i++){
        let itemHolder = newItem(title, description);
        foodHolder.appendChild(itemHolder);
    }

    //Append the new div elements to the menu
    content.appendChild(menuHolder);
    menuHolder.appendChild(headerOne);
    menuHolder.appendChild(foodHolder);

};


//This 'private' module function creates a new menu items header and description, then appends it to the div element 'itemHolder', which can then (in the main function) be added to the appropriate container
const newItem = (title, description) => {
    const itemHolder = document.createElement('div');
    itemHolder.classList.add('item-holder');

    const header = document.createElement('h2');
    const para = document.createElement('p');

    header.textContent = title;
    para.textContent = description;

    itemHolder.appendChild(header);
    itemHolder.appendChild(para);
    return itemHolder;
}



//Exports the function to index.js
export {buildMenu};


