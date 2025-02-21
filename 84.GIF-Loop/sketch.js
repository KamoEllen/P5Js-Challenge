const totalFrames = 120;
let counter = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  let percent = 0;
    percent = float(counter) / totalFrames;
  render(percent);
  counter++;
}

function render(percent) {
  let angle = map(percent, 0, 1, 0, TWO_PI);
  background(100,155,180)
  ellipse(percent * width , height/2, 20,20);

}
