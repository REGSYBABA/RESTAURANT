const createMenus = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const mainContent = document.createElement('div')
    mainContent.classList.add('grid-content')

    const headingDiv = document.createElement('div')
    headingDiv.classList.add('menu-heading')
    const headingDivtext = document.createElement('p')
    headingDivtext.classList.add('menu-p')
    headingDivtext.textContent = 'The Best Food'
    const headingDivtext2 = document.createElement('p')
    headingDivtext2.classList.add('menu-p2')
    headingDivtext2.textContent = 'Popular Dishes'
    headingDiv.appendChild(headingDivtext)
    headingDiv.appendChild(headingDivtext2)


    const popularDishes = document.createElement('div')
    popularDishes.classList.add('popdish1')
    const popDishTextDiv = document.createElement('div')
    popDishTextDiv.classList.add('poptext')
    const popDishImg = document.createElement('img')
    popDishImg.classList.add('popimg')
    popDishImg.src = '/src/img/onigiri.png'
    popDishImg.width = '240'

    const popDishText = document.createElement('p')
    popDishText.textContent = 'Onigiri'
    popDishText.classList.add('popularpara')
    const popDishText2 = document.createElement('p')
    popDishText2.textContent = 'Japaneese Dish'
    const popDishText3 = document.createElement('p')
    popDishText3.classList.add('price')
    popDishText3.textContent = '$10.99'

    popularDishes.appendChild(popDishImg)
    popDishTextDiv.appendChild(popDishText)
    popDishTextDiv.appendChild(popDishText2)
    popDishTextDiv.appendChild(popDishText3)

    const popularDishes2 = document.createElement('div')
    popularDishes2.classList.add('popdish1')
    const popDish2TextDiv = document.createElement('div')
    popDish2TextDiv.classList.add('poptext')
    const popDishImg2 = document.createElement('img')
    popDishImg2.src = '/src/img/popular-spring-rols.png'
    popDishImg2.width = '240'

    const popDish2Text = document.createElement('p')
    popDish2Text.textContent = 'Spring Rolls'
    popDish2Text.classList.add('popularpara')
    const popDish2Text2 = document.createElement('p')
    popDish2Text2.textContent = 'Japaneese Dish'
    const popDish2Text3 = document.createElement('p')
    popDish2Text3.classList.add('price')
    popDish2Text3.textContent = '$15.99'

    popularDishes2.appendChild(popDishImg2)
    popDish2TextDiv.appendChild(popDish2Text)
    popDish2TextDiv.appendChild(popDish2Text2)
    popDish2TextDiv.appendChild(popDish2Text3)
    popularDishes2.appendChild(popDish2TextDiv)

    const popularDishes3 = document.createElement('div')
    popularDishes3.classList.add('popdish1')
    const popDish3TextDiv = document.createElement('div')
    popDish3TextDiv.classList.add('poptext')
    const popDishImg3 = document.createElement('img')
    popDishImg3.src = '/src/img/popular-sushi-rolls.png'
    popDishImg3.width = '240'

    const popDish3Text = document.createElement('p')
    popDish3Text.textContent = 'Sushi Rolls'
    popDish3Text.classList.add('popularpara')
    const popDish3Text2 = document.createElement('p')
    popDish3Text2.textContent = 'Japaneese Dish'
    const popDish3Text3 = document.createElement('p')
    popDish3Text3.classList.add('price')
    popDish3Text3.textContent = '$19.99'

    popularDishes3.appendChild(popDishImg3)
    popDish3TextDiv.appendChild(popDish3Text)
    popDish3TextDiv.appendChild(popDish3Text2)
    popDish3TextDiv.appendChild(popDish3Text3)
    popularDishes3.appendChild(popDish3TextDiv)

    const recentlyAdded = document.createElement('div')
    recentlyAdded.classList.add('recently-added')
    const innerMainTextContent = document.createElement('div')
    innerMainTextContent.classList.add('recently-text-area')
    recentlyAdded.appendChild(innerMainTextContent)


    const image = document.createElement('img')
    image.src = '/src/img/recently-salmon-sushi.png'
    image.width = '420'
    recentlyAdded.appendChild(image)

    const abouText = document.createElement('div')
    abouText.innerText = 'Recently Added'
    abouText.classList.add('about-text')
    innerMainTextContent.appendChild(abouText)


    const headline = document.createElement('h1')
    headline.innerHTML = 'Sushi Samurai' + `<img src="/src/img/spinach-leaf.png" alt="" style="width: 35px" />` + ' Salmon Cheese'
    innerMainTextContent.appendChild(headline)

    const copy = document.createElement('p')
    copy.classList.add('p')
    copy.textContent = 'Take a look at what is new And do not deprive yourself of a good meal enjoy and be happy.'
    innerMainTextContent.appendChild(copy)
    content.appendChild(mainContent)

    const orderBtn = document.createElement('button')
    orderBtn.classList.add('order-btn')
    orderBtn.innerHTML = 'Order now ' + `<i class="fa-solid fa-arrow-right"></i>`
    innerMainTextContent.appendChild(orderBtn)

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



    pageContent.appendChild(headingDiv)
    mainContent.appendChild(popularDishes)
    mainContent.appendChild(popularDishes2)
    mainContent.appendChild(popularDishes3)
    popularDishes.appendChild(popDishTextDiv)
    pageContent.appendChild(mainContent)
    pageContent.appendChild(recentlyAdded)
    pageContent.appendChild(footer)
    content.appendChild(pageContent)
}



export default createMenus
