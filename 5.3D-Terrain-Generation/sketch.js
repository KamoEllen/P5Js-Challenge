let cols;
let rows;
let scl = 20;
let w = 600;
let h = 600;

function setup() {
    //webgl origin is centeer of canvas
    //p2d origin is top-left corner
    createCanvas(w, h, WEBGL);
    cols = w / scl;
    rows = h / scl;
}

function draw() {
    background(0);
    stroke(255);
    noFill();
    // offsets and grid transformations
    //-w / 2 and -h / 2: These move the starting point from the center to the top-left
    //(w % scl) / 2: This handles centering when the canvas size isn't perfectly divisible by the scale
    let xOffset = -w / 2 + (w % scl) / 2;
    let yOffset = -h / 2 + (h % scl) / 2;

    for (let y = 0; y < rows; y++) {
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            vertex(x*scl + xOffset, y * scl + yOffset);
            vertex(x*scl + xOffset, (y+1) * scl + yOffset);
           // rect(x * scl + xOffset, y * scl + yOffset, scl, scl);
        }
        endShape();
    }
}