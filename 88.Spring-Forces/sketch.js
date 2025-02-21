
let y = 250;
let velocity = 0;
let restLength = 200;
let k = 0.01;

function setup() {
  createCanvas(600, 400);
}

function draw() {
 background(100, 180,155);
  noStroke();
  fill(45, 197, 244);
  circle(300, y, 64);

  let x = y - restLength;
  let force = -k * x;


  velocity += force;
  y += velocity;

  velocity *= 0.99;
}


     
  