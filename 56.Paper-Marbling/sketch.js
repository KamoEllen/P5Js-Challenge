let drops = [];

function setup() {
  createCanvas(400, 400);
}

function mousePressed() {
  let drop = new Drop(mouseX, mouseY, 50);

  for (let other of drops)
  {
    other.marble(drop);
  }
  drops.push(drop);
}

function draw() {
  background(200, 22, 88);
  for (let drop of drops) {
    drop.show();
  }
}