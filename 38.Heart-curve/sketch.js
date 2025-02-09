const heart = [];
let a = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20, 10, 130);
  translate(width / 2, height / 2); //polar coordinates

  stroke(255);
  strokeWeight(2);
  fill(255, 30, 30); //red

  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();

  const r = height / 40;
  const x = r * 16 * pow(sin(a), 3);
  const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
  heart.push(createVector(x, y));

  if (a > TWO_PI) {
    noLoop();
  }

  a += 0.01;
}
