let current;
function setup() {
    createCanvas(600, 400);
    current = new Particle(width/2,0);
  }
 
  
  function draw() {
    background(200, 120, 180); //soft purple
    translate(width/2, height/2);
    current.show();
    current.update();
  }