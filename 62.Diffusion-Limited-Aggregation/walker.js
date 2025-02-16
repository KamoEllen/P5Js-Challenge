class Walker {
    constructor(x, y) {
      if (arguments.length == 2) {
        this.pos = createVector(x, y);
        this.stuck = true;
      } else {
        this.pos = randomPoint();
        this.stuck = false;
      }
      this.r = radius;
    }
  
    walk() {
      var vel = p5.Vector.random2D();
      this.pos.add(vel);
      this.pos.x = constrain(this.pos.x, 0, width);
      this.pos.y = constrain(this.pos.y, 0, height);
    }
  
  
    checkStuck(others) {
      for (var i = 0; i < others.length; i++) {
        let d = distSq(this.pos, others[i].pos);
        if (d < (this.r * this.r + others[i].r * others[i].r + 2 * others[i].r * this.r)) {
          this.stuck = true;
          return true;
        }
      }
      return false;
    }
  
    setHue(hu) {
      this.hu = hu;
    }
  
    show() {
      noStroke();
      if (this.stuck && typeof this.hu !== 'undefined') {
        fill(this.hu, 255, 100, 200);
      } else {
        fill(360, 0, 255);
      }
      ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
  
  
  }
  
  function randomPoint() {
    var i = floor(random(4));
  
    if (i === 0) {
      let x = random(width);
      return createVector(x, 0);
    } else if (i === 1) {
      let x = random(width);
      return createVector(x, height);
    } else if (i === 2) {
      let y = random(height);
      return createVector(0, y);
    } else {
      let y = random(height);
      return createVector(width, y);
    }
  }
  
  
  
  function distSq(a, b) {
    var dx = b.x - a.x;
    var dy = b.y - a.y;
    return dx * dx + dy * dy;
  }