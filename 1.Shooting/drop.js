function Drop(x,y)
{
    this.x = x;
    this.y = y;

    this.show = function()
    {
        noStroke();
        fill(150,0,255);
        ellipse(this.x,this.y, 12, 4);
    }

    this.move = function()
    {
        this.y = this.y - 5;
    }
}