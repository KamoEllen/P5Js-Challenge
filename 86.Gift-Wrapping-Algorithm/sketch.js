
const points = [];
function setup() {
  createCanvas(500, 500);
  for (let i = 0; i < 50; i++) {
    points.push(createVector(random( width ), random(height)));
  }

}

function draw() {
    background(100,155,180)

  stroke(255);
  strokeWeight(8);
  for (let p of points) {
    point(p.x, p.y);
  }

}



   
  