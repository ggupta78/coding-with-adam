export default class Player {
  rightPressed = false;
  leftPressed = false;

  constructor(canvas, velocity) {
    this.canvas = canvas;
    this.velocity = velocity;

    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 75;
    this.width = 50;
    this.height = 48;
    this.image = new Image();
    this.image.src = "./images/player.png";

    document.addEventListener('keydown', this.keyDown);
    document.addEventListener('keyup', this.keyUp);
  }

  draw(ctx) {
    this.move();
    ctx.drawImage(this.image, this.x, this.y,
                  this.width, this.height);
    this.collideWithWall();
  }

  move() {
    if (this.rightPressed) {
      this.x += this.velocity;
    } else if (this.leftPressed) {
      this.x += -this.velocity;
    }
  }

  collideWithWall() {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x > this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
    }
  }

  keyDown = event => {
    if (event.code === "ArrowRight") {
      this.rightPressed = true;
    }
    if (event.code === "ArrowLeft") {
      this.leftPressed = true;
    }
  };

  keyUp = event => {
    if (event.code === "ArrowRight") {
      this.rightPressed = false;
    }
    if (event.code === "ArrowLeft") {
      this.leftPressed = false;
    }
  };
}
