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


    }
}