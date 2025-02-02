// self reference
function setup() {
    createCanvas(600, 600);
   
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
        //right
      drawCircle(x+z * 0.5,y,z * 0.5); 
      //moving circle according to diameter shrnk size 
       // diameter shrinks [z * 0.5]
       //left
       drawCircle(x - z * 0.5,y,z * 0.5); 
       //makes a sierpinski triangle.A fractal, or infinite pattern, that's shaped like an equilateral triangle.
       drawCircle(x ,y  + z * 0.5,z * 0.5); 
    }
    
  }