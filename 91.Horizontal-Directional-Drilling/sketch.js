
let pos;
let dir;
let bias = 1;
let path = [];

function setup() {
  createCanvas(600, 400);
  pos = createVector(10, 100);
  dir = p5.Vector.fromAngle(0);

  createButton("toggle bias").mousePressed(function () {
    bias *= -1;
  });
}

function drill() {
  
  const angle = 0.01;
  dir.rotate(angle * bias);
  
  
  path.push(pos.copy());
  pos.add(dir);
}

function draw() {
  drill();

  background(100, 255,155);
  noStroke();
  rectMode(CORNER);
  fill(155, 100, 255);
  rect(0, 100, width, height - 100);
  fill(255, 100, 155);
  arc(width / 2, 100, 400, 200, 0, PI);

  beginShape();
  noFill();
  stroke(255);
  strokeWeight(4);
  for (let v of path) {
    vertex(v.x, v.y);
  }
  endShape();

  stroke(252, 238, 33);
  strokeWeight(8);
  push();
  translate(pos.x, pos.y);
  rotate(dir.heading() + (PI / 6) * bias);
  line(0, 0, 10, 0);
  pop();
}

   