class Block {
    constructor(x, w, v, m) {
        this.x = x;
        this.y = height - w;
        this.w = w;
        this.v = v;
        this.m = m; // mass
    }

    hitWall() {
        // collision on left or right wall
        return (this.x <= 0 || this.x + this.w >= width);
    }

    reverse() {
        //reverse velocity
        this.v *= -1;
    }

    bounce(other) {
        let sumM = this.m + other.m;
        let newV = (this.m - other.m) / sumM * this.v;
        newV += (2 * other.m / sumM) * other.v;
        return newV;
    }

    collide(other) {
        return !(this.x + this.w < other.x || this.x > other.x + other.w);
    }

    update() {
        this.x += this.v;
    }

    show() {
        image(blockImg, this.x, this.y, this.w, this.w);
    }
}