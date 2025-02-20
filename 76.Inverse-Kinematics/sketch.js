let tentacle;

function setup() {
  createCanvas(600, 400);

  let x = width / 2;
  let y = height;
  let pos = new p5.Vector(x, y);

  tentacle = new Segment(pos, 10, 0);

  let current = tentacle;
  for (let i = 0; i < 20; i++) {
    let next = new Segment(current, 10, 0);
    current.child = next;
    current = next;
  }
}

function draw() {
  background(14,35,16);

  let next = tentacle;
  while (next) {
    next.wiggle();
    next.update();
    next.show();
    next = next.child;
  }
}