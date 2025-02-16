class Walker //(x,y,stuck)
{
    constructor(x, y) {
      if (arguments.length == 2) {
        this.pos = createVector(x, y);
        this.stuck = true;
      } else {
        this.pos = randomPoint();
        this.stuck = false;
      }
      this.r = radius;
    }

    walk = function()
    {
        var vel = p5.Vector.random2D();
    this.pos.add(vel);

        // walker.x += random(-2, 2);
        // walker.y += random(-2, 2);
        this.pos= constrain(this.pos.x, 0, width);
        this.pos = constrain(this.pos.y, 0, height);
        
       
        // walker.x = constrain(walker.x, 0, width);
        // walker.y = constrain(walker.y, 0, height);
    }

    checkStuck = function()
    {
        // while (!stuck) {
            for (var i = 0; i < tree.length; i++) {
                var d = p5.Vector.dist(walker.pos, tree[i]);
                if (d < r * 2) {
                    stuck = true;
                    break;
                }
            }
            
        
    // }
    }
}