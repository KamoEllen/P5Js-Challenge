var ship;
var flowers = [];
var drops = [];

function setup() {
    createCanvas(600, 400);
    ship = new Ship();
    //drop = new Drop(width/2, height/2);
    for (var i = 0; i < 6; i++)
    {
     flowers[i] = new Flower(i*80+80, 60);   
    }
    
}

function draw() {
    background(51);
    ship.show();
    for (var i = 0; i < drops.length ; i++)
        {
         drops[i].show();  
         drops[i].move();
        }
    for (var i = 0; i < flowers.length ; i++)
        {
         flowers[i].show();  
        }
    
}
function keyPressed()
{
    if (key === ' ')
    {
        //start at ship 
        var drop = new Drop(ship.x , height);
        drops.push(drop);
    }
if (keyCode === RIGHT_ARROW)
{
    //ship.left();
    ship.move(1);
}
else if(keyCode === LEFT_ARROW)
{
    //ship.right();
    ship.move(-1);
}
}