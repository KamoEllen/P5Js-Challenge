let t = 20;
let len = 10;

function setup() {
  createCanvas(600, 600);
  background(155, 180, 100);

  
  for (let col = 0; col < width; col += t) {
    stroke(255);
    strokeWeight(1);
    line(col, 0, col, height);
  }
}

function draw() {
  
}