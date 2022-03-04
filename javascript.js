//CREATE grid of 16 divs
//  APPEND to grid-container div

const gridContainer = document.querySelector('#grid-container');

const rowsInput = document.querySelector('#rows-input');
const colsInput = document.querySelector('#cols-input');

const defaultSize = 8;
let lastSize = defaultSize;

const generationButtons = document.querySelectorAll('.generation-button');
const clearButton = document.querySelector('#clear-button');

clearButton.addEventListener('click', () => {
    createGrid(lastSize);
});

generationButtons[0].addEventListener('click', () => createGrid(8));
generationButtons[1].addEventListener('click', () => createGrid(16));
generationButtons[2].addEventListener('click', () => createGrid(32));
generationButtons[3].addEventListener('click', () => createGrid(64));



function createGrid(size) {
    //Clear grid
    removeAllChildNodes(gridContainer);

    for (let i = 0; i < size ** 2; i++) {
        let cell = document.createElement('div');
        cell.classList.add("cell");
        cell.addEventListener('mouseover', (e) => {
            darkenCell(e);
        });
        gridContainer.appendChild(cell);
    }

    gridContainer.style.gridTemplateColumns = `repeat(${size}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, auto)`;

    lastSize = size;
}

function darkenCell(e) {
    let o = e.target.style.opacity;
    e.target.style.opacity = +o + .25;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

createGrid(defaultSize);