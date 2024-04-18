  
function createNewDivInContainer(){
    const container =document.getElementById("container");
    var newDiv = document.createElement("div"); 
    container.appendChild(newDiv); 
}

function createNumberNewDivIntoContainer(number){
    for(var i=0; i<number; i++){
    createNewDivInContainer();  
    }
}

createNumberNewDivIntoContainer(3); 

