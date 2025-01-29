function Pipe()
{
    this.top = randon(height/2);
    this.bottom = randon(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 5;

    this.show = function()
    {
        fill(255);
        
        //top n bottom in same line vertically
        //top section
        rect(this.x, 0, this.w, this.top);
        //space
        //bottom section
        rect(this.x, height-this.bottom, this.w, this.bottom);

    }

    this.update = function()
    {
        this.x -= this.speed
    }


}