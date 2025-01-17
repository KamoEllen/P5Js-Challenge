class Planet {
    constructor(radius, distance, texture = null) {
        this.planets = [];
        this.radius = radius;
        this.distance = distance;
        this.texture = texture;
        
        // Define rotation axis vectors
        this.v2 = createVector(1, 0, 1).normalize();
        this.v3 = createVector(0, 1, 0).normalize();
        this.v = createVector(distance, 0, 0);
        
        this.angle = random(TWO_PI);
        this.orbitSpeed = radius > 20 ? 
                         random(0.005, 0.01) : 
                         random(0.02, 0.03);
        
        // Calculate cross product once in constructor
        this.rotationAxis = p5.Vector.cross(this.v2, this.v3);
    }

    spawnMoonsWithTextures(total, textures) {
        this.planets = new Array(total);
        for (let i = 0; i < this.planets.length; i++) {
            const moonRadius = this.radius * 0.3;
            const moonDistance = random(this.radius * 2, this.radius * 4);
            const texture = textures[i % textures.length];
            this.planets[i] = new Planet(moonRadius, moonDistance, texture);
        }
    }

    orbit() {
        this.v = createVector(
            cos(this.angle) * this.distance,
            sin(this.angle) * this.distance,
            0
        );
        this.angle += this.orbitSpeed;
        
        if (this.planets.length > 0) {
            for (let planet of this.planets) {
                planet.orbit();
            }
        }
    }

    show() {
        push();
        
        // Use rotateX, rotateY, rotateZ instead of single rotate
        rotateX(this.angle * this.rotationAxis.x);
        rotateY(this.angle * this.rotationAxis.y);
        rotateZ(this.angle * this.rotationAxis.z);
        
        stroke(255); // Line to planet
        line(0, 0, 0, this.v.x, this.v.y, this.v.z);
        
        translate(this.v.x, this.v.y, this.v.z);
        
        push();
        noStroke();
        if (this.texture) {
            texture(this.texture);
        } else {
            fill(200);
        }
        sphere(this.radius);
        pop();

        if (this.planets.length > 0) {
            for (let planet of this.planets) {
                planet.show();
            }
        }
        
        pop();
    }
}