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
    ship.move(); //ship is always moving when space key is pressed
    for (var i = 0; i < drops.length ; i++)
        {
         drops[i].show();  
         drops[i].move();
         for (var j = 0; j < flowers.length ; j++)
            {
                if (drops[i].hits(flowers[j]))
                {
                    flowers[j].grow();
                    drops[i].evaporate(); 
                }
            }
        }
        //checkin if flowers hit edge 
        var edge = false; //direction for flowers
    for (var i = 0; i < flowers.length ; i++)
        {
         flowers[i].show();  //show + move flowers
         flowers[i].move(); 

         
         //once flowers hit edge , move down and towards opposite side
         if (flowers[i].x > width || flowers[i].x < 0)
         {
            edge = true;
         }
        }
        if (edge)
        {
            for (var i = 0; i < flowers.length ; i++)
                {
                // if flowers hit right wall , they should shift down
                 flowers[i].shiftDown();
                
                }
        }
    for (var i =  drops.length-1 ; i >=0; i--)
        {
            if (drops[i].toDelete)
                { 
                    drops.splice(i, 1);
                }
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
    ship.setDir(1);
}
else if(keyCode === LEFT_ARROW)
{
    //ship.right();
    ship.setDir(-1);
}
}