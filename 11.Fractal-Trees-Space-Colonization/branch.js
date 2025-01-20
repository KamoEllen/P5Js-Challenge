function Branch(parent,pos,dir) 
{
    //every branch has parent n position
    this.pos = pos;
    this.parent = parent;
    this.dir = dir;
    

    this.next = function()
    {
        var nextPos = p5.Vector.add(this.pos , this.dir);
        //keeping original dir with copy()
        var nextBranch = new Branch(this, nextPos, this.dir.copy());
        return nextBranch;
    }

    this.show = function() {
        if (parent != null) {
          stroke(255);
          strokeWeight(2);
          line(this.pos.x, this.pos.y, this.parent.pos.x, this.parent.pos.y);
        }
    
      }
}