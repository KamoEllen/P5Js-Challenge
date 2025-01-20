function Leaf() 
{
    
    this.pos = createVector(random(width), random(height-100));

    this.show = function()
    {
        fill(255);
        noStroke();
        ellipse(this.pos.x, this.pos.y, 4, 4);
    }
}