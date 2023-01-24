let size = 16;
let color = "black";
let pens = ["pen", "normal", "bold", "bolder"];

const container = document.querySelector(".container");

const board = document.querySelector(".board");
board.style.display = "grid";

const eraser = document.createElement("button");
eraser.innerText = "eraser";

const clear = document.createElement("button");
clear.innerText = "clear";

const selectPen = document.createElement("select");

for (const pen of pens) {
    let option = document.createElement("option");
    option.innerText = pen;
    option.id = pen;
    selectPen.appendChild(option);
}

function penOptions (event) {
    const value = event.target.value;
    if (value === "normal") {
        color = "black";
        size = 64;
        clearBoard();
        render();
    }
    if (value === "bold") {
        color = "black";
        size = 32;
        clearBoard();
        render();
    }

    if (value === "bolder") {
        color = "black";
        size = 16;
        clearBoard();
        render();
    }
}

function erase () { color = "white"; }

function clearBoard () {
    board.innerHTML = "";
    render();
}

function changeColor (event) {
    event.target.style.backgroundColor = `${color}`;
}

// create grid and render board
function render () {
    board.style.gridTemplateColumns = `repeat(${size}, 0.5fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 0.5fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList = "item";
        div.id = i;
        //div.innerText = i;
        div.onmouseover = changeColor;
        board.appendChild(div);
    }
}

container.appendChild(eraser);
container.appendChild(selectPen);
container.appendChild(clear);

function run () {
    render();
    eraser.onclick = erase;
    selectPen.onclick = penOptions;
    clear.onclick = clearBoard;
}

run();