let sandpiles;
let nextpiles;

function setup() {
  createCanvas(600, 600);
  pixelDensity(1);
  
  sandpiles = new Array(width).fill().map(i => new Array(height).fill(0));
  nextpiles = new Array(width).fill().map(i => new Array(height).fill(0));
  
  
  sandpiles[width/2][height/2] = 1000000000;
  
  background(255);
}

function draw() {

}