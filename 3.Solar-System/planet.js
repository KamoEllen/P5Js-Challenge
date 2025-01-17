class Planet {
    constructor(radius, distance) {
        this.planets = [];
        this.radius = radius;
        this.distance = distance;
        // Define rotation axis vectors
        this.v2 = createVector(1, 0, 1).normalize(); 
        this.v3 = createVector(0, 1, 0).normalize();
        this.v = createVector(distance, 0, 0);
        this.angle = random(TWO_PI);
        this.orbitSpeed = radius > 20 ? 
                         random(0.005, 0.01) : 
                         random(0.02, 0.03);
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
        // Calculate cross product once in constructor
        this.rotationAxis = p5.Vector.cross(this.v2, this.v3);
    }

    spawnMoons(total) {
        this.planets = new Array(total);
        for (let i = 0; i < this.planets.length; i++) {
            const moonRadius = this.radius * 0.3;
            const moonDistance = random(this.radius * 2, this.radius * 4);
            this.planets[i] = new Planet(moonRadius, moonDistance);
        }
    }

    orbit() {
        this.v = createVector(
            cos(this.angle) * this.distance,
            sin(this.angle) * this.distance,
            0
        );
        this.angle += this.orbitSpeed;
        
        if (this.planets != null) {
            for (let planet of this.planets) {
                planet.orbit();
            }
        }
    }

    show() {
        push();
       noStroke(); //the sphere shouldnt hve stroke
        fill(this.color);
       
        
        // Use rotateX, rotateY, rotateZ instead of single rotate
        rotateX(this.angle * this.rotationAxis.x);
        rotateY(this.angle * this.rotationAxis.y);
        rotateZ(this.angle * this.rotationAxis.z);
        stroke(255);//i want the line to have a stroke
        line(0,0,0,this.v.x,this.v.y,this.v.z); 
       translate(this.v.x, this.v.y, this.v.z);
        sphere(this.radius);

        if (this.planets != null) {
            for (let planet of this.planets) {
                planet.show();
            }
        }
        pop();
    }
}