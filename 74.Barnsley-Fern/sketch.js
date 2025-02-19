let x = 0;
let y = 0;

function setup() {
  createCanvas(640, 360);
  background(44, 0, 27); // dark purple
}

function draw() {
  for (let i = 0; i < 300; i++) {
    drawPoint();
    nextPoint();
  }
}

function drawPoint() {
  stroke(399, 196, 22, 55); // yellowish
  strokeWeight(2);
  let px = map(x, -2.182, 2.6558, 0, width);
  let py = map(y, 0, 9.9983, height, 0);
  point(px, py);
}

function nextPoint() {
  let nextX;
  let nextY;
  let r = random(1);

  if (r < 0.01) {
    // Stem
    nextY = 0.16 * y;
    nextX = 0;
  } else if (r < 0.86) {
    // Small leaflet 
    nextX = 0.85 * x + 0.04 * y;
    nextY = -0.04 * x + 0.85 * y + 1.6;
  } else if (r < 0.93) {
    // Large left 
    nextX = 0.2 * x + -0.26 * y;
    nextY = 0.23 * x + 0.22 * y + 1.6;
  } else {
    // Large right 
    nextX = -0.15 * x + 0.28 * y;
    nextY = 0.26 * x + 0.24 * y + 0.44;
  }
  x = nextX;
  y = nextY;
}