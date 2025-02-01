function setup() {
    createCanvas(400, 400);
    background(0);
  }
  
  function draw() {
    stroke(120,230,52);

    if ( random(1) < 0.5)
    {
     line(0,0,10,10); 
    }
    else 
      {
        line(0,10,10,0);
      }
  }