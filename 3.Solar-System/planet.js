class Planet {
    constructor(radius, distance) {
        this.planets = [];
        this.radius = radius;
        this.p ;
        this.distance = distance;
        this.v2 = createVector(1, 0, 1); //not workin
        this.v = createVector(distance, 0, 0);
        this.angle = random(TWO_PI);
        this.orbitSpeed = radius > 20 ? 
                         random(0.005, 0.01) : 
                         random(0.02, 0.03);
        // Add random color
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
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
        noStroke();
        fill(this.color);
        this.p = createVector(this.v2.cross()); //not workin
        // /this.p = this.v2.cross(); //not workin
        rotate(this.angle,p.x,this.p.y.p.z);
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
//I learnt linear algebra last month for fun
//and now i get to use 'cross-product' i'm so happy.
