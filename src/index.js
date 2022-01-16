import './style.css'
import header from './header.js'
import main from './main-section.js'
import home from './home.js'
import menu from './menu.js'
import contact from './contact.js'
import footer from './footer.js'

header()
main()
home()
footer()

const homeTab = document.querySelector('#homeTab')
const menuTab = document.querySelector('#menuTab')
const contactTab = document.querySelector('#contactTab')

homeTab.addEventListener('click', (e) => {
    clearContent()
    home()
    setActiveTab(e)
})

menuTab.addEventListener('click', (e) => {
    clearContent()
    menu()
    setActiveTab(e)
})

contactTab.addEventListener('click', (e) => {
    clearContent()
    contact()
    setActiveTab(e)
})

function setActiveTab(tab){
    const tabs = document.querySelectorAll('.navTab')
    tabs.forEach(tab => tab.classList.remove('active'))
    tab.srcElement.classList.add('active')
}

function clearContent(){
    const main = document.querySelector('.main')
    main.innerHTML = ""
}