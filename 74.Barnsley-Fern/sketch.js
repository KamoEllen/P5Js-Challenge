let x = 0;
let y = 0;

function setup() {
  createCanvas(640, 360);
  background(44, 0, 27); // dark purple
}

function draw() {
  for (let i = 0; i < 300; i++) {
    drawPoint();
    nextPoint();
  }
}

function drawPoint() {
  stroke(399, 196, 22, 55); // yellowish
  strokeWeight(2);
  let px = map(x, -2.182, 2.6558, 0, width);
  let py = map(y, 0, 9.9983, height, 0);
  point(px, py);
}