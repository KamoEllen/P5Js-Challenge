let sun;

function setup() {
    createCanvas(1000,1000, WEBGL);
    sun = new Planet(50, 0);
    sun.spawnMoons(5);

    for (let planet of sun.planets) {
        let numMoons = floor(random(0, 4));
        planet.spawnMoons(numMoons);
    }
}

function draw() {
    background(0);
    lights();
    // Add camera control
    camera(200, -200, 200,  // camera position
           0, 0, 0,         // look at center
           0, 1, 0);        // up vector
    sun.show();
    sun.orbit();
}