let game_status = 1;

let playerTurnMessage = document.getElementById("player_turn");
playerTurnMessage.innerHTML = "blue";

function handleClick(e) {
  if (game_status === 0) {
    if (!e.target.classList.contains("ok")) {
      e.target.classList.add("red");
      e.target.classList.add("ok");
      playerTurnMessage.innerHTML = "blue";
      game_status = 1;
    }
  } else {
    if (!e.target.classList.contains("ok")) {
      e.target.classList.add("blue");
      e.target.classList.add("ok");
      playerTurnMessage.innerHTML = "red";
      game_status = 0;
    }
  }
}

function handleMouseEnter(e) {
  if (!e.classList) {
    if (game_status === 0) {
      e.target.classList.add("red");
    } else {
      e.target.classList.add("blue");
    }
  }
}

function handleMouseLeave(e) {
  if (e.target.classList.contains("red")) {
    if (!e.target.classList.contains("ok")) {
      e.target.classList.remove("red");
    }
  }
  if (e.target.classList.contains("blue")) {
    if (!e.target.classList.contains("ok")) {
      e.target.classList.remove("blue");
    }
  }
}

let lines = document.querySelectorAll(".horizontal_line, .vertical_line");
// let allVerticalLines = document.querySelectorAll("");

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  line.addEventListener("click", (e) => {
    handleClick(e);
  });
  line.addEventListener("mouseenter", (e) => {
    handleMouseEnter(e);
  });
  line.addEventListener("mouseleave", (e) => {
    handleMouseLeave(e);
  });
}
