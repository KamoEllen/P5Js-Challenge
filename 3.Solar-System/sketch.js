let sun;

function setup() {
    createCanvas(1000,1000, WEBGL);
    sun = new Planet(50, 0,0);
    sun.spawnMoons(1,1);

    for (let planet of sun.planets) {
        let numMoons = floor(random(0, 4));
        planet.spawnMoons(numMoons);
    }
}

function draw() {
    background(0);
    lights();
    //Ad camera control
    // camera(200, -200, 200,  // camera position
    //        0, 0, 0,         // look at center
    //        0, 1, 0);        // up vector
  translate(width/2, height/2);
    sun.show();
    sun.orbit();
}