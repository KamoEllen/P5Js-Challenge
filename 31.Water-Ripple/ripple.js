class Ripple {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.opacity = 1;
    }

    update() {
        this.radius += 3;
        this.opacity -= 0.03;
    }

    show() {
        stroke(255, 255, 255, this.opacity * 255);
        strokeWeight(2);
        noFill();
        circle(this.x, this.y, this.radius * 2);
    }

    isFinished() {
        return this.opacity <= 0;
    }
}