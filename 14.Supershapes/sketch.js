let slider;
let n1 = 0.3, n2 = 0.3, n3 = 0.3;
let a = 1, b = 1;
let osc = 0;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 10, 5, 1);
}

function supershape(theta) {
  const part1 = pow(abs((1 / a) * cos(theta * slider.value() / 4)), n2);
  const part2 = pow(abs((1 / b) * sin(theta * slider.value() / 4)), n3);
  const part3 = pow(part1 + part2, 1 / n1);

  return part3 === 0 ? 0 : 1 / part3;
}

function draw() {
  osc += 0.02;
  const m = map(sin(osc), -1, 1, 0, 10);

  background(51);
  translate(width / 2, height / 2);

  stroke(255);
  noFill();

  const radius = 100;
  const total = 200;
  const increment = TWO_PI / total;

  beginShape();
  for (let angle = 0; angle < TWO_PI; angle += increment) {
    const r = supershape(angle);
    const x = radius * r * cos(angle);
    const y = radius * r * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);
}
