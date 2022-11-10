let color = "black"

document.addEventListener("DOMContentLoaded", function(){
    createBoard(32);

    let btnPopup = document.querySelector("#btn-popup");

    btnPopup.addEventListener('click', function() {
       let size = whatSize();
       createBoard(size);
    })

})

function createBoard(size) {

    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

   for(let i=0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function whatSize() {

    let gridChoice = prompt("Please enter size of the board");
    let message = document.querySelector("#message");
    if ( gridChoice == "" ) {
        message.innerHTML = "Please enter a number";
    } 
    else if ( gridChoice < 0 || gridChoice > 100 ) {
        message.innerHTML = "Please provide a number between 0 and 100"
    }
    else {
        message.innerHTML = "Thank you"
    }
    return gridChoice;
}

function colorDiv() {
    if ( color == 'random') {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = "black"
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach( (div) => div.style.backgroundColor = "white" )
}