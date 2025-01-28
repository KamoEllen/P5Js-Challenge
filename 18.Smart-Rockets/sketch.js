var population;
var lifespan = 400; // Lifespan of each rocket in frames
var lifeP;
var count = 0;
var target;
//obstacle
var rx = 100; //x position
var ry = 150; //y position
var rw = 200; //width
var rh = 10;  //height
var maxforce = 0.2; // max force applied to rockets

function setup() {
  createCanvas(400, 400);
  population = new Population();
  lifeP = createP();
  target = createVector(width / 2, 50); // Target position
}

function draw() {
  background(1);
  population.run();
  lifeP.html(count);
  count++;

  // Reset population after lifespan is reached
  if (count == lifespan) {
    population.evaluate();
    population.selection();
    count = 0;
  }

  // obstacle
  fill(255);
  rect(rx, ry, rw, rh);

  // target
  ellipse(target.x, target.y, 16, 16);
}


function Population() {
  this.rockets = [];
  this.popsize = 50;
  this.matingpool = [];

  
  for (var i = 0; i < this.popsize; i++) {
    this.rockets[i] = new Rocket();
  }

  // fitness 
  this.evaluate = function() {
    var maxfit = 0;

    // Calculate fitness for each rocket
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].calcFitness();
      if (this.rockets[i].fitness > maxfit) {
        maxfit = this.rockets[i].fitness;
      }
    }

    // Normalize fitness values
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].fitness /= maxfit;
    }

    // Mating pool based on fitness
    this.matingpool = [];
    for (var i = 0; i < this.popsize; i++) {
      var n = this.rockets[i].fitness * 100;
      for (var j = 0; j < n; j++) {
        this.matingpool.push(this.rockets[i]);
      }
    }
  }

  // Select healthy parents to make kids
  this.selection = function() {
    var newRockets = [];
    for (var i = 0; i < this.rockets.length; i++) {
      var parentA = random(this.matingpool).dna;
      var parentB = random(this.matingpool).dna;
      var child = parentA.crossover(parentB);
      child.mutation();
      newRockets[i] = new Rocket(child);
    }
    this.rockets = newRockets;
  }

  // Update and display every rockets
  this.run = function() {
    for (var i = 0; i < this.popsize; i++) {
      this.rockets[i].update();
      this.rockets[i].show();
    }
  }
}

// manage genetic information
function DNA(genes) {
  if (genes) {
    this.genes = genes;
  } else {
    this.genes = [];
    for (var i = 0; i < lifespan; i++) {
      this.genes[i] = p5.Vector.random2D();
      this.genes[i].setMag(maxforce);
    }
  }

  // Crossover two DNA sequences
  this.crossover = function(partner) {
    var newgenes = [];
    var mid = floor(random(this.genes.length));
    for (var i = 0; i < this.genes.length; i++) {
      newgenes[i] = (i > mid) ? this.genes[i] : partner.genes[i];
    }
    return new DNA(newgenes);
  }

  // dna mutation with small probability maxfoce=0.2
  this.mutation = function() {
    for (var i = 0; i < this.genes.length; i++) {
      if (random(1) < 0.01) {
        this.genes[i] = p5.Vector.random2D();
        this.genes[i].setMag(maxforce);
      }
    }
  }
}

//individual rockets
function Rocket(dna) {
  this.pos = createVector(width / 2, height);
  this.vel = createVector();
  this.acc = createVector();
  this.completed = false;
  this.crashed = false;
  this.dna = dna ? dna : new DNA();
  this.fitness = 0;

  // Apply force to the rocket
  this.applyForce = function(force) {
    this.acc.add(force);
  }

  // Calculate fitness based on distance to target
  this.calcFitness = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    this.fitness = map(d, 0, width, width, 0);

    if (this.completed) this.fitness *= 10;
    if (this.crashed) this.fitness = 10;
  }

  //rocket's position and state
  this.update = function() {
    var d = dist(this.pos.x, this.pos.y, target.x, target.y);
    if (d < 10) {
      this.completed = true;
      this.pos = target.copy();
    }

    if (this.pos.x > rx && this.pos.x < rx + rw &&
        this.pos.y > ry && this.pos.y < ry + rh) {
      this.crashed = true;
    }

    if (this.pos.y > height || this.pos.y < 0 || this.pos.x > width || this.pos.x < 0) {
      this.crashed = true;
    }

    this.applyForce(this.dna.genes[count]);

    if (!this.completed && !this.crashed) {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
      this.vel.limit(4);
    }
  }

  // Display 
  this.show = function() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.vel.heading());
    rectMode(CENTER);
    rect(0, 0, 50, 10);
    pop();
  }
}