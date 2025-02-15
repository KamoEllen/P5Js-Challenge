class Blackhole {
    constructor(x, y, m) {
      this.pos = createVector(x, y);
      this.mass = m;
      this.rs = (2 * G * this.mass) / (c * c);
    }
    show()
    {
        fill(0);
        circle(this.pos.x, this.pos.y, this.rs*2);

    }
}