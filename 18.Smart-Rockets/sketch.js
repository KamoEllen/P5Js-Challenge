var population;

function setup() {
  createCanvas(400, 400);
  rocket = new Rocket();
  population = new Population();
} 
function draw() {
  background(1);
  population.run();
  // pop.show();
}

function Population()
{
  this.rockets = [];
  this.popsize = 100;

  for (var i = 0; i < this.popsize; i++)
  {
    this.rockets[i] = new Rocket();
  }

  this.run  = function()
  {
    for ( var i = 0; i < this.popsize; i++)
    {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}

function Rocket()
{
  this.pos = createVector(width/2, height);
  // this.vel = createVector(0,-1);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();


  this.applyForce = function(force) 
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
    push();
      translate(this.pos.x, this.pos.y);
      rotate(this.vel.heading());
      rectMode(CENTER);
     
      rect(0,0,50,10);
    pop();

  }
}