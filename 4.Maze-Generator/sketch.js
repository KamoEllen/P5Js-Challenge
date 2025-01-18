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
        this.walls= [true , true, true, true];
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        stroke(255);
        //creating grid by drawing lines seperately
        if (this.walls[0])
        {
            line(x   , y  , x + w  , y); // horizontal line
        }
        if (this.walls[1])
        {
           line(x+w , y  , x+w    , y+ w);
        
        }
        if (this.walls[2])
        {
           line(x+w ,y+w ,x       ,y+w);   
        }
        if (this.walls[3])
        {
            line(x   ,y+w ,x       ,y); 
        }
        
       
       
        // noFill();
        // Reflect(x,y,w,w);
    }
}