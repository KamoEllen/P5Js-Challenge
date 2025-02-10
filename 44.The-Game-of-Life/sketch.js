function make2DArray(cols, rows) {
    let arr = new Array(cols); // x is col, y is row
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

let grid;
let cols;
let rows;
let resolution = 20;

function setup() {
    createCanvas(400, 400);

    cols = width / resolution;
    rows = height / resolution;

    grid = make2DArray(cols, rows);

    // nested loop, fill in each col and row with 0 or 1
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = floor(random(2));
        }
    }
}

function draw() {
    background(19, 70, 20);

    // travel all col n rows 
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                stroke(51);
                fill(255);
                rect(x, y, resolution - 1, resolution - 1);
            }
        }
    }

    // Create a new array for the next generation
    let next = make2DArray(cols, rows);

    // compute next based on grid
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let state = grid[i][j];

            // am I on the edge
            // if (i == 0 || i == cols - 1 || j == 0 || j == rows - 1) {
            //     // using same value if found to be on the edge
            //     next[i][j] = state;
            // } else {
            //     // if not on the edge then count neighbors, change or stay the same
                let neighbors = countNeighbors(grid, i, j);

                if (state == 0 && neighbors == 3) {
                    next[i][j] = 1;
                } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                    next[i][j] = 0;
                } else {
                    next[i][j] = state;
                }
            //}
        }
    }

    // update the grid with the next generation
    grid = next;
}

function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {

            //modulos gives the remainder after division
            let col = (x + i + cols) % cols;
            let row = ( y + j + rows) % rows;
            sum += grid[col][row];


            // looking at points from x,y
            // sum += grid[x + i][y + j];
        }
    }
    sum -= grid[x][y];
    return sum;
}
