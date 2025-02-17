class Block
{
    constructor(x,w)
    {
        this.x =x;
        this.y = height -w;
        this.w = w;
    }

    show()
    {
        image(blockImg, this.x, this.y,this.w,this.w);
    }
}