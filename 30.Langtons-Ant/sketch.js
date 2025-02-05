let grid;
let x;
let y;

function setup() {
  createCanvas(400, 400);
  grid = make2DArray(width, height);
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(220);
  stroke(0);
  strokeWeight(1);
  point(x, y);
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = 0;
    }
  }
  return arr;
}