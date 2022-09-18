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
let column = 16;
let row = 16


/******************************************************************************
 *        Name: checkSize
 * Description: Checks size and alerts user if size is too large.  Then creates
 *              new game.  If size is too large it is set to default 16x16
 *              size.
 *   Arguments: size - Integer value to set new size of grid.
 *     Returns: NONE
 *****************************************************************************/
function checkSize(size) {
    if(Number.isInteger(size)) {
        if(size >= 16 && size <= 100) {
            column = size - 1;
            row = size - 1;
            createGrid(column, row);
        } else {
            alert("Size must be an integer more than 16 and less than 100.");
            createGrid(16, 16);
        }
    } else {
        alert("Not an integer.");
        createGrid(16, 16);
    }
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
            block.setAttribute("id", `Column: ${i}, Row: ${j}`)
            container.append(block);
        }
    }

    // Setup event listening capability for mouse hover.
    const blockDiv = document.querySelectorAll('.block');

    blockDiv.forEach(block => block.addEventListener('mouseover', updateColor, {

    }));
}


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


// Create grid
const container = document.querySelector('#container');
createGrid(column, row);


// Setup event listener for creating new grid size
const button = document.querySelector('button');
button.addEventListener('click', function() {
    container.innerHTML = '';
    let size = prompt("Set new size from 16 to 100: ");
    checkSize(size);
});