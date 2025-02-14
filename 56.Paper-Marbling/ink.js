class Drop {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }
  
    show() {
      fill(0);
      circle(this.x, this.y, this.r * 2);
    }
  }