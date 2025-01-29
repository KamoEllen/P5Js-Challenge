var bird;
var pipes = [];

function setup() {
    createCanvas(600, 400);
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    background(51);
    bird.update();
    bird.show();

    for (var i = 0; i < pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();
    }
}

function keyPressed() {
    if (key == ' ') { // if space bar was pressed
        bird.up();
    }
}    