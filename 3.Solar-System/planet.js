// Planet.js
class Planet {
    planets = [];
    radius;
    angle;
    distance;
    orbitSpeed;
    v;
  
    constructor(radius, distance) {
      this.radius = radius;
      this.distance = distance;
      this.v = createVector(distance, 0, 0);  // Start on x-axis
      this.angle = random(TWO_PI);
      this.orbitSpeed = radius > 20 ? 
                       random(0.005, 0.01) : 
                       random(0.02, 0.03);
    }

    spawnMoons(total) {
        this.planets = new Array(total);
        for (let i = 0; i < this.planets.length; i++) {
          const moonRadius = this.radius * 0.3;
          const moonDistance = random(this.radius * 2, this.radius * 4);
          this.planets[i] = new Planet(moonRadius, moonDistance);
        }
      }
  
    // spawnMoons(total) {
    //   this.planets = new Array(total);
    //   for (let i = 0; i < this.planets.length; i++) {
    //     const moonRadius = this.radius * 0.3;
    //     const moonDistance = random(this.radius * 2, this.radius * 4);
    //     this.planets[i] = new Planet(moonRadius, moonDistance);
    //   }
    // }
  
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
      fill(255);
      
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