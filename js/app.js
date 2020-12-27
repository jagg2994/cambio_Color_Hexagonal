const body = document.querySelector('body')
const button = document.querySelector('a')

const NUMBER = 99;

body.style.backgroundColor = "#6A5ACD";

button.addEventListener('click', changeColors)

function changeColors() {
    let color1 = Math.floor(Math.random() * NUMBER)
    let color2 = Math.floor(Math.random() * NUMBER)
    let color3 = Math.floor(Math.random() * NUMBER)
    
    let COLOR = `#${color1}${color2}${color3}`
    body.style.backgroundColor = COLOR;

    
    let objetivo = document.getElementById('hex-value');
    objetivo.innerHTML = COLOR;
}