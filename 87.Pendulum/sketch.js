let angle;
let bob;
let len;
let origin;

function setup() {
    createCanvas(400, 400);
    angle = PI/4;
    origin = createVector(300, 0);
    bob = createVector();
    len = 100;
  }
  
  function draw() {
      background(180,100,155)

      bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

      stroke(255);
      fill(200,300,100)
      strokeWeight(8);
      line(origin.x, origin.y, bob.x, bob.y);
      circle(bob.x, bob.y, 64);
  }