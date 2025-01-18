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
}

function draw() {
    background(51);
    for (let i = 0; i < grid.length; i++) {
        grid[i].show();
    }
    current.visited= true;
    current.checkNeighbors();
}
function index(i,j)
{
   
    if (i < 0 || j < 0 || i > cols-1 || j > rows -1)
    {
        return -1;
    }
    return i+ j * cols;
}
class Cell {
    constructor(i, j) {
        this.i = i;//rows
        this.j = j; //cols
         //which walls are active or not
        //recursive backytracker - visit cell , dont backtrack  write 
        //program to check if cells are visited
        this.walls = [true, true, true, true];
        this.visited = false;
    }

    checkNeighbors()
    {
         var neighbors = [];
        //  var index = i + j-1 * cols;
         //top - right - bottom - left
         var top = grid[index(i , j-1)]
         var right = grid[index(i+1 , j)];
         var bottom  = grid[index(i , j+1)];
         var left  = grid[index(i-1 , j)];

         if (top && !top.visited)
         {
            neighbors.push(top);
         }
          if (right && !right.visited)
         {
            neighbors.push(right);
         }
          if (bottom && !bottom.visited)
         {
            neighbors.push(bottom);
         }
          if (left && !left.visited)
         {
            neighbors.push(left);
         }

    }

    show() {
        let x = this.i * w;
        let y = this.j * w;
        
        if (this.visited) {
            noStroke();
            fill(255, 0, 255, 100);
            rect(x, y, w, w);
        }
        
        stroke(255);
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
