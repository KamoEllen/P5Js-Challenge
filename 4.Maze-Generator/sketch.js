let cols;
let rows;
let w = 40; // width of each cell
let grid = [];
let current;

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
    current = grid[0]; //starting at top right pos
    frameRate(5);
}

function draw() {
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    current.visited = true;
     //STEP 1 - pick random neighbor
    let next = current.checkNeighbors();
    if (next) {

       
        next.visited = true;
         //STEP 3: Remove wall between current n chosen cell
         removWalls(current,next);
        //STEP 4: Mark chosen as visisted
        current = next;
    }
   
}

function index(i, j) {
    if (i < 0 || j < 0 || i > cols-1 || j > rows-1) {
        return -1;
    }
    return i + j * cols;
}

function removWalls(a,b)
{
    //2-3
    // 1

    //x
    var x = a.i - b.i;
    if (x===1)
    {
        //                   a and b
        //           _______________________
        //           |          |          |
        //           |          |          |
        //           |          |          |
        //           |__________|__________|
        //            
        a.walls[1]  = false; 
        //          0 (top)
        //           ____________
        //           |          |
        // 3(Left)   |          |  1 (right)
        //           |          |
        //           |__________|
        //             2 (bottom)
        b.walls[3] = false;
                //          0 (top)
        //           ____________
        //           |          |
        // 3(Left)   |          |  1 (right)
        //           |          |
        //           |__________|
        //             2 (bottom)
    }
    else if (x=== -1)
    {
        a.walls[3] = false;
        b.walls[1] = false;

    }

    //y
    var y = a.j - b.j;
    if (y===1)
    {
        //         b - a = 1
        //        a must have bottom removed
        //        b must have top removed
        //                0
        //           ____________
        //           |          |          
        //        3  |          |  1  a  = 29 
        //           |          |          
        //           |__________|
        //           |          |          
        //         3 |          |      b  = 30
        //           |          |          
        //           |__________|
        //                 2
        //            
        a.walls[2]  = false; 
        b.walls[0] = false;
    }
    else if (y=== -1)
    {
        a.walls[0] = false;
        b.walls[2] = false;

    }
}
class Cell {
    constructor(i, j) {
        this.i = i;
        this.j = j;
        this.walls = [true, true, true, true];
        this.visited = false;
    }

    checkNeighbors() {
        let neighbors = [];
        
        // Fixed: Using this.i and this.j instead of i, j
        let top = grid[index(this.i, this.j-1)];
        let right = grid[index(this.i+1, this.j)];
        let bottom = grid[index(this.i, this.j+1)];
        let left = grid[index(this.i-1, this.j)];

        if (top && !top.visited) {
            neighbors.push(top);
        }
        if (right && !right.visited) {
            neighbors.push(right);
        }
        if (bottom && !bottom.visited) {
            neighbors.push(bottom);
        }
        if (left && !left.visited) {
            neighbors.push(left);
        }

        // Fixed: Check neighbors.length, not neighbors > 0
        if (neighbors.length > 0) {
            let r = floor(random(0, neighbors.length));
            return neighbors[r];
        } else {
            return undefined;
        }
    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        // stroke();
        stroke(255);
        if (this.visited) {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, w, w);
        }
        
        // stroke(255);
        if (this.walls[0]) {
            line(x, y, x + w, y);
        }
        if (this.walls[1]) {
            line(x + w, y, x + w, y + w);
        }
        if (this.walls[2]) {
            line(x + w, y + w, x, y + w);
        }
        if (this.walls[3]) {
            line(x, y + w, x, y);
        }
    }
}