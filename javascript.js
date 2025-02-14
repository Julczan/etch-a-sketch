const container = document.querySelector("#container");

// let gridSize = prompt("Enter the number of elements");

for (let i = 0; i < 100; i++) {
  const square = document.createElement("div");
  square.setAttribute("id", "square");
  square.style["width"] = "10%";

  container.appendChild(square);
}

//Each element has to be a square
//while resizing squares have to get smaller
