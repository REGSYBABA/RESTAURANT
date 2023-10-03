const createContactPage = () => {
    const content = document.querySelector('#content')
    const pageContent = document.createElement('div')
    pageContent.classList.add('page-content')

    const form = document.createElement('form')
    form.classList.add('contact-form')

    const headingInput = document.createElement('input')
    headingInput.type = 'text'
    headingInput.placeholder = 'Enter Heading'
    form.appendChild(headingInput)

    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    headingInput.placeholder = 'Enter Address'
    form.appendChild(addressInput)

    const submitBtn = document.createElement('input')
    submitBtn.type = 'text'
    submitBtn.value = 'submit'
    form.appendChild(submitBtn)

    pageContent.appendChild(form)
    content.appendChild(pageContent)
}

export default createContactPage