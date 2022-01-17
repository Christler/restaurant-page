import cheeseImg from './images/menu-images/cheese.jpeg'
import pepperoniImg from './images/menu-images/pepperoni.jpeg'
import meatImg from './images/menu-images/meat.jpeg'
import gardenImg from './images/menu-images/garden.jpeg'
import deluxeImg from './images/menu-images/deluxe.jpeg'

export default function createMenu(){

    const main = document.querySelector('.main')

    const heading = document.createElement('h1')
    heading.className = 'heading'
    heading.innerHTML = 'Menu'

    const menu = document.createElement('div')
    menu.className = 'menu'

    menu.append(createMenuItem(
        cheeseImg,
        'Cheese', 
        'Cheese Pizza with a Blend of Five Cheeses including Cheddar and our Shaved Parmesan',
        10.99, 11.99, 12.99))
    menu.append(createMenuItem(
        pepperoniImg,
        'Pepperoni', 
        'Old World Pepperoni, our signature sauce and three-cheese blend, with romesan seasoning',
        11.99, 12.99, 13.99))
    menu.append(createMenuItem(
        meatImg,
        'Meat Lovers', 
        'Classic pepperoni, ham, Italian sausage, bacon, our signature sauce and three-cheese blend',
        12.99, 13.99, 14.99))
    menu.append(createMenuItem(
        gardenImg,
        'Garden', 
        'Mushrooms, black olives, onions, sliced tomatoes, our signature sauce and three-cheese blend, plus feta',
        12.99, 13.99, 14.99))
    menu.append(createMenuItem(
        deluxeImg,
        'Deluxe', 
        'Classic pepperoni, Italian sausage, mushrooms, green peppers, onions, our signature sauce and three-cheese blend',
        13.99, 14.99, 15.99))
    main.append(heading, menu)
}

function createMenuItem(image, name, description, smPrice, medPrice, lrgPrice){
    const menuItem = document.createElement('div')
    menuItem.className = 'menuItem'

    const pizzaImage = document.createElement('img')
    pizzaImage.src = image

    const pizzaInfo = document.createElement('div')
    pizzaInfo.className = 'pizzaInfo'

    const pizzaName = document.createElement('h2')
    pizzaName.innerHTML = name

    const pizzaDescription = document.createElement('p')
    pizzaDescription.className = 'description'
    pizzaDescription.innerHTML = description

    const prices = document.createElement('p')
    prices.className = prices
    prices.innerHTML = `Small $${smPrice} | Medium $${medPrice} | Large $${lrgPrice}`

    pizzaInfo.append(pizzaName, pizzaDescription, prices)
    menuItem.append(pizzaImage, pizzaInfo)

    return menuItem
}