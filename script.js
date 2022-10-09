const entireGridContainer = document.querySelector("#entire-grid-container");
const gridContainer = document.getElementsByClassName("grid-container");
const gridSizeButton = document.querySelector("#grid-sizing-button");
const gridCollection = document.getElementsByClassName("gridBox");

function addGridColor(gridBox) {
    gridBox.classList.add("hovered-grid-box");
}

function removeGridColor(gridBox) {
    gridBox.classList.remove("hovered-grid-box");
}

function getButtonInput() {
    let input = window.prompt("How many rows do you want");
    createGrid(input);
}


function createGrid(rowNum) {
    if (entireGridContainer.childNodes.length !== 0) {

        console.log('not empty');
        entireGridContainer.textContent = '';

    }

    for (let i = 0; i < rowNum; i++) {
        let newDiv = document.createElement("div");
        newDiv.id = 'r' + i;
        newDiv.classList.add("grid-container");
        entireGridContainer.appendChild(newDiv);

    }


    for (let item of gridContainer) {


        for (let i = 0; i < rowNum; i++) {
            let newDiv = document.createElement("div");
            newDiv.id = 'r' + i;
            newDiv.classList.add("gridBox");
            item.appendChild(newDiv);

        }

    }
    for (let item of gridCollection) {
        item.addEventListener("mouseover", (event) => addGridColor(item));

    }
}


createGrid(16);


gridSizeButton.addEventListener("click", (event) => getButtonInput());
