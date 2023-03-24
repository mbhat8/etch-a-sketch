

const container = document.querySelector("#container");

//--------create grid-------
function makeGrid(rows, cols) {
  //Removing the existing button -------
  while (document.querySelector("button") !== null) {
    document.querySelector("button").remove();
  }
//------creation for Grid----copied from stackOverflow
  container.style.setProperty("--grid-rows", rows);
  container.style.setProperty("--grid-cols", cols);
  container.style.width = "960px";
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.style.minHeight = "0";
    cell.style.minWidth = "0";
    container.appendChild(cell).className = "grid-item";

    //------ Adding hovering effect on grid tiles-----
    cell.addEventListener("mouseover", (e) => {
      e.target.style.background = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();;
    });
  }
//---adding a button for user  input---
  createButton();
}
makeGrid(16, 16);

function createButton() {
  let buttonDiv = document.querySelector("#buttonDiv");
  let resetButton = document.createElement("button");
  resetButton.textContent = "Reset Grid";
  resetButton.style.margin = "1rem";
  resetButton.style.borderRadius = "2px orange";
  buttonDiv.appendChild(resetButton);

  resetButton.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach((e) => e.remove());
    let userInput = prompt("Enter the grid squares number for the custom grid");
    if (userInput > 100) {
      alert(
        "You have entered too  large number. Plz enter value less than 100"
      );
      return;
    }
    makeGrid(userInput, userInput);
  });
}
