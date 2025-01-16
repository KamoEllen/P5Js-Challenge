function Cell() {
    this.pos = createVector(random(width) , random(height));
    this.r = 80;
    this.c = color(random(100,255),0,random(100,255));

    this.clicked = function(x,y)
    {
        var d = dist(this.pos.x,this.pos.y , x, y);
          if (d < this.r) //distance less than radius
        {
            return true;
        }
        else 
        {
            return false;
        }
    }

    this.move  = function()
    {
        var vel = p5.Vector.random2D();
        this.pos.add(vel);
    }
    this.show  = function()
    {
        fill(this.c);
        noStroke();
            ellipse(this.pos.x,this.pos.y, this.r,this.r);
    }
}