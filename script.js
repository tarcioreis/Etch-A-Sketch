let size = 16;
let color = "black";
let pens = ["pen", "normal", "bold", "bolder"];

let colors = ["colors", "red", "green", "blue", "yellow", "gold",
"silver", "blueviolet", "lime", "orange", "black"];

const container = document.querySelector(".container");
const tools = document.querySelector(".tools");

const board = document.querySelector(".board");
board.style.display = "grid";

const eraser = document.createElement("button");
eraser.innerText = "eraser";

const clear = document.createElement("button");
clear.innerText = "clear";

const createSelectElement = (parent, arrayOptions) => {
    let select = document.createElement("select");
    for (let i = 0; i < arrayOptions.length; i++) {
        let option = document.createElement("option");
        option.innerText = arrayOptions[i];
        select.appendChild(option);
    }

    parent.appendChild(select);
    return select;
}

const setColor = event => color = event.target.value;

const penOptions = event => {

    const value = event.target.value;
    if (value === "normal") {
        color = "black";
        size = 64;
        clearBoard();
        run();
    }
    if (value === "bold") {
        color = "black";
        size = 32;
        clearBoard();
        run();
    }

    if (value === "bolder") {
        color = "black";
        size = 16;
        clearBoard();
        run();
    }
}

const erase = () => color = "#fdfdfd";

const clearBoard = () => {
    board.innerHTML = "";
    run();
}

const changeDivColor = event =>
    event.target.style.backgroundColor = `${color}`;

// create grid and render board
const render = () => {
    board.style.gridTemplateColumns = `repeat(${size}, 0.5fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 0.5fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList = "item";
        div.id = i;
        div.onmouseover = changeDivColor;
        board.appendChild(div);
    }
}

const selectPen = createSelectElement(container, pens);
const selectColor = createSelectElement(container, colors);

tools.appendChild(eraser);
tools.appendChild(clear);
tools.appendChild(selectPen);
tools.appendChild(selectColor);

function run () {
    render();
    eraser.onclick = erase;
    selectPen.onclick = penOptions;
    selectColor.onclick = setColor;
    clear.onclick = clearBoard;
}

run();