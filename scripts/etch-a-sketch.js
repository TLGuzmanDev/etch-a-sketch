const container = document.getElementById('container');
const defaultSize = 16;


function createBlock(size) {
    container.style.grid = 'repeat(' + size + ', 1fr)/repeat(' + size +', 1fr)';
    for(i = 0; i < size * size; i++) {
        var div = document.createElement('DIV');
        div.setAttribute('class', 'block');
        div.onmouseenter = function() {changeColor(this)};
        container.appendChild(div)
    }
}

function resetGrid() {
    document.getElementById('container').innerHTML = '';
    console.log('cleared');
    var size = prompt('Enter size of grid side');
    createBlock(size);
}

function changeColor(element) {
    if (element.style.backgroundColor == '') {
        element.style.backgroundColor = getRandomColor();
    } 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

const button = document.getElementById('button0');
button.onclick = resetGrid;
createBlock(defaultSize);