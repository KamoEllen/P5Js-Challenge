let tentacle;
function setup() {
    createCanvas(900, 400);
    tentacle = new Segment(10, 10, 10);
  }
  
  function draw() {
    background(14,35,16); //dark green
    tentacle.show();

  }