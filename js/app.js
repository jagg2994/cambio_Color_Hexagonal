const body = document.querySelector('body')
const button = document.querySelector('a')


const hexValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A','B','C','D','E','F']

button.addEventListener('click', changeColors)

function changeColors() {
    let hex = '#'
    for (let i = 0; i < 6; i++) {        
        let index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index]
        console.log(hex);
    }
    
    body.style.backgroundColor = hex;
    let objetivo = document.getElementById('hex-value');
    objetivo.innerHTML = hex; 

}
