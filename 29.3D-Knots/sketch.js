function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(90, 90, 229);

  var beta = 0;

  beginShape();
  while (beta < PI)
  {
    var r = 0.8 + 1.6 * sin(6  * beta);
    var theta = 2 * beta;
    var phi = 0.6 * PI * sin(12 * beta);
    var x = r * cos(phi) * cos(theta);
    var y = r * cos(phi) * sin(theta);
    var z = r * sin(phi);

    beta +=0.1;
  }
  endShape();
}