// sketch.js
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
    const v = createVector(random(width), random(height / 2));  // Random city placement
    cities[i] = v;
    order[i] = i;
  }

  for (let i = 0; i < popSize; i++) {
    population[i] = shuffle(order);  // Randomly shuffle the city order for the population
  }
  statusP = createP('').style('font-size', '32pt');
}

function draw() {
  background(0,44,7);  // Clear the screen each frame

  
}
