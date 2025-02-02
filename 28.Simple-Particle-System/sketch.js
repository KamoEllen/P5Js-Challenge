let particles = [];
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(51, 51, 180);

  for (let i = 0; i < 5; i++) {
    let p = new Particle();
    particles.push(p);
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();

    if (particles[i].finish()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor() {
    this.x = 300;
    this.y = 380;
    this.vx = random(-1, 1);
    this.vy = random(-5, -1);
    this.alpha = 255;
  }

  finish() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }
  show() {
    stroke(100, 255, 40);
    fill(100, this.alpha);
    ellipse(this.x, this.y, 16);
  }
}
