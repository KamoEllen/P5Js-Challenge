class Circle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.r = 2;
      this.color = color;
      this.growing = true;
    }
  
    show() {
      fill(this.color);
      noStroke();
      ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
  }