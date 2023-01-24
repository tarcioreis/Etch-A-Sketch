//const size = window.prompt();

const container = document.querySelector(".container");
container.style.display = "grid";

function changeColor (event) {
    event.target.style.backgroundColor = "black";
}

// create grid
function render (size) {
    container.style.gridTemplateColumns = `repeat(${size}, 0.5fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 0.5fr)`;
    
    for (let i = 0; i < size * size; i++) {
        let div = document.createElement("div");
        div.classList = "item";
        div.id = i;
        //div.innerText = i;
        div.onmouseover = changeColor;
        container.appendChild(div);
    }
}

function test () {
    render(16);
}

test();