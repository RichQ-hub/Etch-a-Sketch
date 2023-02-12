
const DEFAULT_SIZE = 16;

// Globals.
let currentSize = DEFAULT_SIZE;

/**
 * Creates the grid to draw on.
 */
function createGrid() {
    let grid = document.getElementById('grid');
    for (let row = 0; row < currentSize; row++) {
        for (let col = 0; col < currentSize; col++) {
            let newCell = document.createElement('div');
            newCell.classList.add('grid-item');
            grid.appendChild(newCell);
        }
    }
}

/**
 * Main Function.
 */
function startup() {
    createGrid();
}

// This function runs as soon as the whol webpage is loaded.
window.addEventListener('load', startup)