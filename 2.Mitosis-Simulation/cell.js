function Cell(pos, r, c) {
  if (pos) {
    this.pos = pos.copy();
  } else {
    this.pos = createVector(random(width), random(height));
  }

  this.r = r || 60;
  this.c = c || color(random(100, 255), 0, random(100, 255));

  this.clicked = function (x, y) {
    var d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      //distance less than radius
      return true;
    } else {
      return false;
    }
  };
  this.mitosis = function () {
    this.pos.x += random(-this.r, this.r);
    var cellA = new Cell(this.pos, this.r * 0.8, this.c);
    return cellA;
  };

  this.move = function () {
    var vel = p5.Vector.random2D();
    this.pos.add(vel);
  };
  this.show = function () {
    fill(this.c, 100);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  };
}
