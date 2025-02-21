let total = 0;
let intersecting = 0;

function draw() {
  for (let i = 0; i < 100; i++) {
    let angle = random(0, PI);
    let x = random(width);
    let y = random(height);
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(1);
    line(0, -len / 2, 0, len / 2);
    pop();

    total++;
  }
}