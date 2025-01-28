var population;
var lifespan = 200; //each rocket lives 200 frames, its dna will have array will have 200 vectors
var lifeP;
var count = 0;

function setup() {
  createCanvas(400, 400);
  rocket = new Rocket();
  population = new Population();
  lifeP = createP();
  target = createVector(width/2, 50);
} 

function draw() {
  background(1);
  population.run();
  // pop.show();
  lifeP.html(count);
  if (count == lifespan) //200
  {
    population = new Population(); //should restart 
    count = 0; //reset
  }
 
  count++; // Fixed: the global count variable

  ellipse(target.x, target.y , 16,16); //the target the cute little lines are trying to get to
}

function Population() {
  this.rockets = [];
  this.popsize = 100;
  this.matingpool = [];

  for (var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  this.evaluate = function() {
    //next thing being added , reusing rockets that got the closest
    //to the target n creating new lines from them ,babies

    //calculate their fitness
    //create mating pool to collect parents 

    var maxfit = 0;

    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness(); //calcFitness() in Rocket()

      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }

    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfit;
    }
  } // Fixed: Added missing closing bracket

  this.matingpool = []; // generating new array

  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}

function DNA() {
  this.genes = [];
  for (var i = 0; i < lifespan; i++) {
    this.genes[i] = p5.Vector.random2D();
    this.genes[i].setMag(0.7); //genes weaker movement
  }
}

function Rocket() {
  this.pos = createVector(width/2, height);
  this.vel = createVector();
  // this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.dna = new DNA();
  // this.count = 0;
  this.fitness = 0;

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.calcFitness = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y); //distance from rocket n the target
    this.fitness = 1/d; // Fixed: Typo in fitness
  }

  this.update = function() {
    this.applyForce(this.dna.genes[count]);
    // this.count++;

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 50, 10);
    pop();
  }
}