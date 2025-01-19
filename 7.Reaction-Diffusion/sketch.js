//1 array is first row
// [ [ 1 , 1 , 1]
//   [ 1 , 1 , 1]
//   [ 1 , 1 , 1]
//   [ 1 , 1 , 1] ]
var grid;
var next;

function setup() {
    createCanvas(600, 400);
    pixelDensity(1);
    grid = [];
    next = [];
    for (var x = 0; x < width; x++)
    {
        grid[x] = [];
        next[x] = [];
        for (var y = 0; y < width; y++)
            {
              grid[x][y]
              {
                a: 0;
                b: 0;
              }
              next[x][y]
              {
                a: 0;
                b: 0;
              }
            }
    }
}

function draw() {
    background(0);
}