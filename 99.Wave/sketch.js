
let grid = [];
let cols = 15;
let rows = 15; 
let loc = 100;
function setup() {
  createCanvas(400, 400);
  let rowSize = height/rows;
  let colSize = width/cols; 
  
  for (let i=0; i<cols; i++){
    grid[i] = []
    for (let j=0; j<rows; j++){
      grid[i][j] = new Cell(colSize/2+i*colSize, rowSize/2+j*rowSize, rowSize/2, i*loc+j*loc);
    }
  }
}

function draw() {
    background(200, 129,100);
  for (let i=0; i<cols; i++){
    for (let j=0; j<rows; j++){
      grid[i][j].update();
      grid[i][j].show();
    }
  }
}