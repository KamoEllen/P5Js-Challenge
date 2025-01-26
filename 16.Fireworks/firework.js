class Firework {
    constructor() {
        this.exploded = false;
        this.position = createVector(random(width), height);
        this.velocity = createVector(0, random(-12, -8));
        this.acceleration = createVector(0, 0);
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    update() {
        this.applyForce(gravity);
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);

        //particle explodes into more 
        if (this.velocity.y >= 0)
        {
            // this.firework = null;
            this.exploded = true;
        }
    } 

    show() {
        stroke(255);
        strokeWeight(4);
        point(this.position.x, this.position.y);
    }
}
