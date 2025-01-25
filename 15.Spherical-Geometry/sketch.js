function setup() {
    createCanvas(400, 400 , WEBGL);
  }

function draw()
{
    background(51);
    fill(255);
    lights();
    translate(width/4 , height/4);
    sphere(100);
}