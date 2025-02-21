class Particle {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.prev = createVector(x, y);
      this.vel = createVector();
      this.acc = createVector();
    }
  
    update() {
      this.vel.add(this.acc);
      this.vel.limit(5);
      this.pos.add(this.vel);
      this.acc.mult(0);
    }
  
    show() {
      stroke(255, 255);
      strokeWeight(4);
      line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
  
      this.prev.x = this.pos.x;
      this.prev.y = this.pos.y;
    }
  }