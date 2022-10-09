const mainContainer = document.getElementsByClassName("grid-container");

function addGridColor(gridBox){
    gridBox.classList.add("hovered-grid-box")
}

function  removeGridColor(gridBox){
    gridBox.classList.remove("hovered-grid-box")
}

for (let item of mainContainer) {
    for (let i = 0; i < 16; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = 'r' + i;
        newDiv.classList.add("gridBox");
        item.appendChild(newDiv);
    }


}


const gridCollection = document.getElementsByClassName("gridBox");

for(let item of gridCollection){
    item.addEventListener("mouseover", (event)=>addGridColor(item));

}

