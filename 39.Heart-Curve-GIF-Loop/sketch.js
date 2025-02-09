const heart = [];
let a = 0;
let beatScale = 1; 
let beatSpeed = 0.05; 

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(50, 50, 20); //keeping bg color
  translate(width / 2, height / 2); 

  beatScale = 1 + 0.1 * sin(frameCount * beatSpeed);
  scale(beatScale);
  
  stroke(255);
  strokeWeight(2);
  fill(255, 30, 30); //red

  beginShape();
  for (let v of heart) {
    vertex(v.x, v.y);
  }
  endShape();

  const r = height / 40;
  const x = r * 16 * pow(sin(a), 3);
  const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
  heart.push(createVector(x, y));

  if (a > TWO_PI) {
    loop(); //loop continues
  }

  a += 0.01;
}
