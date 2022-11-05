const canvas = document.getElementById("gameArea")
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 50;
let speed = 10;

let leftPressed = false;
let upPressed = false;
let rightPressed = false;
let downPressed = false;

function drawGame() {
  requestAnimationFrame(drawGame);
  clearScreen();
  inputs();
  boundaryCheck();
  drawGreenBlob();
}

function boundaryCheck() {
  if (y < radius) y = radius;
  if (x < radius) x = radius;
  if (y > canvas.height - radius) y = canvas.height - radius;
  if (x > canvas.width - radius) x = canvas.width - radius;
}

function inputs() {
  if(leftPressed) {
    x -= speed;
  }
  if(upPressed) {
    y -= speed;
  }
  if(rightPressed) {
    x += speed;
  }
  if(downPressed) {
    y += speed;
  }
}

function drawGreenBlob() {
  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
}

function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);  name
}

document.body.addEventListener('keydown', keyDown);
document.body.addEventListener('keyup', keyUp);

function keyDown(event) {
  // Left arrow key
  if(event.keyCode == 37) {
    leftPressed = true;
  }
  // Up arrow key
  if(event.keyCode == 38) {
    upPressed = true;
  }
  // Right arrow key
  if(event.keyCode == 39) {
    rightPressed = true;
  }
  // Down arrow key
  if(event.keyCode == 40) {
    downPressed = true;
  }
}

function keyUp(event) {
  // Left arrow key
  if(event.keyCode == 37) {
    leftPressed = false;
  }
  // Up arrow key
  if(event.keyCode == 38) {
    upPressed = false;
  }
  // Right arrow key
  if(event.keyCode == 39) {
    rightPressed = false;
  }
  // Down arrow key
  if(event.keyCode == 40) {
    downPressed = false;
  }
}

drawGame();
