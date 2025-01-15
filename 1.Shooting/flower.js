function Flower(x,y)
{
    this.x = x;
    this.y = y;
    this.r = 30;
    this.xdir = 1;
    this.ydir = 0;

    this.grow = function() //grow radius
    {
        this.r = this.r +2;
    }    
    this.shiftDown = function() 
    {
        this.xdir *= -1;
        this.y += this.r; //objects r
    }
    this.move = function() //move flower
    {
        this.x = this.x + this.xdir;
        //this.y = this.y +  this.ydir;
    }

    this.show = function() //how it looks
    { 
        fill(255,0,200);
        rectMode(CENTER);
        ellipse(this.x , this.y, this.r *2, this.r *2);
    }

}