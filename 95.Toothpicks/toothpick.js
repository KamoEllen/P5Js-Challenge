class Toothpick {
  constructor(x, y, d) {
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

  show() {
    stroke(0);
    strokeWeight(1);
    line(this.ax, this.ay, this.bx, this.by);
  }
}