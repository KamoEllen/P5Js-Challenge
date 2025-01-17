let easycam;
let sun;

function setup() {
    createCanvas(1000, 1000, WEBGL);
    sun = new Planet(50, 0);
    easycam = createEasyCam();
    
    // Create some planets
    sun.spawnMoons(5); // This will create 5 planets around the sun
    
    for (let planet of sun.planets) {
        let numMoons = floor(random(0, 4));
        planet.spawnMoons(numMoons);
    }
}

function draw() {
    background(0);
    lights();
    sun.show();
    sun.orbit();
}