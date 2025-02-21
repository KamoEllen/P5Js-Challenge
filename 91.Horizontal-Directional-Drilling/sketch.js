function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(100, 255,155);
  noStroke();
  rectMode(CORNER);
  fill(155, 100, 255);
  rect(0, 100, width, height - 100);
  fill(255, 100, 155);
  arc(width / 2, 100, 400, 200, 0, PI);

}

   