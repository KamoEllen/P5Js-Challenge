let circle;
function setup() {
    createCanvas(640, 360);
    circle = new Circle(90,80,9);
  }
  
  function draw() {
    background(88);
circle.show();
  }