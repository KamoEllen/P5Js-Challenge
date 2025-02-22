class Toothpick {
  constructor(x, y, d) {
    this.newPick = true;
    this.dir = d;
    if (this.dir == 1) {
      this.ax = x - len / 2;
      this.bx = x + len / 2;
      this.ay = y;
      this.by = y;
    } else {
      this.ax = x;
      this.bx = x;
      this.ay = y - len / 2;
      this.by = y + len / 2;
    }
  }

  show(factor) {
    stroke(0);
    if (this.newPick) {
      stroke(0, 0, 255); 
    }
    strokeWeight(1 / factor);
    line(this.ax, this.ay, this.bx, this.by);
  }
}