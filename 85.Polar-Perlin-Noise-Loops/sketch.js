
let phase = 0;
let zoff = 0;
let slider;

function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, 10, 3, 0.1);
}

function draw() {
    background(180,155,100)
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  let noiseMax = slider.value();
  for (let a = 0; a < TWO_PI; a += radians(2)) {
    let xoff = map(cos(a + phase), -1, 1, 0, noiseMax);
    let yoff = map(sin(a + phase), -1, 1, 0, noiseMax);
    let r = map(noise(xoff, yoff, zoff), 0, 1, 100, height / 2);
    // let r = random(50,100);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
//   noLoop();
  phase += 0.003;
  zoff += 0.01;
}