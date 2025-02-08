class Bit 
{
    constructor(x,y,d)
    {
        this.x = x;
        this.y = y;
        this.diameter = d;
        this.state =0;
    }

    setState(state)
    {
        this.state= parseInt(state);
    }

    show()
    {
        stroke(255);
        fill(255 * this.state)
        ellipse(this.x,this.x,this.diameter);

    }
}