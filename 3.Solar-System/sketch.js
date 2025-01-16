let sun;

function setup() {
    createCanvas(600, 600, WEBGL);  //used to draw 3d shapes using p5js
    sun = new Planet(50, 0);  
    sun.spawnMoons(5);  // Create 5 planets

    // Fix: Convert random number to integer for number of moons
    for (let planet of sun.planets) {
        let numMoons = floor(random(0, 4));  // Will give 0, 1, 2, or 3 moons
        planet.spawnMoons(numMoons);
    }
}

function draw() {
    background(0);
    translate(width/2, height/2);
    sun.show();
    sun.orbit();
}