// self reference
function setup() {
    createCanvas(600, 400);
   
  }
  
  function draw() {
    background(100,255,180);
    stroke(255);
    noFill();
    drawCircle(300,200,300)
  }  

  function drawCircle(x,y,z)
  {
    ellipse(x,y,z);
    if (x < width)
    {
      drawCircle(x+20,y,z);  
    }
    
  }