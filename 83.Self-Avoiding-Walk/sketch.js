let allOptions = [
    { dx: 1, dy: 0 },
    { dx: -1, dy: 0 },
    { dx: 0, dy: 1 },
    { dx: 0, dy: -1 },
  ];
  
  let x, y;
  let grid;
  let spacing = 10;
  let cols, rows;
  
  function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
    }
    return arr;
  }
  
  function setup() {
    createCanvas(400, 400);
    cols = floor(width / spacing);
    rows = floor(height / spacing);
    x = cols / 2;
    y = rows / 2;
    background(120,120 ,200); //blue
    grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        grid[i][j] = false;
      }
    }
    grid[x][y] = true;
  }