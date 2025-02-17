class Block
{
    constructor(x,w,v)
    {
        this.x =x;
        this.y = height -w;
        this.w = w;
        this.v = v;
    }
    update()
    {
        this.x += this.v;
    }

    show()
    {
        image(blockImg, this.x, this.y,this.w,this.w);
    }
}