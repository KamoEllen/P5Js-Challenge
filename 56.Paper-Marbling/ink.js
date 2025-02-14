const circleDetail = 200;

class Drop {
  constructor(x, y, r) {
    this.center = createVector(x, y);
    this.r = r;
    this.vertices = [];
    for (let i = 0; i < circleDetail; i++) {
      let angle = map(i, 0, circleDetail, 0, TWO_PI);
      let v = createVector(cos(angle), sin(angle));
      v.mult(this.r);
      v.add(this.center);
      this.vertices[i] = v;
    }
    this.col = random(0, 200);
  }

    marble(other) {
        for (let v of this.vertices) {
          let c = other.center;
          let r = other.r;
          let p = v.copy();
          p.sub(c);
          //p-c , mag of vector
          let m = p.mag();
          let root = sqrt(1 + (r * r) / (m * m));
          p.mult(root);
          p.add(c);
          v.set(p);
        }
    }

    
  
    show() {
      fill(0);
    //   circle(this.x, this.y, this.r * 2);

    //decagon
      beginShape();
      for (let v of this.vertices) {
        vertex(v.x, v.y);
      }
      endShape(CLOSE);
    }
  }