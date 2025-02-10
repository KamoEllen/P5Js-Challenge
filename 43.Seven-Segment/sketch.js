
function setup() {
    createCanvas(400, 400);
}
function draw()
{
    background(51,88,94);
    sevenSegment();
}
function sevenSegment()
{ 
    //draw segments relative to point
    push();
    fill(0);
    stroke(255);
    rect(40,30,100,20); //a
    // stroke(255);
    rect(140,50,20,100); //b
    // stroke(255);
    rect(140,160,20,100); //c
    rect(40,260,100,20); //d
    rect(20,160,20,100); //e
    rect(20,50,20,100); //b
    rect(40,145,100,20); //g
   

    pop();
}