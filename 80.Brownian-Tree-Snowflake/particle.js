
class Particle {

    constructor(radius, angle) {
      this.pos = p5.Vector.fromAngle(angle);
      this.pos.mult(radius);
      this.r = 2;
    }

    update() 
    {
      this.pos.x -= 1;
      this.pos.y += random(-3, 3);
  
    }

    show() {
        fill(100, 200, 255, 150);
        stroke(255, 150);
        ellipse(this.pos.x, this.pos.y, this.r * 2);
      }
}