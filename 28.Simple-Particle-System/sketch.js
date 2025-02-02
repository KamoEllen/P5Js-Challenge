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

       if (particles[i].finish())
       {
        //remove particle
        particles.splice(i,1);

       }
       
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
        this.alpha = 255;
    }

    finish()
    {
        return this.alpha < 0; //true or false response
    }

    update()
    {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5; //fade effect

    }
    show()
    {
        stroke(255);
        // noStroke();
       fill(255,this.alpha); 
       //particle 
        ellipse(this.x , this.y , 16);


    }
   
  }