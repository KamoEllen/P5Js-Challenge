let robotarm;
const segLen = 15;
const numSegs = 40;

function setup() {
    createCanvas(400, 400);

    robotarm = new RobotArm(width / 2, height, numSegs, segLen, 0);
}

function draw() {
    background(141,100,22);

    robotarm.update();
    robotarm.show();
}