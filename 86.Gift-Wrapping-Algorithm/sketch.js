let currentVertex;
let nextVertex;
let index = 1;

function setup() {
  createCanvas(500, 500);
  let buffer = 20;
  for (let i = 0; i < 50; i++) {
    points.push(createVector(random(width), random(height)));
  }
  points.sort((a, b) => a.x - b.x);
  leftMost = points[0];
  currentVertex = leftMost;
  hull.push(currentVertex);
  nextVertex = points[1];
  index = 2;
}

function draw() {
  background(100, 155, 180);

  stroke(255);
  strokeWeight(8);
  for (let p of points) {
    point(p.x, p.y);
  }

  stroke(0, 255, 0);
  strokeWeight(32);
  point(leftMost.x, leftMost.y);
  stroke(200, 0, 255);
  strokeWeight(32);
  point(currentVertex.x, currentVertex.y);

  stroke(0, 255, 0);
  strokeWeight(2);
  line(currentVertex.x, currentVertex.y, nextVertex.x, nextVertex.y);
}