let robotarm;
const segLen = 15;
const numSegs = 40;

function setup() {
    createCanvas(windowWidth, windowHeight);

    robotarm = new RobotArm(width / 2, height, numSegs, segLen, 0);
}

function draw() {
    background(51);

    robotarm.update();
    robotarm.show();
}