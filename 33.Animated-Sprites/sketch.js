let animation = [];
let horses = [];

function preload() {
  for (let i = 0; i <= 6; i++) {
    let img = loadImage(`./assets/ice-horse-run-0${i}.png`);
    animation.push(img);
  }
}

function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(0);
}

//animation handle
class Sprite {
  constructor(animation, x, y, speed) {
    this.animation = animation;
    this.len = this.animation.length;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.index = 0;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y);
  }

  animate() {
    this.index += this.speed;
    this.x += this.speed * 2; // horizontal move
  }
}