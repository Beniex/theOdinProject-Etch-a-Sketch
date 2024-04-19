const container =document.getElementById("container");

function createRowsIntoContainer(numberOfRows){
for(var i=0; i<numberOfRows; i++){
    const newRow = document.createElement("div"); 
    newRow.classList.add("row");  
    container.appendChild(newRow); 
    }
}



function createSquaresIntoRows(numberOfSquarePerRow){
var rows = document.querySelectorAll("#container .row"); 
var rowsLength = rows.length; 
    for(var row=0; row<rowsLength; row++){
        for(var square=0; square<numberOfSquarePerRow; square++){

            const newSquare = document.createElement("div"); 
            newSquare.classList.add("column"); 

            newSquare.addEventListener("mouseenter", function(){
                newSquare.style.backgroundColor = getRandomColor();
            }); 
            rows[row].appendChild(newSquare); 
        }; 
    }; 
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var button = document.querySelector("button"); 
button.addEventListener("click", function(){
    let squarePerSide = prompt("how many square per side do you want?"); 
    while (container.firstChild) {
            container.removeChild(container.firstChild);
    }
    createRowsIntoContainer(squarePerSide); 
    createSquaresIntoRows(squarePerSide); 
})

createRowsIntoContainer(12); 
createSquaresIntoRows(12);  

