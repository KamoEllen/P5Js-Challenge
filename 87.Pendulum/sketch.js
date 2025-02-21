
let angle;

let angleV = 0;
let angleA = 0;

let bob;
let len;
let origin;

let gravity = 1;

function setup() {
  createCanvas(600, 600);
  origin = createVector(300, 0);
  angle = PI / 4;
  bob = createVector();
  len = 200;
}

function draw() {
    background(180,100,155)

  let force = gravity * sin(angle);
  angleA = (-1 * force) / len;
  angleV += angleA;
  angle += angleV;


  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(255);
  strokeWeight(8);
  fill(127);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 64);
}
