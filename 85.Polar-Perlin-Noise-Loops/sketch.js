function setup() {
  createCanvas(400, 400);
}

function draw() {
    background(180,155,100)
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();

  for (let a = 0; a < TWO_PI; a += 0.01) {
   let r = random(50,100);
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
  }
  endShape(CLOSE);
}