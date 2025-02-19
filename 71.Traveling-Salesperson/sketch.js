var cities = [];
var totalCities = 5;

function setup() {
  createCanvas(400, 300);
  for (var i = 0; i < totalCities; i++) {
    var v = createVector(random(width), random(height));
    cities[i] = v;
  }
}

function draw() {
  background(188, 199, 234); // soft blue
  fill(255);
  for (var i = 0; i < cities.length; i++) {
    ellipse(cities[i].x, cities[i].y, 8, 8);
  }
}