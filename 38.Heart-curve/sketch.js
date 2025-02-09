function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(20, 10, 130);
    translate(width/2, height/2); //polar coordinates

    noFill();
    stroke(255);
    beginShape();
    for (var a = 0; a < TWO_PI; a+=TWO_PI/6)
    {
        var r = 100;
        var x = r * cos(a);
        var y = r * sin(a);
        vertex(x,y);
    }
    endShape();
  }