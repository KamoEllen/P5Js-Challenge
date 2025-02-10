
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
    noFill();
    push();
    // fill(0);
    stroke(255);
    rect(40,30,90,10); //a
    rect(140,50,10,90); //b
    rect(140,160,10,90); //c
    rect(40,260,90,10); //d
    rect(20,160,10,90); //e
    rect(20,50,10,90); //b
    rect(40,145,90,10); //g
    pop();
}