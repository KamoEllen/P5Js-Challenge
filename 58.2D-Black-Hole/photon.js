class Photon {

    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = createVector(-c, 0);
      this.history = [];
    
    }

    update()
    {
        this.history.push(this.pos.copy());
        // this.pos.add(this.vel);
        const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV);

      if (this.history.length > 500) {
        this.history.splice(0, 1);
      }
    }

    show() {
        strokeWeight(4);
        stroke(255, 0, 0);
        point(this.pos.x, this.pos.y);
    
        strokeWeight(2);
        noFill();
        beginShape();
        for (let v of this.history) {
          vertex(v.x, v.y);
        }
    
        endShape();
    
      }
}