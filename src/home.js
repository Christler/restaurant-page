import image1 from './images/home-images/pizza1.jpg'
import image2 from './images/home-images/pizza2.jpg'
import image3 from './images/home-images/pizza3.jpg'
import logo from "./images/logos/logo-transparent.png"

const imageArr = [image1, image2, image3]

export default function createHome(){
    const main = document.querySelector('.main')
    
    const heroSection = document.createElement('div')
    heroSection.className = 'hero'

    const heroLogo = document.createElement('img')
    heroLogo.src = logo
    
    heroSection.append(heroLogo)
    
    const infoSection = document.createElement('div')
    infoSection.className = 'info'

    const infoHeading = document.createElement('h2')
    infoHeading.innerHTML = 'Pizza Done Right' 

    const infoP = document.createElement('p')
    infoP.innerHTML = 'We take no shortcuts! Our pizza dough is made from scratch, double proofed for 24 hours, then hand-rolled and tossed the traditional way for unmatched flavor. We hand shred our whole milk mozzarella and slice our meats and vegetables fresh every morning. Everything is made to order. No frozen crusts or bagged cheese here. We like to consider ourselves old school and the proof is in our Pizza!'
    
    infoSection.append(infoHeading, infoP) 

    const imageGrid = document.createElement('div')
    imageGrid.className = 'imageGrid'

    for(let i = 0; i < imageArr.length; i++){
        let img = document.createElement('img')
        img.src = imageArr[i]
        imageGrid.append(img)
    }

    //add sections to main
    main.append(heroSection, imageGrid, infoSection)
      
}
