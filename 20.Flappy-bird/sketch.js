var bird;
function setup() {
    createCanvas(600, 400);
    bird = new Bird();
  }
  
  function draw() {
    background(51);
    bird.show();
    bird.update();
  }