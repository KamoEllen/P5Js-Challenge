function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(20, 10, 130);
    translate(width/2, height/2); //polar coordinates

    noFill();
    stroke(255);
    beginShape();
    for (var a = 0; a < TWO_PI; a+=0.01)
    {
        //equation for heart
        var r = 10;
        var x = r * 16 * pow(sin(a),3) ;
        
        var y = -r * (13 * cos(a)  - 5* cos(2 * a) - 2 * cos(3 * a) - cos(4* a));
        vertex(x,y);
    }
    endShape();
  }