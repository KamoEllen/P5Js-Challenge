let x = 0
let y = 0;
function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  stroke(120,230,52);

  if ( random(1) < 0.5)
  {
   line(x,y, x+10,y+10); 
  }
  else 
    {
      line(x,y+10,x+10,y);
    }
}