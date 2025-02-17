let blockImg;

let block1;
let block2;

var count = 0;
let digits = 1;

var countDiv;

function preload() {
    blockImg = loadImage('block1.png');
}

function setup() {
    createCanvas(600, 600);
    block1 = new Block(100, 20, 2, 0);
    const m2 = pow(100, digits);
    block2 = new Block(300, 100, m2, -5);
    countDiv = createDiv(count);
    countDiv.style('font-size', '72pt');
}

function draw() {
    background(77, 99, 44);

    if (block1.collide(block2)) {
        const v1 = block1.bounce(block2);
        const v2 = block2.bounce(block1);
        block1.v = v1;
        block2.v = v2;
        count++;
    }

    //both walls reverse/bonce once they hit the wall
    if (block2.hitWall()) {
        block2.reverse();
        count++;
    }
    if (block1.hitWall()) {
        block1.reverse();
        count++;
    }

    block1.show();
    block2.show();

    block1.update();
    block2.update();
    
    countDiv.html(nf(count));
}