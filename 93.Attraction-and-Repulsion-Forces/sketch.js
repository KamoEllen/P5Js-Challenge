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

  particles.push(new Particle(random(width), random(height)));

  if (particles.length > 100) {
    particles.splice(0, 1);
  }

  for (let i = 0; i < attractors.length; i++) {
    stroke(0, 255, 0);
    strokeWeight(4);
    point(attractors[i].x, attractors[i].y);
  }

  for (let i = 0; i < particles.length; i++) {
    let particle = particles[i];
    for (let j = 0; j < attractors.length; j++) {
      particle.attracted(attractors[j]);
    }
    particle.update();
    particle.show();
  }
}