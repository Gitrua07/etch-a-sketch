let numberOfSquares = 10;

function createGrid(){
    let resolution = numberOfSquares * numberOfSquares;
    let squareSize = 960/numberOfSquares;

    for(let i = 0; i < resolution; i++){
        const square = document.createElement('div');
        square.classList.add('red-pink');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        div.appendChild(square);
    }
}

function replaceGrid(){
    div.innerHTML = '';
    createGrid();
}

function setResolution(){
    let newNumberOfSquares = prompt('Input the new resolution. (Max 100 squares)');
    if(newNumberOfSquares <= 100 && newNumberOfSquares >= 0 && newNumberOfSquares != null &&
        newNumberOfSquares.trim() != ''
    ){
        numberOfSquares = newNumberOfSquares;
        replaceGrid();
    }else if(newNumberOfSquares >= 100){
        alert('ERROR: Resolution cannot be over 100.');
    }else if(newNumberOfSquares < 0){
        alert('ERROR: Resolution cannot be under 0.');
    }
}


const div = document.querySelector('#container');

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

const btn = document.querySelector('button');
btn.addEventListener('click', setResolution)
createGrid();