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
      // Slower orbit speed for larger objects
      this.orbitSpeed = radius > 20 ? 
                       random(0.005, 0.01) :  // Planets move slower
                       random(0.02, 0.03);    // Moons move faster
    }
  
    spawnMoons(total) {
      this.planets = new Array(total);
      for (let i = 0; i < this.planets.length; i++) {
        const moonRadius = this.radius * 0.3;  // Smaller moons
        // Moons stay closer to their planet
        const moonDistance = random(this.radius * 2, this.radius * 4);
        this.planets[i] = new Planet(moonRadius, moonDistance);
      }
    }
  
    orbit() {
      this.angle += this.orbitSpeed;
      
      if (this.planets != null) {
        for (let planet of this.planets) {
          planet.orbit();
        }
      }
    }
  
    show() {
      push();
      fill(255, 100);
      
      rotate(this.angle);
      translate(this.distance, 0);
      sphere(this.radius); //replacing ellipse
      //ellipse(0, 0, this.radius * 2, this.radius * 2);
  
      if (this.planets != null) {
        for (let planet of this.planets) {
          planet.show();
        }
      }
      pop();  
    }
}