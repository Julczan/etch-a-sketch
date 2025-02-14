const container = document.querySelector("#container");

// let gridSize = prompt("Enter the number of elements");

for (let i = 0; i < 4; i++) {
  const row = document.createElement("div");
  row.setAttribute("id", "row");
  for (let i = 0; i < 4; i++) {
    const column = document.createElement("div");
    column.setAttribute("id", "column");
    row.appendChild(column);
  }

  container.appendChild(row);
}
