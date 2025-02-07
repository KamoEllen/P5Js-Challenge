let ripples = [];

function setup() {
    createCanvas(400, 400);
    background(0);
}

function draw() {
    background(0,20, 220); //blue
    
   
    for (let i = ripples.length - 1; i >= 0; i--) {
        ripples[i].update();
        ripples[i].show();
        
        if (ripples[i].isFinished()) {
            ripples.splice(i, 1);
        }
    }
}

function mousePressed() {
    ripples.push(new Ripple(mouseX, mouseY));
}

function mouseDragged() {
    ripples.push(new Ripple(mouseX, mouseY));
}