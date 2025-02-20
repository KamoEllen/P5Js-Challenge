let circles;
let img;

function preload() {
  img = loadImage('dolphin.webp');
}

function setup() {
  createCanvas(600, 600);
  img.loadPixels();
  circles = [];
}

function draw() {
  background(0);

  let total = 10;
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
      console.log('finished');
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
            let d = dist(circl.x, circl.y, other.x, other.y);
            let distance = circl.r + other.r;

            if (d - 1 < distance) {
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
  let x = random(0, img.width);
  let y = random(0, img.height);

  let valid = true;
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    let d = dist(x, y, circle.x, circle.y);
    if (d - 2 < circle.r) {
      valid = false;
      break;
    }
  }
  if (valid) {
    let index = (int(x) + int(y) * img.width) * 4;
    let r = img.pixels[index];
    let g = img.pixels[index + 1];
    let b = img.pixels[index + 2];
    let c = color(r, g, b);
    return new Circle(x, y, color(c));
  } else {
    return null;
  }
}