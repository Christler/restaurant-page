export default function createHome(){
    const content = document.getElementById('content')
    const container = document.createElement('div')

    container.innerHTML = `
    <div class="hero">
        <h1>Pizza Restaurant</h1>
    </div>

    <div class="info">
        <h2>Pizza Done Right</h2>
        <p>The Pie takes no shortcuts! Our pizza dough is made from scratch, double proofed for 24 hours, then hand-rolled and tossed the traditional way for unmatched flavor. We hand shred our whole milk mozzarella and slice our meats and vegetables fresh every morning. Everything at The Pie is made to order. No frozen crusts or bagged cheese here. We like to consider ourselves old school and the proof is in The Pie!</p>
    </div>

    <div class="imageGrid">
        <!--Do a grid of pizza images-->
    </div>

    <footer>
        <p>Copyright 2022 Christler</p>
    </footer>`
    content.appendChild(container)
}
