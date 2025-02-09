let wall;
let ray;

function setup() {
    createCanvas(400, 400);
    wall = new Boundary(300,100,300,200);
    ray = new Ray(40,100);
  }
  
  function draw() {
    background(0); 
    wall.show();
    ray.show();
  }