let x, y;

let step = 1;
let stepSize = 100;
let numberSteps = 1;
let state;

function setup() {
    createCanvas(500, 500);
    x = width / 2;
    y = height / 2;
    background(200, 30, 50);
    
}

function draw() {
    background(200, 30, 50);
    textSize(64);
    textAlign(CENTER, CENTER); 
    fill(255);
    text(step, x, y);

    switch (state) {
        case 0:
            x += stepSize; // Move right
            break;
        case 1:
            y -= stepSize; // Move up
            break;
        case 2:
            x -= stepSize; // Move left
            break;
        case 3:
            y += stepSize; // Move down
            break;
    }

    step++;

    // Change direction every 2 steps
    if (step % 2 == 0) {
        state = state + 1;
    }
}