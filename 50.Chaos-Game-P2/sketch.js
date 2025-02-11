let points ;
var current;
let percent = 0.8;

let x, y;

function setup() {
  createCanvas(400, 400);
  background(0); 

  //constant
  points = [];//empty array
  const n = 8;
 
  //3 random points
  for (let i = 0; i < n; i++) {
    let angle = i * TWO_PI/ n;
    let v = p5.Vector.fromAngle(angle);
    v.mult(width/2);
    v.add(width/2, height/2);
    points.push(v);
  }


  reset(); // Refactoring :)
//   translate(width/2, height/2);
}

function reset()
{
    
  
  //current point is set to a random position
  current = createVector(random(width), random(height)); // Fixed typo: ceateVector -> createVector

  background(0);
  stroke(255);
  strokeWeight(8); // thickness
  //initial 3 points
  for (let p of points) {
    point(p.x, p.y);
  }
  
}
function draw() {
    // translate(width/2, height/2);

    if (frameCount % 100 == 0)
    {
        reset(); 
    }
  for (let i = 0; i < 500; i++) {
    strokeWeight(2);
    stroke(255,0,255);
    point(x, y);

 
    let next = random(points);
    current.x = lerp(current.x, next.x, percent);
    current.y = lerp(current.y, next.y,percent);
    point(current.x, current.y)

   
  }
}