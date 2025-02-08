Node.prototype.visit = function(parent) {
    if (this.left != null) {
      this.left.visit(this);
    }
    console.log(this.value);
    fill(255);
    noStroke();
    textAlign(CENTER);
    text(this.value, this.x, this.y);
    stroke(255);
    noFill();
    ellipse(this.x, this.y, 20, 20);
    if (parent != null) {
      line(parent.x, parent.y, this.x, this.y);
    }
    if (this.right != null) {
      this.right.visit(this);
    }
  };
  
  // Tree.js (updated addValue method)
  Tree.prototype.addValue = function(val) {
    var n = new Node(val);
    if (this.root == null) {
      this.root = n;
      this.root.x = width / 2;
      this.root.y = 16;
    } else {
      this.root.addNode(n);
    }
  };