//1 array is first row
// [ [ 1 , 1 , 1]
//   [ 1 , 1 , 1]
//   [ 1 , 1 , 1]
//   [ 1 , 1 , 1] ]
var grid;
var next;
var dA =1;
var dB = 0.5;
var feed= 0.055;
var k = 0.062; //kill rate - how fast values r being removed

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

    for (var x = 0; x < width; x++)
        {
            for (var y = 0; y < height; y++)
            {
                var a = grid[x][y].a ;
                var b = grid[x][y].b ;
                //a
                next[x][y].a = a +
                (dA +  laplaceA() * a  ) -
                (a * b * b)  +
                (feed * (1 - a));
                //b
                next[x][y].a = b +
                (dB +  laplaceB() ) +
                (a * b * b)  +
                ((k + feed) * b);

            //    next[x][y].a = grid[x][y].a*0.9;
            //    next[x][y].b = grid[x][y].b*0.8;
              
            }
        }

    loadPixels();
    for (var x = 0; x < width; x++)
    {
        for (var y = 0; y < height; y++)
        {
            var pix = (x + y * width)* 4;
            // pixels[pix + 0] =floor(grid[x][y].a*255);
            pixels[pix + 0] =floor(next[x][y].a*255);
            pixels[pix + 1] = 0;
            // pixels[pix + 2] = floor(grid[x][y].b*255);
            pixels[pix + 2] = floor(next[x][y].b*255);
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();

    swap();

}

swap()
{
    var temp = grid; //really like this
    grid = next;
    next = grid;
}