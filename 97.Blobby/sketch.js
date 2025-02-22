let yoff = 0.0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(200, 29, 100);

  translate(width / 2, height / 2);

  var radius = 150;

  beginShape();
  let xoff = 0;
  for (var a = 0; a < TWO_PI; a += 0.1) {
    let offset = map(noise(xoff, yoff), 0, 1, -25, 25);
    let r = radius + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    xoff += 0.1;
  }
  endShape();


}