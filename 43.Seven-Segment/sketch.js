
function setup() {
    createCanvas(400, 400);
}
function draw()
{
    background(51,88,94);
    sevenSegment(0x7E );
}


//using hexadecimal encoding 'abcdefg'
function sevenSegment(val)
{ 
    noFill();
    push();
    // using bit shift
    //000000001
    //shifting bit to the left
    //000000010
    stroke(0);
    //0 is blck, 1 is white
    colorMode(RGB,1);
   
    fill(val >> 6& 1)
    rect(40,30,90,10); //a
    fill(val >> 5& 1)
    rect(140,50,10,90); //b
    fill(val >> 4& 1)
    rect(140,160,10,90); //c
    fill(val >> 3& 1)
    rect(40,260,90,10); //d
    fill(val >> 2& 1)
    rect(20,160,10,90); //e
    fill(val >> 1& 1)
    rect(20,50,10,90); //b
    fill(val >> 0& 1)
    rect(40,145,90,10); //g
    pop();
}