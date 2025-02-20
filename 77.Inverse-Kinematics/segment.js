class Segment {
    constructor(point, len, i) {
      this.a = point;
      this.b = new p5.Vector();
      this.angle = 0;
      this.len = len;
      this.calculateB();
    }
  
    calculateB() {
      let dx = this.len * cos(this.angle);
      let dy = this.len * sin(this.angle);
      this.b.set(this.a.x + dx, this.a.y + dy);
    }
  
    update() {
      this.calculateB();
    }
  
    show() {
      stroke(255);
      strokeWeight(1);
      line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
  }
  
 