let pos;

function setup() {
  createCanvas(400, 400);
  background(0);
  pos = createVector(200,200);
}

function draw() {
  stroke(255);
  strokeWeight(2);
point(pos.x,pos.y);
  var step = p5.Vector.random2D();
  pos =pos +step;


}