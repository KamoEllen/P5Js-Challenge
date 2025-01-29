function Bird()
{
    this.y = width/2;
    this.x = 65;

    this.show = function()
    {
        fill(255);
        ellipse(this.x, this.y,26,26);
    }
}