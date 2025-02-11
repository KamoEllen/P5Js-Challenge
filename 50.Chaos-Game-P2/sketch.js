let points = [];
var current;

let x, y;

function setup() {
  createCanvas(400, 400);
  background(0); 
   
  stroke(255);
  strokeWeight(8); // thickness
 
  //3 random points
  for (let i = 0; i < 3; i++) {
    let v = createVector(random(width), random(height)); // Fixed typo: ceateVector -> createVector
    points.push(v);
  }

  //current point is set to a random position
  current = createVector(random(width), random(height)); // Fixed typo: ceateVector -> createVector

  //initial 3 points
  for (let p of points) {
    point(p.x, p.y);
  }
  
}


  


function draw() {
  for (let i = 0; i < 100; i++) {
    strokeWeight(2);
    stroke(255,0,255);
    point(x, y);

    // Randomly choose one of the 3 points and interpolate towards it
    // let r = floor(random(3));
    let next = random(points);
    current.x = lerp(current.x, next.x,0.5);
    current.y = lerp(current.y, next.y,0.5);
    point(current.x, current.y)

   
  }
}