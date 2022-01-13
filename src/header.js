export default function createHeader(){
    
    let content = document.getElementById('content')

    let header = document.createElement('header')

    let nav = document.createElement('nav')
    
    let homeTab = document.createElement('div')
    homeTab.id = 'homeTab'
    homeTab.innerHTML = 'Home'

    let menuTab = document.createElement('div')
    menuTab.id = 'menuTab'
    menuTab.innerHTML = 'Menu'

    let contactTab = document.createElement('div')
    contactTab.id = 'contactTab'
    contactTab.innerHTML = 'Contact Us'

    nav.append(homeTab, menuTab, contactTab)
    header.append(nav)
    content.append(header)
}