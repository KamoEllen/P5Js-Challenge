class Particle {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.mass = random(2, 6);
      this.r = sqrt(this.mass) * 20;
    }
  

    show() {
      stroke(0);
      strokeWeight(2);
      fill(127);
      circle(this.position.x, this.position.y, this.r * 2);
    }
  }
  