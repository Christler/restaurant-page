export default function createMainSection(){
    const content = document.querySelector('#content')
    const main = document.createElement('div')
    main.className = 'main'
    content.append(main)
}