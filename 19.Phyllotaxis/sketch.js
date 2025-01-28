//angle = n * 137.5
//angle will be the direction clockwise
//r = c * root n
//r is the radius
//have to convert angle n r in (x,y)
//using 'polar to cartesian coordinate transformation'
// x = r * cos()
// y = r * sin()
// cos() = x/r
//how to get n , what is n
//n i snumber of dots
//c is scaling pattern

var n = 0;
var c = 4;

function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw() {
    var a = n * 137.6;
    var r = c * sqrt(n);

    var x = r * cos(a) + width/2;
    var y = r * sin(a) + height/2;

    fill(255);
    ellipse(x,y,4,4);

    
    n++;
  }