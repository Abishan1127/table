const rowsInput = document.getElementById("rows");
const columnsInput = document.getElementById("columns");
const grid = document.getElementById("grid");
function generateGrid() {
  const rows = parseInt(rowsInput.value);
  const columns = parseInt(columnsInput.value);
grid.innerHTML = "";
let cellNumber = 1;
  grid.style.gridTemplateColumns = `repeat(${columns}, auto)`;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const cell = document.createElement("div");
      cell.textContent = cellNumber++;
      grid.appendChild(cell);
    }
  }
}
rowsInput.addEventListener("input", generateGrid);
columnsInput.addEventListener("input", generateGrid);
generateGrid();
