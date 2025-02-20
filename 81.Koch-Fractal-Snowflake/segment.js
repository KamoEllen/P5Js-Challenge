//segment class creates line segments and uses the generate() method to split them into four smaller segments
class Segment {
  
    constructor(a, b) {
      this.a = a.copy();
      this.b = b.copy();
    }
    
   generate() {
      let children = [];
      
      let v = p5.Vector.sub(this.b, this.a);
      v.div(3);
      
 
      let b1 = p5.Vector.add(this.a, v);
      children[0] = new Segment(this.a, b1);
      

      let a1 = p5.Vector.sub(this.b, v);
      children[3] = new Segment(a1, this.b);
      
      v.rotate(-PI/3);
      let c = p5.Vector.add(b1,v);
  
    
      children[1] = new Segment(b1, c);
      
      children[2] = new Segment(c, a1);
      return children;
    }
    
    show() {
      stroke(255);
      line(this.a.x, this.a.y, this.b.x, this.b.y);
    }
  }
  