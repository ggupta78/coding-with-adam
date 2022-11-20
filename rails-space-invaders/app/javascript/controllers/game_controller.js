import { Controller } from "@hotwired/stimulus"
import GameAssets from "./GameAssets.js"
import BulletController from "./BulletController.js"
import Player from "./Player.js"

export default class extends Controller {
  static targets = [ "canvas" ]
  static values = {
    assets: String
  }

  initialize() {
    this.canvas = null;
    this.ctx = null;
  }

  imageLoaded(src, alt = '') {
    return new Promise(function(resolve) {
        let image = new Image();

        image.setAttribute('alt', alt);
        image.setAttribute('src', src);
        console.log("loading ..." + src)
        image.addEventListener('load', function() {
          console.log("loaded..." + src);
          resolve(image);
        });
    });
}

  loadAssets() {
    let assetURLs = JSON.parse(this.assetsValue);
    // console.log(assetURLs);
    // console.log(this.assetsAreLoading);
    // console.log("starting image load...");
    // this.background = await this.imageLoaded(assetURLs['space']);
    // this.playerImage = await this.imageLoaded(assetURLs['player']);
    // console.log("ended image load...");
    // this.assetsAreLoading = false;
    // console.log(this.assetsAreLoading);

    // this.canvas = this.canvasTarget;
    // this.ctx = this.canvas.getContext("2d");

    // this.canvas.width = 600;
    // this.canvas.height = 600;

    // this.assetsAreLoading = true;

    // this.playerBulletController = new BulletController(this.canvas, 10, "red", false); //sound disabled
    // // // const enemyBulletController = new BulletController(canvas, 4, "white", false);
    // // // const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
    // this.player = new Player(this.canvas, 3, null, this.playerImage);//playerBulletController);

    // setInterval(this.game(this.ctx), 1000 / 60);
    // this.assetsLoading = false;
    this.background = new Image();
    this.background.src = assetURLs['space']; //GameAssets.backgroundImg;
    console.log(this.background);
    this.background.addEventListener('load', () => {
      this.playerImage = new Image();
      this.playerImage.src = assetURLs['player'];
      this.playerImage.addEventListener('load', (this) => {
        this.playerBulletController = new BulletController(this.canvas, 10, "red", false); //sound disabled
        this.player = new Player(this.canvas, 3, null, this.playerImage);//playerBulletController);
        setInterval(game, 1000 / 60);
        // this.game();
      })

    }, false);
  }

  connect() {
    const start = Date.now();
    console.log(`Connected...${Date.now() - start}`);

    this.canvas = this.canvasTarget;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 600;
    this.canvas.height = 600;

    // this.assetsAreLoading = true;
    this.loadAssets();

    // this.playerBulletController = new BulletController(this.canvas, 10, "red", false); //sound disabled
    // // const enemyBulletController = new BulletController(canvas, 4, "white", false);
    // // const enemyController = new EnemyController(canvas, enemyBulletController, playerBulletController);
    // this.player = new Player(this.canvas, 3, null, this.playerImage);//playerBulletController);

    // this.game(this.ctx);
    // this.player.draw(this.ctx);

    // console.log(`Called this.game()...${Date.now() - start}`);
    // this.game(this.ctx);

    //setInterval(this.game(this.ctx), 1000 / 30)
    // this.game();
    // this.delay(3000).then(() => setInterval(this.game(this.ctx), 1000 / 60))
    // this.element.textContent = "Hello World!";
  }

  keyDown(event) {
    console.log(event.code);
    if (this.player) {
      if (event.code === "ArrowRight") {
        this.player.rightPressed = true;
      }
      if (event.code === "ArrowLeft") {
        this.player.leftPressed = true;
      }
      if (event.code === "Space") {
        this.player.shootPressed = true;
      }
    }
    console.log(this.player);
  }

  keyUp(event) {
    console.log(event.code);
    if (this.player) {
      if (event.code === "ArrowRight") {
        this.player.rightPressed = false;
      }
      if (event.code === "ArrowLeft") {
        this.player.leftPressed = false;
      }
      if (event.code === "Space") {
        this.player.shootPressed = false;
      }
    }
    console.log(this.player);
  }

  game() {
    console.log('in game...');
    console.log(this.ctx);
    // if (this.background.complete && this.background.naturalHeight !== 0) {
      this.ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
      this.player.draw(this.ctx);
    // }
  }
}
