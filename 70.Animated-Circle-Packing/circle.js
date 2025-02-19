class Circle {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.r = 50;
    }
    show() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
      }
    }