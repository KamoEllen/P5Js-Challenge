let circles;
let spots;
let img;

function preload() {
img = loadImage("year.png");
}

function setup() {
  createCanvas(900, 400);
  img.loadPixels();
  spots = [];
  circles = [];
  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      let index = x + y * img.width;
      let c = img.pixels[index * 4];
      let b = brightness([c]);
      if (b > 1) {
        spots.push(createVector(x, y));
      }
    }
  }
}

function draw() {
  background(0);

  let total = 5;
  let count = 0;
  let attempts = 0;

  while (count < total) {
    let newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 1000) {
      noLoop();
      console.log("finished");
      break;
    }
  }

  for (let i = 0; i < circles.length; i++) {
    let circl = circles[i];

    if (circl.growing) {
      if (circl.edges()) {
        circl.growing = false;
      } else {
        for (let j = 0; j < circles.length; j++) {
          let other = circles[j];
          if (circl !== other) {
            var d = dist(circl.x, circl.y, other.x, other.y);
            var distance = circl.r + other.r;

            if (d - 4 < distance) {
              circl.growing = false;
              break;
            }
          }
        }
      }
    }

    circl.show();
    circl.grow();
  }
}

function newCircle() {
  var r = int(random(0, spots.length));
  var spot = spots[r];
  var x = spot.x;
  var y = spot.y;

  var valid = true;
  for (var i = 0; i < circles.length; i++) {
    var circle = circles[i];
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}