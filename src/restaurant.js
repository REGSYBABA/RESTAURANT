const createResturantHomePage = () => {
    const content = document.querySelector('#content')
    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content', 'page-content')
    const innerMainTextContent = document.createElement('div')
    innerMainTextContent.classList.add('text-area')
    mainContent.appendChild(innerMainTextContent)


    const image = document.createElement('img')
    image.src = '/src/img/home-sushi-rolls.png'
    image.width = '500'
    // image.height = '250'
    mainContent.appendChild(image)

    const headline = document.createElement('h1')
    headline.innerHTML = 'Enjoy Delicious' + `<img src="/src/img/home-sushi-title.png" alt="" style="width: 45px" />` + ' Sushi Food'
    innerMainTextContent.appendChild(headline)

    const copy = document.createElement('p')
    copy.textContent = 'Enjoy a good dinner with the best dishes in the resturant and improve your day'
    innerMainTextContent.appendChild(copy)
    content.appendChild(mainContent)

    const orderBtn = document.createElement('button')
    orderBtn.classList.add('order-btn')
    orderBtn.textContent = 'Order now'
    innerMainTextContent.appendChild(orderBtn)

}

export default createResturantHomePage