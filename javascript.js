//CREATE grid of 16 divs
//  APPEND to grid-container div

const gridContainer = document.querySelector('#grid-container');

const rowsInput = document.querySelector('#rows-input');
const colsInput = document.querySelector('#cols-input');
const buttonInput = document.querySelector('#button-input');

buttonInput.addEventListener('click', createGrid);

function createGrid() {
    //Get inpuut
    const rows = rowsInput.value;
    const cols = rowsInput.value;

    //Ensure input is valid
    if (rows <= 0 || cols <= 0) {
        console.log('ERROR: x or y argument for createGrid function has value of 0 or less');
        return;
    }

    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement('div');
        cell.classList.add("cell");
        gridContainer.appendChild(cell);
    }
}

createGrid();