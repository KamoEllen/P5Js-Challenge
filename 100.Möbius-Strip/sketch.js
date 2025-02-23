let r1 = 150;
let r2 = 20;
let angle = 0;

function setup() {
    createCanvas(400, 400, WEBGL);
    angleMode(DEGREES);
}

function draw() {
  
    background(30); 

    // lighting
    ambientLight(100);
    directionalLight(255, 90, 255, 0, 0, -1);

    orbitControl();

    let x, y, z;
    beginShape(QUAD_STRIP);
    let big = 1;
    let small = 0.5;
    let startingAngle = 180;
    for (let theta = 0; theta <= 360; theta += 10) {
        
        fill(255, 100, 100); 
        stroke(0); 
        strokeWeight(1);
        x = (r1 + r2 * cos(small * theta)) * cos(big * theta);
        y = (r1 + r2 * cos(small * theta)) * sin(big * theta);
        z = r2 * sin(small * theta);
        vertex(x, y, z);

        
        fill(100, 100, 255); 
        stroke(0);
        strokeWeight(1);
        x = (r1 + r2 * cos(startingAngle + small * theta)) * cos(big * theta);
        y = (r1 + r2 * cos(startingAngle + small * theta)) * sin(big * theta);
        z = r2 * sin(startingAngle + small * theta);
        vertex(x, y, z);
    }
    endShape();

    let x2, y2, z2;
    if (angle < 180) {
        x2 = (r1 + r2 * cos(small * angle)) * cos(big * angle);
        y2 = (r1 + r2 * cos(small * angle)) * sin(big * angle);
        z2 = r2 * sin(small * angle);
    } else {
        x2 = (r1 + r2 * cos(startingAngle + small * angle)) * cos(big * angle);
        y2 = (r1 + r2 * cos(startingAngle + small * angle)) * sin(big * angle);
        z2 = r2 * sin(startingAngle + small * angle);
    }

    push();
    translate(x2, y2, z2);
    fill(255, 255, 100);
    stroke(0); 
    strokeWeight(1);
    sphere(10);
    pop();

    angle += 1;
}