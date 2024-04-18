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


createNumberNewDivIntoParent(16,"row", container); 
createNumberOfColumns(16); 