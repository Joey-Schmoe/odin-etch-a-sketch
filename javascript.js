//CREATE grid of 16 divs
//  APPEND to grid-container div

const gridContainer = document.querySelector('#grid-container');

function createGrid(rows, cols, size) {
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

createGrid(8, 8, 100);