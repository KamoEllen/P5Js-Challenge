let animation = [];

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
  //this is to show first frame of the animation
  image(animation[0], 0, 0);
}