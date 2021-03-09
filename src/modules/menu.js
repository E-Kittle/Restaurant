
const buildMenu = () => {
    //Selects the content container
    const content = document.querySelector('#content');

    const menuHolder = document.createElement('div');
    const foodHolder = document.createElement('div');
    // const itemHolder = document.createElement('div');

    const headerOne = document.createElement('h1');
    headerOne.textContent = 'Menu';

    menuHolder.classList.add('menu-holder');
    foodHolder.classList.add('food-holder');
    // itemHolder.classList.add('item-holder');

    let title = "Food Item";
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tortor augue, ut suscipit tortor tempor sit amet. Sed laoreet enim id mauris faucibus, tincidunt blandit lacus faucibus";



    for (let i = 0; i < 6; i++){
        let itemHolder = newItem(title, description);
        foodHolder.appendChild(itemHolder);
    }

    content.appendChild(menuHolder);
    menuHolder.appendChild(headerOne);
    menuHolder.appendChild(foodHolder);

};



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




export {buildMenu};




// <div class="menu-holder">
//             <h1>Menu</h1>
//             <div class="food-holder">
//                 <div class="item-holder">
//                     <h2>Food 1</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tortor augue, ut suscipit
//                         tortor tempor sit amet. Sed laoreet enim id mauris faucibus, tincidunt blandit lacus faucibus
//                     </p>
//                 </div>
//                 <div class="item-holder">
//                     <h2>Food 1</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tortor augue, ut suscipit
//                         tortor tempor sit amet. Sed laoreet enim id mauris faucibus, tincidunt blandit lacus faucibus
//                     </p>
//                 </div>
//                 <div class="item-holder">
//                     <h2>Food 1</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tortor augue, ut suscipit
//                         tortor tempor sit amet. Sed laoreet enim id mauris faucibus, tincidunt blandit lacus faucibus
//                     </p>
//                 </div>
//                 <div class="item-holder">
//                     <h2>Food 1</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tortor augue, ut suscipit
//                         tortor tempor sit amet. Sed laoreet enim id mauris faucibus, tincidunt blandit lacus faucibus
//                     </p>
//                 </div>
//                 <div class="item-holder">
//                     <h2>Food 1</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tortor augue, ut suscipit
//                         tortor tempor sit amet. Sed laoreet enim id mauris faucibus, tincidunt blandit lacus faucibus
//                     </p>
//                 </div>
//                 <div class="item-holder">
//                     <h2>Food 1</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras faucibus tortor augue, ut suscipit
//                         tortor tempor sit amet. Sed laoreet enim id mauris faucibus, tincidunt blandit lacus faucibus
//                     </p>
//                 </div>
//             </div>