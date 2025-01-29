var r = 10; //radius
var k = 30; //constant k , limit
var grid = [];
// var w = r / sqrt(2);
var w = r / Math.sqrt(2);
var active = [];
//points are in cells on the grid , find the one closest to the active poit 
//by checking the contents of the closest cells
function setup() {
    createCanvas(409, 400);
    background(0);
    strokeWeight(4);

    //step 0
    var cols = floor(width/w);
    var rows = floor(height/w);
    for (var  i = 0; i < cols * rows ; i++)
    {
        grid[i] = -1;
    }

    //step 1
    var x = random(width);
    var y = random(height);
    var i = floor(x/ w);
    var j = floor(y / w);
    var pos = createVector(x,y);
    grid[i+j * cols] = pos;
    active.push(pos);

    

  }
  
  function draw() {

    if (active.length > 0)
    {
        var randIndex = floor(random(active.length));

        var pos = active[randIndex]; 
        var found = false; 

        for ( var n = 0; n < k; n++)
        {
            // var a = random(TWO_PI);

            // var offsetX = cos(a); //with angle we can find size,position
            // var offsetY = sin(a);

            var sample = p5.Vector.random2D();
            var  m = random(r, 2 * r);
            sample.setMag(m);//set magnitud
            // sample.setMag(m);
            

            sample.add(pos);

            var col = floor(sample.x / w);
            var rorw =floor(sample.y / w);

            var ok = true; //distnce

            for (var i = -1; i <= 1; i++)
            {
                for (var j = -1; j <= 1; j++)
                {
                    var neighbor = grid[i + j] * cols;
                    var d = p5.Vector.dist(sample,neighbor);

                    if ( d < r)
                    {//if theres nothing there 
                        ok = false;
                       
                    }
                }
            }


        }
        if (ok)
        {
            found = true;
            grid[col + row * cols] = sample;
            active.push(sample); // might use the point to pick a point next to it
            // break;
        }
    }

    if (!found)
    {
        active.splice(randIndex,1);
    }



    background(0);
    for ( var i = 0; i < grid.length; i++)
    {
        if ( grid[i]!= -1)
        {
            stroke(255);
            strokeWeight(4);
            point(grid[i].x, grid[i].y);
        }
    }

    for ( var i = 0; i < active.length;  i++)
    {
        stroke(255, 0, 255);
        strokeWeight(4);
        point(active[i].x , active[i].y);
    }
  }