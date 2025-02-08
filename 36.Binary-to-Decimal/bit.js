class Bit 
{
    constructor()
    {
        this.x = 0;
        this.y = 0;
        this.diameter = 0;
        this.state =0;
    }

    show()
    {
        stroke(255);
        fill(255 * this.state)
        ellipse(this.x,this.x,this.diameter);

    }
}