let pie;
function setup() {
    createCanvas(400, 400);
    pie = new Pie(100,100);
  }
  function draw() {
    background(0);
  
    rectMode(CENTER);
    rect(mouseX, height-10,100,10 );
    pie.show();
    pie.update();
  }
  