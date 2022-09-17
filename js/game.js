/******************************************************************************
 *         Name: game.js
 *       Author: Chad Chapman
 * Date Created: September 17, 2022
 *  Description: Implementation for Etch-a-Sketch
******************************************************************************/

/******************************************************************************
 * GLOBAL VARIABLES
 *****************************************************************************/
const collumn = 16;
const row = 16


// Create grid
const container = document.querySelector('#container');

for(let i = 0; i < collumn; i++) {
    for(j = 0; j < row; j++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.height = container.clientHeight / 16 + 'px';
        block.style.width = container.clientWidth / 16 + 'px';
        block.style.backgroundColor = 'lightgrey';
        container.append(block);
    }
}
