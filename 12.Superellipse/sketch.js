// circle - shape with no edges
// x^2 + y^2 = y^2
// x= r * Cose(angle)
// y = r * sin(angle)
function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(51);
    translate(width/2, height/2);
    var r = 100;
    stroke(255);
    noFill();

    beginShape();

    for (var a = 0 ; a < TWO_PI; a += 0.1)
    {
        var x = r *cos(a);
        var y = r * sin(a);
        // point(x,y);
        vertex(x,y);
    }
    endShape(CLOSE);
  }  