import './style.css'
import header from './header.js'
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'
import footer from './footer.js'

header()
home()
footer()

const homeTab = document.querySelector('#homeTab')
const menuTab = document.querySelector('#menuTab')
const contactTab = document.querySelector('#contactTab')

homeTab.addEventListener('click', () => {
    clearContent()
    header()
    home()
    footer()
})

menuTab.addEventListener('click', () => {
    clearContent()
    header()
    menu()
    footer()
})

contactTab.addEventListener('click', () => {
    clearContent()
    header()
    contact()
    footer()
})

function clearContent(){
    const content = document.getElementById('content')
    content.innerHTML = ""
}