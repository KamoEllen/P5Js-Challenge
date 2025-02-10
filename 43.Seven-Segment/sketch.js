let nums = [0x7e, 0x30, 0x6d, 0x79, 0x33, 0x5b, 0x5f, 0x70, 0x7f, 0x7b];
 let index=0;

function setup() {
    createCanvas(400, 400);
    frameRate(3);
}
function draw()
{
    background(51,88,94);
    sevenSegment(nums[index] );
    index = (index+1) % nums.length;
}
function getColor(val,shift)
{
    let r = 255;
    let g = 30;
    let b = 30;
    let a =  200 * ((val >> shift) & 1);
    return color(r,g,b,a);
}

function sevenSegment(val)
{ 
   
    push();
    stroke(0);
    noFill();

    fill(getColor(val,6));
    rect(40,30,90,10); //a

    fill(getColor(val,5));
    rect(140,50,10,90); //b

    fill(getColor(val,4));
    rect(140,160,10,90); //c

    fill(getColor(val,3));
    rect(40,260,90,10); //d

    fill(getColor(val,2));
    rect(20,160,10,90); //e

    fill(getColor(val,1));
    rect(20,50,10,90); //b

    fill(getColor(val,0));
    rect(40,145,90,10); //g

    pop();
}
