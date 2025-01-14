function Flower(x,y)
{
    this.x = x;
    this.y = y;
    this.r = 30;

    this.grow = function()
    {
        this.r = this.r +2;
    }

    this.show = function()
    { 
        fill(255,0,200);
        rectMode(CENTER);
        ellipse(this.x , this.y, this.r *2, this.r *2);
    }

}