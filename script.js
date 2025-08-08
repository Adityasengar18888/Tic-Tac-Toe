let boxes = document.querySelectorAll(".box");
let reserbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

const winning= new Audio("win.wav");

let turnO = true; //playerX, playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  let turnO = true;
  enableboxes();
  msgContainer.classList.add("hide");
  winning.pause();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      // turn of player 0
      box.innerText = "O";
      turnO = false;
    } else {
      // turn of player x
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true; // for X and O can't be changed in a single box again and again

    checkWinner();
  });
});

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Winner Winner Chicken Dinner for ${winner}`;
  msgContainer.classList.remove("hide");
  winning.play();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        disableboxes();
        showWinner(pos1val);
      }
    }
  }
};

newGamebtn.addEventListener("click", resetGame);
reserbtn.addEventListener("click", resetGame);
