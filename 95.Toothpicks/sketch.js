let picks = [];
let len = 63;

function setup() {
  createCanvas(600, 600);
  picks.push(new Toothpick(0, 0, 1));
}

function draw() {
  background(29, 100, 200);
  translate(width / 2, height / 2);
  for (let t of picks) {
    t.show();
  }
}
