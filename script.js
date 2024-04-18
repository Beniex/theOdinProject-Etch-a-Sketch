const container =document.getElementById("container");

function createNumberNewDivIntoParent(number, newDivClass, parent){
    for(var i=0; i<number; i++){
    const newDiv = document.createElement("div"); 
    newDiv.classList.add(newDivClass);  
    parent.appendChild(newDiv); 
    }
}

function createNumberRows(numberofRows){
    createNumberNewDivIntoParent(numberofRows,"row", container); 
}

function createNumberOfColumns(numberOfColumns){
    var rows = document.querySelectorAll("#container .row"); 
    var rowsLength = rows.length; 
    for(var i=0; i<rowsLength; i++){
        createNumberNewDivIntoParent(numberOfColumns, "column", rows[i]);
    }
} 

//createNumberNewDivIntoParent(16,"row", container); 
function createRowsIntoContainer(number){
for(var i=0; i<number; i++){
    const newDiv = document.createElement("div"); 
    newDiv.classList.add("row");  
    container.appendChild(newDiv); 
    }
}


//createNumberOfColumns(16); 

function createSquaresIntoRows(number){

var rows = document.querySelectorAll("#container .row"); 
var rowsLength = rows.length; 
    for(var i=0; i<rowsLength; i++){
        //createNumberNewDivIntoParent(numberOfColumns, "column", rows[i]);

        for(var j=0; j<number; j++){
            const newDiv = document.createElement("div"); 
            newDiv.classList.add("column");  
            newDiv.addEventListener("mouseenter", function(){
                newDiv.style.backgroundColor = getRandomColor(); 
            })
            rows[i].appendChild(newDiv); 
            }
    }
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

createRowsIntoContainer(16); 
createSquaresIntoRows(16); 

