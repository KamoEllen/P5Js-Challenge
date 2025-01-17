let easycam;
let sun;
let sunTexture, marsTexture, earthTexture, neptuneTexture, moonTexture;

function preload() {
    sunTexture = loadImage('data/sun.jpg');
    earthTexture = loadImage('data/earth.jpg');
    marsTexture = loadImage('data/mars.jpg');
    neptuneTexture = loadImage('data/neptune.jpg');
    moonTexture = loadImage('data/moon.jpg');
}

function setup() {
    createCanvas(1000, 1000, WEBGL);
    
    // Create sun
    sun = new Planet(50, 0, sunTexture);
    easycam = createEasyCam();
    
    // Create planets with specific textures
    sun.spawnMoonsWithTextures(3, [earthTexture, marsTexture, neptuneTexture]);
    
    // Add moons to each planet
    for (let planet of sun.planets) {
        let numMoons = floor(random(1, 3));
        planet.spawnMoonsWithTextures(numMoons, [moonTexture]);
    }
}

function draw() {
    background(0);
    lights();
    sun.show();
    sun.orbit();
}