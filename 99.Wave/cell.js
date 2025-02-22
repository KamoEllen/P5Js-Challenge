class Cell
{
    constructor(x0, y0, r, angle)
    {
        this.r = r;
        this. angle = angle; //different stating angles causes wave shape
        this.x0 = x0;
        this.y0 = y0;
    }

    update()
    {
        this.x = this.r*cos(this.angle);
        this.y = this.r*sin(this.angle);
        this.angle += 0.05; //circle moves
    }

    show()
    {
        fill(55);
        stroke(200,0,10);
        ellipse(this.x0+this.x, this.y0+this.y, 5, 5);
    }

}