
    //function to create the homepage
    const buildHome = () => {
        
        const content = document.querySelector('#content');
        //Create the container
        const container = document.createElement('div');
        container.classList.add('intro-container');
        container.classList.add('container');


        //Create the p and h1 element
        const header = document.createElement('h1')
        const para = document.createElement('p');

        header.textContent = 'The Restaurant';
        para.textContent = 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

        content.appendChild(container);
        container.appendChild(header);
        container.appendChild(para);
    };





    
export {buildHome};