const cities = [];
const totalCities = 15;
const popSize = 500;
const fitness = [];

let population = [];
let recordDistance = Infinity;
let bestEver;
let currentBest;

let statusP;

function setup() {
  createCanvas(600, 600);
  const order = [];
  for (let i = 0; i < totalCities; i++) {
    const v = createVector(random(width), random(height / 2));  
        cities[i] = v;
    order[i] = i;
  }

  for (let i = 0; i < popSize; i++) {
    population[i] = shuffle(order);  
  }
  statusP = createP('').style('font-size', '32pt');
}

function draw() {
    background(0,44,7);
  

    stroke(255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (let i = 0; i < bestEver.length; i++) {
      const n = bestEver[i];
      vertex(cities[n].x, cities[n].y);
      ellipse(cities[n].x, cities[n].y, 16, 16);  
        }
    endShape();
  

    translate(0, height / 2);  
        stroke(255);
    strokeWeight(4);
    noFill();
    beginShape();
    for (let i = 0; i < currentBest.length; i++) {
      const n = currentBest[i];
      vertex(cities[n].x, cities[n].y);
      ellipse(cities[n].x, cities[n].y, 16, 16);
    }
    endShape();
  }
  