var r = 10; //radius
var k = 30; //constant k , limit
var grid = [];
var w = r / sqrt(2);

function setup() {
    createCanvas(640, 480);
    background(0);
    strokeWeight(4);

    //step 0
    var cols = floor(width/w);
    var rows = floor(height/w);
    for (vari = 0; i < cols * rows ; i++)
    {
        grid[i] = -1;
    }



  }
  
//   function draw() {
//     background(0);
//   }