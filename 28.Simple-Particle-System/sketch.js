let p;
function setup() {
    createCanvas(600, 600);
   p = new Particle();
  }
  
  function draw() {
    background(255,51,180);
    p.show();
  }

  class Particle
  {
    constructor()
    {
        this.x = 300;
        this.y = 380;
    }
    show()
    {
        stroke(255);
       fill(255,10); 
        ellipse(this.x , this.y , 46);


    }
  }