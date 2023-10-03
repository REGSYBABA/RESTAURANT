const createResturantHomePage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const image = document.createElement('img')
    image.src = 'https://i.pinimg.com/564x/6a/58/ed/6a58eda5cea4d65978804ea7a16e9897.jpg'
    image.height = '300'
    pageContent.appendChild(image)

    const headline = document.createElement('h1')
    headline.textContent = 'welcome to our restuarant'
    pageContent.appendChild(headline)

    const copy = document.createElement('p')
    copy.textContent = 'We serve the main Eba in town'
    pageContent.appendChild(copy)
    content.appendChild(pageContent)
}

export default createResturantHomePage