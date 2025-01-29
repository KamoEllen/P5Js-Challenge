function Bird()
{
    this.y = width/2;
    this.x = 65;

    this.gravity = 1;
    this.velocity = 0;

    this.show = function()
    {
        fill(255);
        ellipse(this.x, this.y,26,26);
    }

    this.update = function()
    {
        this.velocity += this.gravity;
        this.y += this.velocity;

        //bottom of canvas
        if (this.y > height) //bird hits bottom canvas , does not pass thru 
        {
            this.y = heaight;
            this.velocity = 0;
        }
        //top of canvas
        if (this.y< 0)
        {
            this.y = 0;
            this.velocity =0;
        }


    }
}