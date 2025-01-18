let cols;
let rows;
let scl = 20;
let w = 600;
let h = 600;
let flying = 0; // Add this for movement

function setup() {
    createCanvas(w, h, WEBGL);
    cols = w / scl;
    rows = h / scl;
}

function draw() {
    background(0);
    stroke(255);
    noFill();
    
    // Basic 3D setup
    translate(width/2, height/2);
    rotateX(PI/3);
    translate(-w/2, -h/2);
    
    // Move through noise space
    flying -= 0.1;
    
    let yoff = flying;
    for (let y = 0; y < rows; y++) {
        let xoff = 0;
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            // Use noise for height
            let height = map(noise(xoff, yoff), 0, 1, -100, 100);
            
            vertex(x*scl, y*scl, height);
            vertex(x*scl, (y+1)*scl, height);
            
            xoff += 0.2;
        }
        endShape();
        yoff += 0.2;
    }
}