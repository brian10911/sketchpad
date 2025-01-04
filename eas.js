const GRIDSIZE = 600;
let squaresPerSize = 16;

const sketchBox = document.querySelector("#container");
const gridSlider = document.querySelector("#grid-slider");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value} (Resolution)`;
sketchBox.style.width = sketchBox.style.height = `${GRIDSIZE}px`;

function setBackgroundColor(){
    this.style.backgroundColor = 'black';
}

function createGridCells(squaresPerSize){
    const numsOfSquares = squaresPerSize * squaresPerSize;
    const widthOrHeight = `${(GRIDSIZE / squaresPerSize) - 2}px`;
    for (let i = 0; i < numsOfSquares; i++)
        {
            const gridCell = document.createElement("div");
            
            gridCell.style.width = gridCell.style.height = widthOrHeight;
            gridCell.classList.add("cell");

            sketchBox.appendChild(gridCell);

            gridCell.addEventListener('mouseover', setBackgroundColor);
        }
}

function removeGridCells(){
    while(sketchBox.firstChild)
        {
            sketchBox.removeChild(sketchBox.firstChild);
        }
}
slider.oninput = function() {
    let txt = `${this.value} x ${this.value} (Resolution)`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createGridCells(this.value);
}

createGridCells(16);
