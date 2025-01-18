// Lorenz Attractor
// variables
let x = 0.01;
let y = 0;
let z = 0.02;
// constants
let a = 10;
let b = 28;
let c = 8.0 / 3.0;

// Add points array to store history
let points = [];
let maxPoints = 5000; // Limit points for performance

function setup() {
    createCanvas(600, 400, WEBGL);
    background(51);
    colorMode(HSB);
}

function draw() {
    background(0); // Slight fade effect
    
    // Calculate next point
    let dt = 0.01;
    let dx = (a * (y - x)) * dt;
    let dy = (x * (b - z) - y) * dt;
    let dz = (x * y - c * z) * dt;
    
    x = x + dx;
    y = y + dy;
    z = z + dz;
    
    // Store new point
    points.push({x: x, y: y, z: z});
    if (points.length > maxPoints) {
        points.shift(); // Remove oldest point
    }
    
    // Set up the view
    rotateY(frameCount * 0.002);
    scale(5); // Adjust scale to fit canvas
    
    // Draw all points
    noFill();
    beginShape();
    points.forEach((p, index) => {
        // Color varies with height
        let hue = map(p.y, -30, 30, 0, 360);
        stroke(hue, 255, 255);
        vertex(p.x, p.y, p.z);
    });
    endShape();
}