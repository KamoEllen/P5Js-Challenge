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
  function isValid(i, j) {
    if (i < 0 || i >= cols || j < 0 || j >= rows) {
      return false;
    }
    return !grid[i][j];
  }
  
  function draw() {
    stroke(255);
    strokeWeight(spacing * 0.5);
    point(x * spacing, y * spacing);
  
    let options = [];
    for (let option of allOptions) {
      let newX = x + option.dx;
      let newY = y + option.dy;
      if (isValid(newX, newY)) {
        options.push(option);
      }
    }
  
    if (options.length > 0) {
      let step = random(options);
      x += step.dx;
      y += step.dy;
      grid[x][y] = true;
    } else {
      console.log(`I'm stuck!`);
      noLoop();
    }
  }