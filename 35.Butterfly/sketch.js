function setup() {
  createCanvas(400, 400);
  background(100, 200, 30);
  translate(width / 2, height / 2); // everythin relative to center

  var r = 100;
  stroke(255);
  fill(200, 50);
  strokeWeight(1);
  var delta_angle = PI / 100;
  var xoff = 0;
  //right wing
  beginShape();
  for (var a = -PI / 2; a <= PI / 2; a += delta_angle) {
    var n = noise(xoff);
    var r = map(n, 0, 1, 50, 125);
    var x = r * cos(a);
    var y = r * sin(a);
    xoff += 0.1;
    vertex(x, y);
  }
  endShape();
  //left wing
  var xoff = 0;
  beginShape();
  for (
    var a = -PI / 2;
    a > (-3 * PI) / 2;
    a -= delta_angle //3
  ) {
    var n = noise(xoff);
    var r = map(n, 0, 1, 50, 125);
    var x = r * cos(a);
    var y = r * sin(a);
    xoff += 0.1;

    vertex(x, y);
  }
  endShape();
}
