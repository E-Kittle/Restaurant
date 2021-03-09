
const buildAbout = () => {
    // Containers
    const content = document.querySelector('#content');
    const aboutHolder = document.createElement('div');
    const hoursHolder = document.createElement('div');
    const contactHolder = document.createElement('div');

    // Classes
    aboutHolder.classList.add('about-holder');
    aboutHolder.classList.add('container');
    hoursHolder.classList.add('hours');
    contactHolder.classList.add('contact');

    // Elements
    const title = document.createElement('h1');
    title.textContent = "About";

    const hoursTitle = document.createElement('h2');
    hoursTitle.textContent = "Hours";

    const sunthur = document.createElement('p');
    const frisat = document.createElement('p');
    sunthur.textContent = 'Sunday through Thursday: 11:00AM - 11:00PM';
    frisat.textContent = 'Friday and Saturday: 11:00AM - 1:00AM';

    const contactTitle = document.createElement('h2');
    contactTitle.textContent = 'Contact Us';

    const phone = document.createElement('p');
    phone.textContent = 'Phone: 123-456-7890';
    const address = document.createElement('p');
    address.textContent = 'Address: 123 29th Ave N, Seminole, CO, 78945';

    // Add elements to DOM

    content.appendChild(aboutHolder);
    aboutHolder.appendChild(title);
    aboutHolder.appendChild(hoursHolder);
    aboutHolder.appendChild(contactHolder);
    hoursHolder.appendChild(sunthur);
    hoursHolder.appendChild(frisat);
    contactHolder.appendChild(phone);
    contactHolder.appendChild(address);
}


    
export {buildAbout};








