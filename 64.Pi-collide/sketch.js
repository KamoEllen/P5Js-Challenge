let blockImg;
let block1;
let block2;

function preload() {
    blockImg = loadImage('block1.png');
}

function setup() {
    createCanvas(600, 600);
    block1 = new Block(100, 90, 2, 0);
    block2 = new Block(200, 90, 1, -5);
}

function draw() {
    background(77, 99, 44);

    if (block1.collide(block2)) {
        const v1 = block1.bounce(block2);
        const v2 = block2.bounce(block1);
        block1.v = v1;
        block2.v = v2;
    }

    //both walls reverse/bonce once they hit the wall
    if (block2.hitWall()) {
        block2.reverse();
    }
    if (block1.hitWall()) {
        block1.reverse();
    }

    block1.show();
    block2.show();

    block1.update();
    block2.update();
}