const container = document.querySelector("#container");

// let gridSize = prompt("Enter the number of elements");

const button = document.querySelector("button");

let gridSize = 4;

for (let i = 0; i < gridSize * gridSize; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = "red";
  });
}

button.addEventListener("click", () => {
  gridSize = prompt("Enter the number of elements in a row");

  for (let i = 0; i < gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "red";
    });
  }
});
