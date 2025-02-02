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
    if (z > 2)
    {
      drawCircle(x+z * 0.5,y,z * 0.5); 
      //moving circle according to diameter shrnk size 
       // diameter shrinks [z * 0.5]
    }
    
  }