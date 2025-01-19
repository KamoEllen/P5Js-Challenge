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
        for (var y = 0; y < height; y++)
            {
              grid[x][y] = {a: random(1), b: random(1)}
              next[x][y] = {a: 0, b: 0 }
            }
    }
}

function draw() {
    background(5);

    loadPixels();
    for (var x = 0; x < width; x++)
    {
        for (var y = 0; y < height; y++)
        {
            var pix = (x + y * width)* 4;
            pixels[pix + 0] =floor(grid[x][y].a*255);
            pixels[pix + 1] = 0;
            pixels[pix + 2] = floor(grid[x][y].b*255);
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
}