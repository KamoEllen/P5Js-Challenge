let cols;
let rows;
let w = 40; // width of each cell
let grid = [];

function setup() {
    createCanvas(600, 400);
    cols = floor(width / w);
    rows = floor(height / w);

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cell = new Cell(i, j);
            grid.push(cell);
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
}

class Cell {
    constructor(i, j) {
        this.i = i; // column
        this.j = j; // row
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        stroke(255);
        line(x, y, x + w, y); // horizontal line
        // noFill();
        // Reflect(x,y,w,w);
    }
}