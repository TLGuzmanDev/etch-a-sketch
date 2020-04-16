const defaultSize = 16;
const container = document.querySelector('#container');
const resetButton = document.querySelector('#btn');
resetButton.addEventListener('click', resetGrid);
createBlock(defaultSize);

function createBlock(size) {
    container.style.grid = `repeat(${size}, 1fr) / repeat(${size} ,1fr)`;
    for(i = 0; i < size ** 2; i++) {
        let div = document.createElement('div');
        div.classList.toggle('block');
        div.addEventListener('mouseenter', () => changeColor(div));
        container.appendChild(div)
    }
}

function resetGrid() {
    document.getElementById('container').textContent = '';
    console.log('cleared');
    let size = prompt('Enter size of grid side');
    createBlock(size);
}

function changeColor(element) {
    if (element.style.backgroundColor == '') {
        element.style.backgroundColor = getRandomColor();
    } 
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }