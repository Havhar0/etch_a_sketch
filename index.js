


let popUp = document.querySelector("#btn-popup")
let color = 'black'
let click = false

document.addEventListener("DOMContentLoaded", function(){

    createBoard(32);

    document.querySelector('body').addEventListener('click', function(e){

        if (e.target.tagName != "BUTTON") {

            click = !click;

            let draw = document.querySelector('#draw')
                if(click) {
                    draw.innerHTML = "You can draw";
                }
                else{
                    draw.innerHTML = "You can't draw" 
                }
        }
    })


    popUp.addEventListener('click', function() {
        
        let size = whatSize()
        createBoard(size)

    })
})



function whatSize() {

    let message = document.querySelector('#message')
        let boardSize = prompt('What size is your board?')
    
        if ( boardSize == "" ){
            message.innerHTML = "Please enter your board size"
        }
        else if ( boardSize <=0 || boardSize > 100 ){
            message.innerHTML = "Board size must be between 0 and 100"
        }else {
            message.innerHTML = "Thank you"
        }
        return boardSize; 

}



function createBoard(size) {

    let board = document.querySelector(".board") 

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size
    
    for ( i = 0; i < numDivs; i++ ) {

        let div = document.createElement("div")
        div.addEventListener("mouseover", colorDiv);
        board.insertAdjacentElement('beforeend', div);
        
    }
}

function colorDiv() {

    if(click) {

        if (color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else {
            this.style.backgroundColor = "black";
        }
    }
}

function clearBoard() {

    let divs = document.querySelectorAll('div')
    divs.forEach( (div) => div.style.backgroundColor = "white")

}

function setColor(colorChoice){
    color = colorChoice
}