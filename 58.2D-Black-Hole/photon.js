class Photon {

    constructor(x, y) {
      this.pos = createVector(x, y);
      this.vel = createVector(-c, 0);
    
    }

    update()
    {
        // this.pos.add(this.vel);
        const deltaV = this.vel.copy();
      deltaV.mult(dt);
      this.pos.add(deltaV);
    }

    show()
    {
        strokeWeight(4);
        stroke(255,0,0);
        point(this.pos.x, this.pos.y);
    }
}