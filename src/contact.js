const createContactPage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const contactDiv = document.createElement('div')
    contactDiv.classList.add('contact-div')

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'
    contactDiv.appendChild(phoneNumber)

    const address = document.createElement('p')
    address.textContent = '🏠 555 Milbourne Street, Ottawa, Canada'
    contactDiv.appendChild(address)

    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = '/src/img/restaurant-location.png'
    restaurantLocation.alt = 'SushiHub restaurant location'
    contactDiv.appendChild(restaurantLocation)
    pageContent.append(contactDiv)
    content.appendChild(pageContent)

}

export default createContactPage