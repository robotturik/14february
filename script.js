const button1 = document.getElementById('yes')
const button2 = document.getElementById('no')
const img = document.getElementById('img')

let currentWidth = 100;
let currentHeight = 50;

function increaseButton() {
    currentHeight += 100;
    currentWidth += 100;
    button1.style.width = currentWidth + 'px';
    button1.style.height = currentHeight + 'px'
}

button2.addEventListener('click', increaseButton)

function increaseButton1() {
    button1.style.display = 'none';
    button2.style.display = 'none';
    img.style.display = 'block'
}

button1.addEventListener('click', increaseButton1)