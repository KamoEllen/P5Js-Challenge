let current;
let snowflake = [];

function setup() {
    createCanvas(600, 400);
    current = new Particle(width/2,0);
  }
 
  
  function draw() {
    background(200, 120, 180); //soft purple
    translate(width/2, height/2);


  snowflake.push(current);
  current = new Particle(height/2, 0);


    for (let i = 0; i < 88; i++) {
    rotate(PI/3);
    current.show();
    for (let p of snowflake) {
      p.show();
    }
    
    current.update();
  }
}