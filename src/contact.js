import image from "./images/logos/logo-transparent.png"

export default function createContact(){

    const main = document.querySelector('.main')

    const heading = document.createElement('h1')
    heading.className = 'heading'
    heading.innerHTML = 'Contact Us'

    const contact = document.createElement('div')
    contact.className = 'contact'

    const contactInfo = document.createElement('div')
    contactInfo.className = 'contactInfo'

    const phoneHeading = document.createElement('h2')
    phoneHeading.innerHTML = "Phone"

    const phoneNumber = document.createElement('p')
    phoneNumber.innerHTML = "555-555-5555"

    const locationHeading = document.createElement('h2')
    locationHeading.innerHTML = "Location"

    const address = document.createElement('p')
    address.innerHTML = "123 Fake St.</br>Columbus, OH 43004"

    const emailHeading = document.createElement('h2')
    emailHeading.innerHTML = "Email"

    const email = document.createElement('p')
    email.innerHTML = "orders@noneya.com"
    
    contactInfo.append(phoneHeading, phoneNumber, locationHeading, address, emailHeading, email)
    contact.append(contactInfo)
    main.append(heading, contact)
}