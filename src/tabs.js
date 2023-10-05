import createResturantHomePage from "./restaurant"
import createMenus from "./menu"
import createContactPage from "./contact"


const createTabs = () => {
    const header = document.createElement('header')
    const content = document.querySelector('#content')
    const pageContent = document.createElement('nav')
    pageContent.classList.add('nav-content')
    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "SUSHIHUB";

    header.classList.add("header")
    header.style.backgroundColor = 'hsl(19, 100%, 96%)'
    content.appendChild(header)

    const div1 = document.createElement('button')
    const div2 = document.createElement('button')
    const div3 = document.createElement('button')

    div1.setAttribute('id', 'home-btn')
    div2.setAttribute('id', 'menu-btn')
    div3.setAttribute('id', 'conact-btn')

    div1.classList.add('tab', 'active')
    div2.classList.add('tab')
    div3.classList.add('tab')

    div1.textContent = 'Home'
    div2.textContent = 'Menu'
    div3.textContent = 'Contact'

    content.appendChild(header)
    header.appendChild(restaurantName)
    header.appendChild(pageContent)
    pageContent.appendChild(div1)
    pageContent.appendChild(div2)
    pageContent.appendChild(div3)

    div1.addEventListener('click', (e) => {
        clearContent()
        if (e.target.classList.contains("active")) return;
        activeButton(div1);
        createResturantHomePage()
    })
    div2.addEventListener('click', (e) => {
        clearContent()
        if (e.target.classList.contains("active")) return;
        activeButton(div2);
        createMenus()
    })
    div3.addEventListener('click', (e) => {
        clearContent()
        if (e.target.classList.contains("active")) return;
        activeButton(div3);
        createContactPage()
    })
}

function clearContent() {
    const content = document.querySelector("#content")
    const pageContent = document.querySelector('.page-content')
    if (pageContent) {
        content.removeChild(pageContent)
    }
}


function activeButton(button) {
    const buttons = document.querySelectorAll(".tab");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

export default createTabs