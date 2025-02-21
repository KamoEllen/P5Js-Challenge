let attractors = [];
let particles = [];

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  attractors.push(createVector(mouseX, mouseY));
}

function draw() {
  background(200, 200, 155);
}