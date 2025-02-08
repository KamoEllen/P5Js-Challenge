  function Tree() {
    this.root = null;
  }
  
  Tree.prototype.traverse = function() {
    if (this.root != null) {
      this.root.visit(this.root);
    }
  };
  
  Tree.prototype.search = function(val) {
    if (this.root != null) {
      return this.root.search(val);
    }
    return null;
  };
  
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
  