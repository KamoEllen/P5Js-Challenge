class Pie{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
    }

    show()
    {
        circle(this.x, this.y , 32);
    }

    update()
    {
        //increasing val of y by 1 everytime i update
        this.y = this.y + 1;
    }
}