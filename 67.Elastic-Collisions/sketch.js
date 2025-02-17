let particleA;
let particleB;

function setup() {
  createCanvas(640, 360);
  particleA = new Particle(320, 60);
  particleB = new Particle(320, 300);
}

function draw() {
  background(255);


  particleA.show();
  particleB.show();

  
  


}
