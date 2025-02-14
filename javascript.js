const container = document.querySelector("#container");

// let gridSize = prompt("Enter the number of elements");

let rowSize = 4;

console.log(rowSize ** 2);

let calculatedWidth = 100 / rowSize;
console.log(calculatedWidth);

for (let i = 0; i < rowSize ** 2; i++) {
  const square = document.createElement("div");
  square.setAttribute("id", "square");
  square.style["width"] = calculatedWidth + "%";

  container.appendChild(square);
}

//Each element has to be a square
//while resizing squares have to get smaller
