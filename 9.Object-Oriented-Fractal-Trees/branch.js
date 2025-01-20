function Branch(begin,end) // x , y -> p5 vector obj
{
    this.begin = begin;
    this.end = end;

    this.show = function()
    {
        stroke(255);
        line(this.begin.x , this.begin.y, this.end.x, this.end.y);

    }
}