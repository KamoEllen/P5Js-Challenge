var bird;

function setup() {
    createCanvas(600, 400);
    bird = new Bird();
}

function draw() {
    background(51);
    bird.update();
    bird.show();
}

function keyPressed() {
    if (key == ' ') { // if space bar was pressed
        bird.up();
    }
}