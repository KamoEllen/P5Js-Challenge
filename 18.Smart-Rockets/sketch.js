function setup() {
    createCanvas(400, 400);
  } 
  function draw() {
    background(1);
  }

  function Rocket()
  {
    this.pos = createVector();
    this.vel = createVector();
    this.acc = createVector();


    this.applyForce = fuction(force)
    {
        this.acc.add(force);
    }
    this.update = function()
    {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.show = function()
    {
        translate(this.pos.x, this.pos.y);
        rotate(this.vel.heading());
        rectMode(CENTER);
        rect(this.pos.y, this.pos.y,10,50);

    }
  }