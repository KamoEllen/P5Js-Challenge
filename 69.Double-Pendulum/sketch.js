let r1 = 125;
let r2 = 125;
let m1 = 10;
let m2 = 10;
let a1 = 0;
let a2 = 0;
let cx, cy;

function setup() {
  createCanvas(600, 350);
  a1 = PI / 2;
  a2 = PI / 2;
  cx = width / 2;
  cy = 50;
}

function draw() {
  background(250);
  translate(cx, cy);
  stroke(0);
  strokeWeight(2);

  let x1 = r1 * sin(a1);
  let y1 = r1 * cos(a1);

  let x2 = x1 + r2 * sin(a2);
  let y2 = y1 + r2 * cos(a2);
  line(0, 0, x1, y1);
  fill(0);
  ellipse(x1, y1, m1*2, m1*2);

  line(x1, y1, x2, y2);
  fill(0);
  ellipse(x2, y2, m2*2, m2*2)
}