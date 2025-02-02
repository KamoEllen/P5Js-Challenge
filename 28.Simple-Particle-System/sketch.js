let particles = [];
function setup() {
    createCanvas(600, 600);
//    p = new Particle();
//    let p = new Particle();
//     particles.push(p);
  }
  
  function draw() {
    background(255,51,180);
    let p = new Particle();
    particles.push(p);
    // p.show();
   for (let i = 0; i < particles.length;i++)
    {
        particles[i].update();
       particles[i].show(); 
       
    } 
    
  }

  class Particle
  {
    constructor()
    {
        this.x = 300;
        this.y = 380;
        this.vx = random(-1,1);
        this.vy = random(-5,-1);
    }

    update()
    {
        this.x += this.vx;
        this.y += this.vy;

    }
    show()
    {
        stroke(255);
       fill(255,10); 
       //particle 
        ellipse(this.x , this.y , 46);


    }
   
  }