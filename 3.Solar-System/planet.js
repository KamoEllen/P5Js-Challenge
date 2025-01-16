class Planet {
  // Class properties declaration
  planets = [];
  radius;
  angle;
  distance;

  // Constructor is used to initialize an object when it's created
  constructor(radius, distance) {
    this.radius = radius;
    this.angle = random(TWO_PI); //not woring , all planets are still on straight line
    this.distance = distance;
  }

  // Methods (no need for 'void' in JavaScript)
  spawnMoons(total) {
    this.planets = new Array(total);
    for (let i = 0; i < this.planets.length; i++) {
      const moonRadius = this.radius * 0.5;
      const moonDistance = random(75, 300);
      // const moonDistance = Math.random() * (70 - 2) + 100; // random between 100-200
      this.planets[i] = new Planet(moonRadius, moonDistance);
    }
  }

  show() {
    push(); 
    fill(255, 100);
    rotate(this.angle);
    translate(this.distance, 0);
    
    ellipse(0, 0, this.radius * 2, this.radius * 2);
    if (this.planets != null) {
      for (let i = 0; i < this.planets.length; i++) {
        this.planets[i].show();
      }
    }
   pop();
  }
}
