let tentacle;
let robotarm;

function setup() {
  createCanvas(600, 400);
  robotarm = new RobotArm(width / 2, height, numSegs, segLen, 0);


  let point = new p5.Vector(300, 200);
  let current = new Segment(point, 10, 0);
  for (let i = 0; i < 20; i++) {
    let next = new Segment(current, 10, i);
    current.child = next;
    current = next;
  }
  tentacle = current;
}

function draw() {
  background(141, 100, 22);
  robotarm.show();

  tentacle.follow(mouseX, mouseY); // Follow mouse
  tentacle.update();
  tentacle.show();

  let next = tentacle.par;
  while (next) {
    next.follow();
    next.update();
    next.show();
    next = next.par;
  }
}