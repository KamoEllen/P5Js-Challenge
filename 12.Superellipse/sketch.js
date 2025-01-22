// circle - shape with no edges
// x^2 + y^2 = y^2
// x= r * Cose(angle)
// y = r * sin(angle)
function setup() {
    createCanvas(400, 400);
  }
  function sgn(val)
  {
    if (val > 0)
    {
        return 1;
    }
    else if ( val < 0)
    {
        return -1;
    }
    else
    {
        return 0;
    }
  }
  
  function draw() {
    background(51);
    translate(width/2, height/2);
    // var r = 100;
    var a = 100;
    var b = 100;
    var m = 2;
    stroke(255);
    noFill();

    beginShape();

    for (var angle = 0 ; angle < TWO_PI; angle += 0.1)
    {
        // var x = r *cos(a);
        // var y = r * sin(a);
        var na = 2 / n ;
        //sgn(num) <- is num is +positive it returns 1 , if num is
        //negative it returns -1 , if num is 0 , it returns 0
        var x = pow(abs(cos(angle)) , na) * a * sgn(cos(angle));
        var yx = pow(abs(sin(angle)) , na) * b * sgn(sin(angle));


        // point(x,y);
        vertex(x,y);
    }
    endShape(CLOSE);
  }  