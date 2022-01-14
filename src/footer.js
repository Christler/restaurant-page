export default function createFooter(){
    
    const content = document.getElementById('content')

    const footer = document.createElement('footer')

    const copyright = document.createElement('p')
    copyright.innerHTML = `Copyright ${new Date().getFullYear()} Christler`

    footer.append(copyright)
    content.append(footer)
}