const container = document.querySelector("#container");

function changeGridSize() {
  let rowSize = prompt("Enter the number of elements");
  createGrid(rowSize);
}

function createGrid(rowSize) {
  let calculatedWidth = 100 / rowSize;

  for (let i = 0; i < rowSize ** 2; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "square");
    square.style["width"] = calculatedWidth + "%";

    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "red";
    });
  }
}

let button = document.querySelector("button");
button.addEventListener("click", () => {
  square.remove();
});
createGrid(4);

//Each element has to be a square
//while resizing squares have to get smaller
//removeChild doesn't work on the square
// how to remove multiple elements from the dom
