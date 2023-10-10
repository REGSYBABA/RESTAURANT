const createResturantHomePage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const mainContent = document.createElement('div')
    mainContent.classList.add('main-content')
    const innerMainTextContent = document.createElement('div')
    innerMainTextContent.classList.add('text-area')
    mainContent.appendChild(innerMainTextContent)


    const image = document.createElement('img')
    image.src = '/src/img/home-sushi-rolls.png'
    image.width = '400'
    // image.height = '250'
    mainContent.appendChild(image)

    const headline = document.createElement('h1')
    headline.innerHTML = 'Enjoy Delicious' + `<img src="/src/img/home-sushi-title.png" alt="" style="width: 45px" />` + ' Sushi Food'
    innerMainTextContent.appendChild(headline)

    const copy = document.createElement('p')
    copy.classList.add('p')
    copy.textContent = 'Enjoy a good dinner with the best dishes in the resturant and improve your day'
    innerMainTextContent.appendChild(copy)
    content.appendChild(mainContent)

    const orderBtn = document.createElement('button')
    orderBtn.classList.add('order-btn')
    orderBtn.innerHTML = 'Order now ' + `<i class="fa-solid fa-arrow-right"></i>`
    innerMainTextContent.appendChild(orderBtn)

    pageContent.appendChild(mainContent)
    content.appendChild(pageContent)


    // pageContent.appendChild(centerText)

    const mainContent2 = document.createElement('div')
    mainContent2.classList.add('main-content-2', 'page-content')
    const innerMainTextContent2 = document.createElement('div')
    innerMainTextContent2.classList.add('text-area-2')


    const image2 = document.createElement('img')
    image2.src = '/src/img/about-sushi.png'
    image2.width = '400'
    // image2.height = '250'
    mainContent2.appendChild(image2)

    const abouText = document.createElement('div')
    abouText.innerText = 'About us'
    abouText.classList.add('about-text')
    innerMainTextContent2.appendChild(abouText)

    const headline2 = document.createElement('h1')
    headline2.innerHTML = 'We Provide' + `<img src="./src/img/about-sushi-title.png" alt="Small Sushi" style="width: 45px" />` + 'Healthy Food'
    innerMainTextContent2.appendChild(headline2)

    const copy2 = document.createElement('p')
    copy2.classList.add('p')
    copy2.textContent = 'Food That Comes To us From Our Relatives Whether They Have Wings Or Roots. This is how we consider food, it also has culture. HAving a history passed on from generations to generations'
    innerMainTextContent2.appendChild(copy2)
    mainContent2.appendChild(innerMainTextContent2)
    pageContent.appendChild(mainContent2)

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const copyright = document.createElement("p");
    copyright.textContent = `Copyright © ${new Date().getFullYear()} Regha`;
    footer.appendChild(copyright)

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/regsybaba";
    footer.appendChild(githubLink)

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa-brands");
    githubIcon.classList.add("fa-github");
    githubLink.appendChild(githubIcon)

    pageContent.appendChild(footer)

}

export default createResturantHomePage

