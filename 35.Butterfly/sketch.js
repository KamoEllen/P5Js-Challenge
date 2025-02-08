var yoff = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100, 200, 30);
  translate(width / 2, height / 2);
  rotate(PI / 2);

  stroke(255);
  fill(200, 50);
  strokeWeight(1);
  var delta_angle = PI / 100;
  var dx = 0.5;
  var xoff = 0;

  beginShape();
  for (var a = -PI / 2; a <= PI / 2; a += delta_angle) {
    var n = noise(xoff, yoff);

    var r = sin(2 * a) * map(n, 0, 1, 50, 100);
    var x = r * cos(a);
    var y = r * sin(a);
    xoff += dx;
    vertex(x, y);
  }

  for (var a = PI / 2; a < (3 * PI) / 2; a += delta_angle) {
    var n = noise(xoff, yoff);

    var r = sin(2 * a) * map(n, 0, 1, 50, 100);
    var x = r * cos(a);
    var y = r * sin(a);
    xoff -= dx;

    vertex(x, y);
  }
  endShape();

  yoff += 0.1;
}
