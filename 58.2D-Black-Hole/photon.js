class Photon {

    constructor(x, y) {
      this.pos = createVector(x, y);
    
    }

    show()
    {
        strokeWeight(4);
        stroke(255,0,0);
        point(this.pos.x, this.pos.y);
    }
}