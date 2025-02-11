let ax, ay;
let bx, by;
let cx, cy;

function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    strokeWeight(8); // thickness
    background(0); // Clear the canvas every frame

    // Generate new random positions
    ax = random(width);
    ay = random(height);
    bx = random(width);
    by = random(height);
    cx = random(width);
    cy = random(height);

    // Draw the points
    point(ax, ay);
    point(bx, by);
    point(cx, cy);
}

function draw() {

}