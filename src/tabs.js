import createResturantHomePage from "./restaurant"
import createMenus from "./menu"
import createContactPage from "./contact"


const createTabs = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')

    div1.setAttribute('id', 'home-btn')
    div2.setAttribute('id', 'menu-btn')
    div3.setAttribute('id', 'conact-btn')

    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')

    div1.textContent = 'Home'
    div2.textContent = 'Menu'
    div3.textContent = 'Contact'

    document.body.appendChild(content)
    content.appendChild(div1)
    content.appendChild(div2)
    content.appendChild(div3)

    div1.addEventListener('click', () => {
        clearContent()
        createResturantHomePage()
    })
    div2.addEventListener('click', () => {
        clearContent()
        createMenus()
    })
    div3.addEventListener('click', () => {
        clearContent()
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


export default createTabs