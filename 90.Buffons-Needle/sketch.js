let t = 20;
let len = 10;

let total = 0;
let intersecting = 0;

let pieDiv;

function setup() {
  createCanvas(600, 600);
  background(155, 180, 100);

  for (let col = 0; col < width; col += t) {
    stroke(255);
    strokeWeight(1);
    line(col, 0, col, height);
  }


  pieDiv = createDiv("0.0");
  pieDiv.style("font-size", "64pt");
  pieDiv.style("font-family", "courier");
}

function draw() {
  for (let i = 0; i < 100; i++) {
    let angle = random(0, PI);
    let x = random(width);
    let y = random(height);

    // intersection
    let closest = round(x / t);
    let d = abs(closest * t - x);

    if (d < (len * sin(abs(angle))) / 2) {
      stroke(200, 255, 0); // Intersecting lines: yellow
      strokeWeight(2);
      intersecting++;
    } else {
      stroke(255, 100, 160); // Non-intersecting lines: pink
      strokeWeight(1);
    }

    total++;

   
    push();
    translate(x, y);
    rotate(angle);
    strokeWeight(1);
    line(0, -len / 2, 0, len / 2);
    pop();
  }


  let prob = intersecting / total;
  let pie = (2 * len) / (prob * t);

  
  pieDiv.html(nf(pie, 1, 5));
}