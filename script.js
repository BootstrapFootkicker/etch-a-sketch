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
        let newGridContainer = document.createElement("div");
        newGridContainer.id = 'r' + i;
        newGridContainer.classList.add("grid-container");
        entireGridContainer.appendChild(newGridContainer);


    }

    for (let item of gridContainer) {


        for (let i = 0; i < rowNum; i++) {
            let gridBoxDiv = document.createElement("div");
            gridBoxDiv.id = 'r' + i;
            gridBoxDiv.classList.add("gridBox");
            item.appendChild(gridBoxDiv);
            gridBoxDiv.style.height = (36.5 / (rowNum / 16)).toString() + "px";
            gridBoxDiv.style.width = (36.5 / (rowNum / 16)).toString() + "px";
            console.log((50 * (rowNum / 16)).toString() + 'px');

        }

    }
    for (let item of gridCollection) {
        item.addEventListener("mouseover", (event) => addGridColor(item));

    }

}


createGrid(16);


gridSizeButton.addEventListener("click", (event) => getButtonInput());

