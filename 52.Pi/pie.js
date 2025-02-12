class Pie{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.r = 32;
    }

    show()
    {
        circle(this.x, this.y , this.r);
    }

    update()
    {
        //increasing val of y by 1 everytime i update
        this.y = this.y + 6;
    }
}