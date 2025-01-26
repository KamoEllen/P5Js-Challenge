class Firework {
    constructor() {
        this.exploded = false;
        this.particles = [];
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
            this.explode();
        }
    } 


    explode = function()
    {
        for (var i = 0; i < 100; i++)
        {
            var p = new Particle(this.fireworks.pos.x,this.fireworks.pos.y);
            this.particles.push(p);
        }
    }
    show() {
        stroke(255);
        strokeWeight(4);
        point(this.position.x, this.position.y);
        for (var i = 0; i < this.particles.length; i++)
        {
            this.particles[i].show();
        }
    }
}
