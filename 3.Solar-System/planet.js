class Planet {
    planets = [];
    radius;
    angle;
    distance;
    orbitSpeed; 
  
    constructor(radius, distance) {
      this.radius = radius;
      this.angle = random(TWO_PI);
      this.distance = distance;
      this.orbitSpeed = random(0.01, 0.03);  //for each planet
    }
  
    spawnMoons(total) {
      this.planets = new Array(total);
      for (let i = 0; i < this.planets.length; i++) {
        const moonRadius = this.radius * 0.5;
        const moonDistance = random(75, 300);
        this.planets[i] = new Planet(moonRadius, moonDistance);
      }
    }
  
    orbit() {
      // Update the angle to create orbital motion
      this.angle += this.orbitSpeed;
      
      if (this.planets != null) {
        for (let planet of this.planets) {
          planet.orbit();
        }
      }
    }
  
    show() {
      push();  // Use push() instead of pushMatrix() in p5.js
      fill(255, 100);
      
      rotate(this.angle);
      translate(this.distance, 0);
      
      ellipse(0, 0, this.radius * 2, this.radius * 2);
  
      if (this.planets != null) {
        for (let planet of this.planets) {
          planet.show();
        }
      }
      pop();  
    }
  }