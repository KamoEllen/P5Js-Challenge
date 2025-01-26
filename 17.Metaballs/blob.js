class Blob {
    constructor(x, y) {
        this.pos = createVector(x, y);
        this.r = 40;
    }

    show() {
        fill(51);
        stroke(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
}
