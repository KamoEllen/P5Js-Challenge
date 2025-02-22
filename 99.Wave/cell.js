class Cell
{
    constructor()
    {
        this.r = 100;// radius
        this. angle = 0;
    }

    update()
    {
        this.x = this.r*cos(this.angle);
        this.y = this.r*sin(this.angle);
    }

    show()
    {
        fill(0);
        ellipse(this.x, this.y, 5, 5);
    }

}