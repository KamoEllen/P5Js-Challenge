let particles = [];
function setup() {
    createCanvas(600, 600);
//    p = new Particle();
   let p = new Particle();
    particles.push(p);
  }
  
  function draw() {
    background(255,51,180);
    // p.show();
   for (let i = 0; i < particles.length;i++)
    {
       particles[i].show(); 
    } 
    
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
       //particle 
        ellipse(this.x , this.y , 46);


    }
  }