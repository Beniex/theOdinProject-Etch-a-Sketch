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
for(var i=0; i<16; i++){
    const newDiv = document.createElement("div"); 
    newDiv.classList.add("row");  
    container.appendChild(newDiv); 
    }

//createNumberOfColumns(16); 
    var rows = document.querySelectorAll("#container .row"); 
    var rowsLength = rows.length; 
    for(var i=0; i<rowsLength; i++){
        //createNumberNewDivIntoParent(numberOfColumns, "column", rows[i]);
        for(var j=0; j<16; j++){
            const newDiv = document.createElement("div"); 
            newDiv.classList.add("column");  
            newDiv.addEventListener("mouseenter", function(){
                newDiv.style.backgroundColor = "blue"; 
            })
            rows[i].appendChild(newDiv); 
            }
    }
