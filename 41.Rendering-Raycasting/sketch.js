let walls = [];
let ray;
let particle;
let xoff = 0;
let yoff = 10000;
let sliderFOV;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++) {
    let x1 = random(width);
    let x2 = random(width);
    let y1 = random(height);
    let y2 = random(height);
    walls[i] = new Boundary(x1, y1, x2, y2);
  }
  walls.push(new Boundary(-1, -1, width, -1));
  walls.push(new Boundary(width, -1, width, height));
  walls.push(new Boundary(width, height, -1, height));
  walls.push(new Boundary(-1, height, -1, -1));
  particle = new Particle();
  sliderFOV = createSlider(0, 360, 45);
  sliderFOV.input(changeFOV);
}

function changeFOV() {
  const fov = sliderFOV.value();
  particle.updateFOV(fov);
}

// function draw() {
//   if (keyIsDown(LEFT_ARROW)) {
//     particle.rotate(-0.1);
//   } else if (keyIsDown(RIGHT_ARROW)) {
//     particle.rotate(0.1);
//   }

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW)) {
    particle.rotate(-0.1);
  } else if (keyIsDown(RIGHT_ARROW)) {
    particle.rotate(0.1);
  }
  else if (keyIsDown(UP_ARROW)) {
    particle.move(1);
  } else if (keyIsDown(DOWN_ARROW)) {
    particle.move(-1);
  }
  for (let wall of walls) {
    wall.show();
  }
  //particle.update(noise(xoff) * width, noise(yoff) * height);
  particle.update(mouseX, mouseY);
  particle.show();
  particle.look(walls);

  xoff += 0.01;
  yoff += 0.01;
}
