let c;
function setup() {
    createCanvas(400, 400);
    
    c = new Cell();

    }
    function draw() {
    background(200, 129,100);
    c.show()
    c.update();
  }