//Initializes grid size, selected HTML elements, and number of squares per side
const GRID_SIZE = 960;
const div = document.querySelector('#container');
const btn = document.querySelector('button');
let numberOfSquares = 10;

/**
 * createGrid():
 * Creates a grid based on the numberOfSquares variable and GRID_SIZE.
 */
function createGrid(){
    const resolution = numberOfSquares * numberOfSquares;
    const squareSize = GRID_SIZE/numberOfSquares;

    for(let i = 0; i < resolution; i++){
        const square = document.createElement('div');
        square.classList.add('yellow-red');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        div.appendChild(square);
    }
}

/**
 * replaceGrid():
 * Replaces current grid with a grid with a new resolution.
 */
function replaceGrid(){
    div.innerHTML = '';
    createGrid();
}

/**
 * setResolution():
 * Sets a new resolution based on the user input. 
 * Will output and cancel resolution change if resolution
 * cannot exceed 100 or go under 0.
 */
function setResolution(){
    let userInput = prompt('Input the new resolution. (Max 100 squares)');

    if(userInput == null || userInput.trim() === '') return;

    const newNumberOfSquares = parseInt(userInput);

    if(newNumberOfSquares > 100){
        alert('ERROR: Resolution cannot be over 100.');
    }else if(newNumberOfSquares < 0){
        alert('ERROR: Resolution cannot be under 0.');
    }else if(Number.isNaN(newNumberOfSquares)){
        alert('ERROR: Resolution has to be an integer.')
    }else{
        numberOfSquares = newNumberOfSquares;
        replaceGrid();
    }
}

//Event listener activates if mouse hovers over square element in grid.
//Changes the square's colour based on current colour.
div.addEventListener('mouseover', (event) => {
    let divTarget = event.target;
   if(divTarget.classList.contains('red-pink')){
    divTarget.classList.remove('red-pink');
    divTarget.classList.add('light-pink');
   }else if(divTarget.classList.contains('light-pink')){
    divTarget.classList.remove('light-pink');
    divTarget.classList.add('yellow-red');
   }else if(divTarget.classList.contains('yellow-red')){
    divTarget.classList.remove('yellow-red');
    divTarget.classList.add('light-green');
   }else if(divTarget.classList.contains('light-green')){
    divTarget.classList.remove('light-green');
    divTarget.classList.add('pastel-green');
   }else if(divTarget.classList.contains('pastel-green')){
    divTarget.classList.remove('pastel-green');
    divTarget.classList.add('red-pink');
   }
});

//Event listener activates if user clicks the 'Change Resolution' button.
btn.addEventListener('click', setResolution);
createGrid();