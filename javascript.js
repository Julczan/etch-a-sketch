const container = document.querySelector("#container");

function changeGridSize() {
  let rowSize = prompt("Enter the number of elements");
  if (rowSize > 100 || rowSize < 0) {
    alert("Cannot make that grid");
  } else {
    createGrid(rowSize);
  }
}

function removeChildren() {
  container.replaceChildren();
}

function randomHexColorCode() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  color = "#" + n.slice(0, 6);
  return color;
}

function createGrid(rowSize) {
  let calculatedWidth = 100 / rowSize;

  for (let i = 0; i < rowSize ** 2; i++) {
    const square = document.createElement("div");
    square.setAttribute("id", "square");
    square.style["width"] = calculatedWidth + "%";

    container.appendChild(square);

    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = randomHexColorCode();
    });
  }
}

let button = document.querySelector("button");
button.addEventListener("click", () => {
  removeChildren();
  changeGridSize();
});
createGrid(4);
