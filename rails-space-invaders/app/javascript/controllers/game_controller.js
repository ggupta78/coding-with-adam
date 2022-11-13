import { Controller } from "@hotwired/stimulus"
import GameAssets from "./GameAssets.js"

export default class extends Controller {
  static targets = [ "canvas" ]
  static values = {
    url: String
  }

  initialize() {
    //Todo: Pre-load all assets!!!
    // Might need to show a preload gif/animation for a few seconds and then,
    // show the game canvas, OR
    // Look at No Javascript option on https://www.mediacollege.com/internet/javascript/image/preload.html
    // i.e. keep hidden images on page and then try to use them via targets? or just doc.getElementById :)
    // Load them on application.html.erb or the Menu bar? But how to get access in stimulus constroller?
    // Declare an application controller?
    // https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
    this.background = new Image();
    this.background.src = GameAssets.backgroundImg;
    // this.background.src = this.urlValue;
    this.canvas = null;
    this.ctx = null;
  }

  connect() {
    console.log("connected...");
    // console.log(this.urlValue);
    this.canvas = this.canvasTarget;
    this.ctx = this.canvas.getContext("2d");

    this.canvas.width = 600;
    this.canvas.height = 600;

    // this.background.src = this.urlValue;

    setInterval(this.game(this.ctx), 1000 / 60)
    // this.game();
    // this.delay(3000).then(() => setInterval(this.game(this.ctx), 1000 / 60))
    // this.element.textContent = "Hello World!";
  }

  delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

  game(ctx) {
    // console.log('in game...');
    // console.log(this.ctx);
    // if (this.background.complete && this.background.naturalHeight !== 0) {
      ctx.drawImage(this.background, 0, 0, this.canvas.width, this.canvas.height);
    // }
  }
}
