function setup() {
    createCanvas(640, 480);
    background(0);
    strokeWeight(4);
    for ( var i = 0; i < 1000; i++)
    {
        stroke(255);
        point(random(width), random(height));
    }
  }
  
//   function draw() {
//     background(0);
//   }