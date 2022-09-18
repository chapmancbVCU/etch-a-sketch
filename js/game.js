/******************************************************************************
 *         Name: game.js
 *       Author: Chad Chapman
 * Date Created: September 17, 2022
 *  Description: Implementation for Etch-a-Sketch
******************************************************************************/

/******************************************************************************
 * GLOBAL VARIABLES
 *****************************************************************************/
// Set number of columns and rows.
const column = 16;
const row = 16


/******************************************************************************
 *        Name: updateColor
 * Description: Updates a block when the mouse hovers over it.
 *   Arguments: e - event captured by event listener.
 *     Returns: NONE
 *****************************************************************************/
function updateColor(e) {
    console.log(this.getAttribute('id'));
    this.style.backgroundColor = "grey";
    e.stopPropagation();
}


/******************************************************************************
 *        Name: createGrid
 * Description: Creates the grid for Etch-a-Sketch
 *   Arguments: column - number of columns
 *              rows - number of rows
 *     Returns: NONE
 *****************************************************************************/
function createGrid(column, row) {
    for(let i = 0; i < column; i++) {
        for(j = 0; j < row; j++) {
            const block = document.createElement('div');
            block.classList.add('block');
            block.style.height = container.clientHeight / column + 'px';
            block.style.width = container.clientWidth / row + 'px';
            block.style.backgroundColor = 'lightgrey';
            block.setAttribute("id", `${i},${j}`)
            container.append(block);
        }
    }
}

// Create grid
const container = document.querySelector('#container');
createGrid(column, row);

// Setup event listening capability for mouse hover.
const blockDiv = document.querySelectorAll('.block');

blockDiv.forEach(block => block.addEventListener('mouseover', updateColor, {
    
}));

