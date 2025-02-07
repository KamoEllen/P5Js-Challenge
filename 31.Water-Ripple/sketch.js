function setup() {
    createCanvas(600, 400, WEBGL);
}

function draw() {
    background(20, 30, 50);
    ripples[i].update();
    ripples[i].show();
}