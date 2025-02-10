let w = 24;
let angle = 0;
let angle_magic;
let maxD;
function setup() {
  createCanvas(400, 400, WEBGL);
  angle_magic = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}
function draw() {
  background(100);

  ortho(-300, 300, 300, -300, 0, 1000);

  rotateX(QUARTER_PI);
  rotateY(angle_magic);

  rectMode(CENTER);
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();

      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -6, 2);

      let a = angle + offset;

      let h = floor(map(sin(a), -1, 1, 100, 300));

      translate(x - width / 2 + w, 0, z - height / 2);
      ambientMaterial(255);
      normalMaterial();
      box(w - 2, h, w - 2);

      pop();
    }
  }

  angle += 0.1;
}
