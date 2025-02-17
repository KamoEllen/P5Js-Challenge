let blockImg;
let block1;
let block2;
// let clack;

function preload()
{
    blockImg = loadImage('block1.png')
    // clack = loadSound('clack.wav')
}
function setup() {
    createCanvas(600, 600);
    block1 = new Block(100,20);
    block2 = new Block(200,150);
}
function draw()
{
    background(77,99,44);
    block1.show();
  block2.show();
}